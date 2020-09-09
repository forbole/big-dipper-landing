import { createContext } from 'react';
import { WithMockMaterialTheme } from './mock_material_theme';

export const GlobalContext = createContext(null);

interface Iprops {
  component: React.ReactElement;
  theme: any;
}

const themeContextMock = {
  getThemeMode: jest.fn(() => ({
    value: 'light',
    key: 'light',
  })),
  toggleThemeMode: jest.fn(() => {}),
  getCurrentLanguage: jest.fn(() => ({
    key: 'en',
    value: 'English',
  })),
  changeLanguage: jest.fn(() => {}),
};

export const BaseWrapper = ({
  component, theme,
}: Iprops) => {
  return (
    <GlobalContext.Provider
      value={themeContextMock}
    >
      {WithMockMaterialTheme({
        component,
        theme,
      })}
    </GlobalContext.Provider>
  );
};
