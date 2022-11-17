import * as React from "react";
import "css-doodle";

// type rules for css-doodle module

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

type DoodleProps = {
  rule: string;
  className: string;
  onClick: (e: any) => void;
  onMouseOver: (e: any) => void;
};

export default (props: DoodleProps) => (
  <css-doodle className={props.className} onClick={props.onClick}>
    {props.rule}
  </css-doodle>
);
