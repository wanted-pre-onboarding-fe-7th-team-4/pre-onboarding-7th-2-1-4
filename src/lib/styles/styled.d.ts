import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary100: string;
      second100: string;
      error100: string;
      gray100: string;
      gray200: string;
      fontBlack: string;
      fontWhite: string;
    };
  }
}
