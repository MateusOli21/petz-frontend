const theme = {
  primary: '#f05a28',
  secondary: '#31cbff',
  bg: 'rgba(255,255,255,0.9)',
  white: '#fff',
  black: '#333',
};

export const selectStyles = {
  control: (styles) => ({
    ...styles,
    margin: '10px 0',
    backgroundColor: theme.bg,
    border: `1px solid ${theme.primary}`,
    color: theme.primary,
    cursor: 'pointer',
  }),
  option: (styles) => ({
    ...styles,
    color: theme.primary,
    background: theme.bg,
    cursor: 'pointer',
  }),
  placeholder: (styles) => ({ ...styles, color: theme.primary }),
  singleValue: (styles) => ({
    ...styles,
    color: theme.primary,
  }),
};
