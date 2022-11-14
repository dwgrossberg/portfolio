/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Flex } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import UnderlinedMenu from "./UnderlinedMenu";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import AnimatedLogo from "./AnimatedLogo";
import { MobileMenu } from "./MobileMenu";

export default function Nav({
  colorMode,
  setColorMode,
}: {
  colorMode: string;
  setColorMode: Dispatch<SetStateAction<string>>;
}) {
  const [selected, setSelected] = useState(-1);
  const menuItems = ["My Story", "Tech Stack", "Projects", "Contact"];
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 600;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  return (
    <div
      css={css`
        position: relative;
        place-self: center;
      `}
    >
      <Box
        px={4}
        position={"fixed"}
        top={"50px"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
      >
        <Flex
          h={16}
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 75px;
            width: 90vw;
          `}
        >
          <Box>
            <HashLink
              smooth
              to={"/#"}
              onClick={(e) => {
                setSelected(-1);
              }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <AnimatedLogo colorMode={colorMode} />
            </HashLink>
          </Box>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              gap: 20px;
              align-items: center;
              width: 470px;
            `}
          >
            {width > breakpoint ? (
              <UnderlinedMenu
                selected={selected}
                setSelected={setSelected}
                colorMode={colorMode}
                menuItems={menuItems}
              />
            ) : (
              <MobileMenu />
            )}
            <ToggleSwitch
              colorMode={colorMode}
              setColorMode={setColorMode}
              style={{
                position: width > breakpoint ? "" : "absolute",
                right: width > breakpoint ? "" : "100px",
              }}
            />
          </div>
        </Flex>
      </Box>
    </div>
  );
}
