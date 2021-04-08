import React from 'react';
import { mount } from 'enzyme';
import TermsAndConditions from '@src/screens/terms_and_conditions';
import { lightTheme } from '@styles';
import { WithMockMaterialTheme } from '@tests/utils/mock_material_theme';
import { createMuiTheme } from '@material-ui/core/styles';

describe('TermsAndConditions', () => {
  it('it renders', () => {
    const wrapper = mount(
      WithMockMaterialTheme({
        component: <TermsAndConditions />,
        theme: createMuiTheme(lightTheme),
      }),
    );

    expect(wrapper).not.toBeNull();
    expect(
      wrapper.find('h1').first().text(),
    ).toBe('termsAndConditions');
    expect(
      wrapper.find('h2').first().text(),
    ).toBe('interpretation');
  });
});
