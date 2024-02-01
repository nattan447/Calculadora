import React from 'react';

import {createContext} from 'react';

interface contextInterface {
  firstNumber: string | undefined;
  setFirstNumber: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const FirstContext = createContext<undefined | string>(undefined);

export {FirstContext};
