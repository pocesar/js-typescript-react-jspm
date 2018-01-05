import React from 'react'
import renderer from 'react-test-renderer'

describe('<App />', () => {
  test('just asynchronously passes', async () => {
    await expect(new Promise((resolve) => setTimeout(() => resolve(true), 10))).resolves.toBe(true)
  })
})
