require('jsdom-global')()

import { mount } from "@vue/test-utils";
import Abc from "../Abc.vue";

describe('Abc.vue', () => {
  const wrapper = mount(Abc)
  test('楽譜が表示されていること', () => {
    wrapper.vm.$nextTick().then(function () {
      expect(wrapper.html()).toContain('svg')
    })
  })
})