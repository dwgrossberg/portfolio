/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { NavHashLink } from "react-router-hash-link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../../public/logo-icon.png";
import logoWhite from "../../public/logo-icon-white.png";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      css={css`
        position: relative;
        place-self: center;
      `}
    >
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
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
            <img
              alt="DGlogo"
              src={logoWhite}
              css={css`
                width: 3em;
              `}
            />
          </Box>
          <div
            css={css`
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              width: 200px;
            `}
          >
            <NavHashLink
              smooth
              to={"/#"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </NavHashLink>
            <NavHashLink
              smooth
              to={"/#about"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </NavHashLink>
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Stack>
            </Flex>
          </div>
        </Flex>
      </Box>
    </div>
  );
}
