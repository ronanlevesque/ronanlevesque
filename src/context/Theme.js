import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext(['dark', () => {}]);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'dark'
  );

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
