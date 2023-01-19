// declare module "react" {
//   export interface Attributes {
//       css?: any;
//   }
// }

import { Palette } from "./themes";

export module '@emotion/react' {
	export interface Theme {
		primary: Palette;
		secondary?: Palette;
		palettes: {[palette:string]: Palette}
		background: string;
		animations_length:number
		[x: string]:any;
	}
}

// export module "react" {
//   export interface HTMLAttributes<T> extends DOMAttributes<T> {
//     css?: CSSProp;
//   }
// }

export module "react" {
  export interface Attributes {
      css?: any;
  }
}
