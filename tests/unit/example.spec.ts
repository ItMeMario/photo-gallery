import { mount } from '@vue/test-utils'
import Profile from '@/views/Profile.vue'

describe('Profile.vue', () => {
  it('renders Profile view', () => {
    const wrapper = mount(Profile)
    expect(wrapper.text()).toMatch('Profile page')
  })
})
