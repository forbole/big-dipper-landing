import React from 'react';
import { mount } from 'enzyme';
import Donate from '@screens/donate';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';
import { lightTheme } from '@styles';
import { createMuiTheme } from '@material-ui/core/styles';

describe('Donate', () => {
  it('it renders', () => {
    const wrapper = mount(
      WithMockMaterialTheme({
        component: <Donate />,
        theme: createMuiTheme(lightTheme),
      }),
    );

    expect(
      wrapper.find('h2').first().text(),
    ).toBe('donation');
    expect(
      wrapper.find('p').first().text(),
    ).toBe('context');
  });
});
