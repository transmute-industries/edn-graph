import fs from 'fs'

import * as edn from '../src'


const message = Buffer.from("d28444a1013822a0f65860b4e0d531c8660609d94a018a67a13c9f26cc7b4e327fe46b04a81695ec1b05043c2a313582cf0f82f29747950b6d2f71dd01b997bc8b5d041801fc774a35e98fe1cdcf5072e25e254986a5995af70e7f17bbe6b19ca9eba22e06885eb0a48a3a", "hex");

it('test detached ', async () => {
  const graph2 = await edn.parse(message)
  expect(graph2.tag).toBe(18)
})
