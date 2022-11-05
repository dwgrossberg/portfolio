import * as React from "react";
import "css-doodle";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "css-doodle": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export default ({ rule = "" }) => <css-doodle>{rule}</css-doodle>;
