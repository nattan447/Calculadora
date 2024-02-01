import React from 'react';

import {createContext} from 'react';

interface contextInterface {
  result: string | undefined;
  setResult: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ResultContext = createContext<undefined | string>(undefined);

export {ResultContext};
