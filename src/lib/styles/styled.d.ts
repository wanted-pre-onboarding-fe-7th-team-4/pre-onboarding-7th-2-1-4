import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      gray: string;
      blue: string;
      white: string;
    };
    fontSize: {
      XLarge: string;
      large: string;
      medium: string;
      small: string;
      XSmall: string;
    };
  }
}
