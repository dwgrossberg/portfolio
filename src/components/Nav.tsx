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
  width,
  breakpoint,
}: {
  colorMode: string;
  setColorMode: Dispatch<SetStateAction<string>>;
  width: number;
  breakpoint: number;
}) {
  const menuItems = ["My Story", "Tech Stack", "Projects", "Contact"];
  const [selected, setSelected] = useState(-1);
  const [strokeVar, setStrokeVar] = useState("20");

  useEffect(() => {
    const path = document.location.hash.substring(3);
    switch (path) {
      case "my-story":
        setSelected(0);
        setStrokeVar("10");
        break;
      case "tech-stack":
        setSelected(1);
        setStrokeVar("10");
        "underline";
        break;
      case "projects":
        setSelected(2);
        setStrokeVar("10");
        "underline";
        break;
      case "contact":
        setSelected(3);
        setStrokeVar("10");
        "underline";
        break;
    }
  }, []);
  return (
    <div
      css={css`
        position: relative;
        place-self: center;
        z-index: 100;
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
                setStrokeVar("20");
              }}
              style={{ textDecoration: "none" }}
            >
              <AnimatedLogo colorMode={colorMode} strokeVar={strokeVar} />
            </HashLink>
          </Box>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 20px;
              align-items: center;
              width: 500px;
            `}
          >
            {width > breakpoint ? (
              <UnderlinedMenu
                selected={selected}
                setSelected={setSelected}
                colorMode={colorMode}
                menuItems={menuItems}
                setStrokeVar={setStrokeVar}
              />
            ) : (
              <MobileMenu
                selected={selected}
                setSelected={setSelected}
                colorMode={colorMode}
                menuItems={menuItems}
                setStrokeVar={setStrokeVar}
              />
            )}
            <ToggleSwitch
              colorMode={colorMode}
              setColorMode={setColorMode}
              style={{
                position: width > breakpoint ? "" : "absolute",
                right: width > breakpoint ? "" : "90px",
                top: width > breakpoint ? "" : "30px",
                zIndex: width > breakpoint ? "" : "5",
              }}
            />
          </div>
        </Flex>
      </Box>
    </div>
  );
}
