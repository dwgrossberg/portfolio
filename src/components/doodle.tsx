import * as React from "react";
import "css-doodle";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "css-doodle": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      forEach: Function;
    }
  }
}

export default ({ rule = "", className = "", onClick = (e: any) => {} }) => (
  <css-doodle className={className} onClick={onClick}>
    {rule}
  </css-doodle>
);
