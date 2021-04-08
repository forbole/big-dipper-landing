import React from 'react';
import { mount } from 'enzyme';
import PrivacyPolicy from '@src/screens/privacy_policy';
import { lightTheme } from '@styles';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';
import { createMuiTheme } from '@material-ui/core/styles';

describe('PrivacyPolicy', () => {
  it('it renders', () => {
    const wrapper = mount(
      WithMockMaterialTheme({
        component: <PrivacyPolicy />,
        theme: createMuiTheme(lightTheme),
      }),
    );

    expect(wrapper).not.toBeNull();
    expect(
      wrapper.find('h1').first().text(),
    ).toBe('privacyPolicy');
    expect(
      wrapper.find('p').first().text(),
    ).toBe('intro');
  });
});
