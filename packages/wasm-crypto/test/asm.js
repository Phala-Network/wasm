/* eslint-disable @typescript-eslint/no-var-requires */
// Copyright 2019 @polkadot/wasm-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// @ts-check

// @ts-ignore
global.WebAssembly = null;

require('override-require')(
  (request) => request === './wasm_asm_stub',
  // @ts-ignore
  () => require('../build/wasm_asm')
);

const { runUnassisted } = require('./all');

runUnassisted();
