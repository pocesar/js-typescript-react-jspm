
import React from 'react'
import renderer from 'react-test-renderer'
import HelloWorld from '../lib/components/hello-world'

const HWAN: any = HelloWorld

describe('<HelloWorld />', () => {
  test('matches snapshot', async () => {
    const simple = renderer.create(
      <HWAN />
    )

    expect(simple.toJSON()).toMatchSnapshot()
  })
})
