interface Color {
  gray: string[];
  green: string[];
  blue: string[];
  indigo: string[];
  orange: string[];
  cyan: string[];
  teal: string[];
  violet: string[];
}

interface Styles {
  fontSize: object;
  svgSize: string[];
  color: {
    light: string[];
    dark: string[];
  };
  primary: {
    light: string[];
  };
}

export const color: Color = {
  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
  ],
  green: [
    '#ebfbee',
    '#d3f9d8',
    '#b2f2bb',
    '#8ce99a',
    '#69db7c',
    '#51cf66',
    '#40c057',
    '#37b24d',
    '#2f9e44',
    '#2b8a3e',
  ],
  blue: [
    '#e7f5ff',
    '#d0ebff',
    '#a5d8ff',
    '#74c0fc',
    '#4dabf7',
    '#339af0',
    '#228be6',
    '#1c7ed6',
    '#1971c2',
    '#1864ab',
  ],
  indigo: [
    '#edf2ff',
    '#dbe4ff',
    '#bac8ff',
    '#91a7ff',
    '#748ffc',
    '#5c7cfa',
    '#4c6ef5',
    '#4263eb',
    '#3b5bdb',
    '#364fc7',
  ],
  orange: [
    '#fff4e6',
    '#ffe8cc',
    '#ffd8a8',
    '#ffc078',
    '#ffa94d',
    '#ff922b',
    '#fd7e14',
    '#f76707',
    '#e8590c',
    '#d9480f',
  ],
  cyan: [
    '#e3fafc',
    '#c5f6fa',
    '#99e9f2',
    '#66d9e8',
    '#3bc9db',
    '#22b8cf',
    '#15aabf',
    '#1098ad',
    '#0c8599',
    '#0b7285',
  ],
  teal: [
    '#e6fcf5',
    '#c3fae8',
    '#96f2d7',
    '#63e6be',
    '#38d9a9',
    '#20c997',
    '#12b886',
    '#0ca678',
    '#099268',
    '#087f5b',
  ],
  violet: [
    '#f3f0ff',
    '#e5dbff',
    '#d0bfff',
    '#b197fc',
    '#9775fa',
    '#845ef7',
    '#7950f2',
    '#7048e8',
    '#6741d9',
    '#5f3dc4',
  ],
};

export const styles: Styles = {
  fontSize: {
    root: '16px',
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.125rem',
    xl: '1.25rem',
    xxl: '1.375rem',
    xxxl: '1.55rem',
    xxxxl: '1.75rem',
  },
  svgSize: ['36px', '28px', '24px', '20px', '16px'],
  color: {
    light: [
      `${color.gray[9]}`,
      `${color.gray[8]}`,
      `${color.gray[7]}`,
      `${color.gray[6]}`,
    ],
    dark: [
      `${color.gray[0]}`,
      `${color.gray[1]}`,
      `${color.gray[2]}`,
      `${color.gray[3]}`,
    ],
  },
  primary: {
    light: ['#777CB4', '#EC86A8'],
  },
};
