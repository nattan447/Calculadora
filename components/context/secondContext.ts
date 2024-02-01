import React from 'react';

import {createContext} from 'react';

interface contextInterface {
  secondNumber: string | undefined;
  setSecondNumber: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SecondContext = createContext<undefined | string>(undefined);

export {SecondContext};
