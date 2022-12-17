/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SEO from "../components/SEO";
import theme from "../utilities/theme";
import { Link as ReactLink } from "@react/router";

const NotFound = ({ colorMode }: { colorMode: string }): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 5rem;
        justify-content: center;
        align-items: center;
        font-family: "Raleway";
        font-size: 2rem;
        color: ${colorMode === "dark"
          ? theme.colors.dark.text
          : theme.colors.light.text};
      `}
    >
      <SEO pageName={"404"} />
      <p
        className="notFound"
        css={css`
          font-size: 3rem;
        `}
      >
        Oops!
      </p>
      <p>Looks like something went wrong there...</p>
      <p>
        Let me take you back{" "}
        <Link as={ReactLink} to="/home">
          here.
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
