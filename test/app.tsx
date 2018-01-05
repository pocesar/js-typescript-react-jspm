/// <reference types="jest" />

import React from 'react'
import renderer from 'react-test-renderer'
import Stager, { Stage, StageProgress, StageButtons } from '../lib'

describe('<App />', () => {
  test('just asynchronously passes', async () => {
    expect.assertions(1)

    await expect(await new Promise((resolve) => setTimeout(() => resolve(true), 10))).resolves.toBe(true)
  })
})
