'use client';

import { ClientComponent } from '../ClientComponent';
import { NeutralComponent } from '../NeutralComponent';

export const ClientNeutral = () => {
  return (
    <ClientComponent>
      <NeutralComponent />
    </ClientComponent>
  );
};
