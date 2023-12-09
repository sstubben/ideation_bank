import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CreateIdea from '../CreateIdea.vue'

describe('CreateIdea', () => {
  it('renders properly', () => {
    const wrapper = mount(CreateIdea, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
