import React from 'react';
import { ServerComponent } from '../ServerComponent';
import { NeutralComponent } from '../NeutralComponent';

export const ServerNeutral = () => {
  return (
    <ServerComponent>
      <NeutralComponent />
    </ServerComponent>
  );
};
