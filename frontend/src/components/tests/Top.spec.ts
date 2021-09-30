// REF: https://forum.vuejs.org/t/how-to-test-plain-vue-components-not-single-file-components/58415/3
require('jsdom-global')()

import { shallowMount } from "@vue/test-utils";
import Top from "../Top.vue";

describe('Top.vue', () => {
  test('render props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Top, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})