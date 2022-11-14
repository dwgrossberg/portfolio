/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import logoDark from "../../public/logo-icon-dark.svg";
import logoLight from "../../public/logo-icon-light.svg";
import UnderlinedMenu from "./UnderlinedMenu";
import { Dispatch, SetStateAction, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import AnimatedLogo from "./AnimatedLogo";

export default function Nav({
  colorMode,
  setColorMode,
}: {
  colorMode: string;
  setColorMode: Dispatch<SetStateAction<string>>;
}) {
  const [selected, setSelected] = useState(-1);

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
            <UnderlinedMenu
              selected={selected}
              setSelected={setSelected}
              colorMode={colorMode}
            />
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <ToggleSwitch
                  colorMode={colorMode}
                  setColorMode={setColorMode}
                />
              </Stack>
            </Flex>
          </div>
        </Flex>
      </Box>
    </div>
  );
}
