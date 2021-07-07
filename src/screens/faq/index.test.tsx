import React from 'react';
import { mount } from 'enzyme';
import Faq from '@screens/faq';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';
import { lightTheme } from '@styles';
import { createMuiTheme } from '@material-ui/core/styles';

describe('Faq', () => {
  it('it renders', () => {
    const wrapper = mount(
      WithMockMaterialTheme({
        component: <Faq />,
        theme: createMuiTheme(lightTheme),
      }),
    );

    expect(
      wrapper.find('h2').first().text(),
    ).toBe('posQuestion');
    expect(
      wrapper.find('p').find('.link').first().text(),
    ).toBe('email');
  });
});
