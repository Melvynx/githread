import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextApiRequest, NextApiResponse } from 'next';
import { AuthOptions, getServerSession } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { prisma } from '../db/prisma';
import { env } from '../env';

export const authOptions: (
  req?: NextApiRequest,
  res?: NextApiResponse
) => AuthOptions = (req, res) => ({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      // set the username when account is created
      profile(profile) {
        return {
          id: profile.id.toString(),
          username: profile.name,
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],

  callbacks: {
    session({ session, user }) {
      if (!session?.user) return session;
      session.user.id = user.id;
      session.user.image = user.image;
      return session;
    },
  },
});

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions());
  return session;
};
