import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    bgColor: string;
    background: string;
    subBackground: string;
    primary: string;
    sub: string;
    font: string;
    buttonFont: string;
    toggle: string;
    input: string;
  }
}
