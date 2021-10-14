export interface Theme {
  background: string;
  subBackground: string;
  primary: string;
  sub: string;
  font: string;
  buttonFont: string;
  toggle: string;
  input: string;
  modal: string;
  modalChecked: string;
  modalFont: string;
  TopBg: string;
}

interface ThemeGroup {
  dark: Theme;
  light: Theme;
}

/**
 * @dark theme
 */
export const dark: Theme = {
  background: '#121212',
  subBackground: "#292a2d'",
  primary: '#292a2d',
  sub: '#EC86A8',
  font: '#fff',
  buttonFont: '#fff',
  toggle: '#292a2d',
  input: '#fff',
  modal: '#fff',
  modalChecked: '#EC86A8',
  modalFont: '#121212',
  TopBg: '#292a2d',
};

/**
 * @light theme
 */
export const light: Theme = {
  background: '#ecf0f3',
  subBackground: 'lightgray',
  primary: '#777CB4',
  sub: '#EC86A8',
  font: '#777CB4',
  buttonFont: '#ECF0F3',
  toggle: '#ecf0f3',
  input: '#777CB4',
  modal: '#ECF0F3',
  modalChecked: '#777CB4',
  modalFont: '#777CB4',
  TopBg: '#fff',
};

const mode: ThemeGroup = {
  dark,
  light,
};

export default mode;
