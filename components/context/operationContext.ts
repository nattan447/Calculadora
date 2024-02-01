import React from 'react';

import {createContext} from 'react';

interface contextInterface {
  operation: string | undefined;
  setOperation: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const OperationContext = createContext<undefined | string>(undefined);

export {OperationContext};
