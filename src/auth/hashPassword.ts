import crypto from 'crypto';

// Function to hash a string with a salt using SHA-256
export const hashPassword = (string: string, salt: string) => {
  // Create a hash object using the SHA-256 algorithm
  const hash = crypto.createHash('sha256');

  // Concatenate the salt and string
  const saltedString = salt + string;

  // Update the hash object with the salted string
  hash.update(saltedString);

  // Generate the hashed value as a hexadecimal string
  const hashedString = hash.digest('hex');

  // Return the hashed string
  return hashedString;
};
