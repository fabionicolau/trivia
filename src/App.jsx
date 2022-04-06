import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRoutes from './pages/routes';
import defaultTheme from './styles/theme/default';

export default function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <AppRoutes />
    </ThemeProvider>
  );
}
