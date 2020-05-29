import { theme } from '../../styles/global';

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
