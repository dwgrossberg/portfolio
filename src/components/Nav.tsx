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

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position={"fixed"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <img
              alt="DGlogo"
              src={logo}
              css={css`
                width: 4em;
              `}
            />
          </Box>
          <NavHashLink smooth to={"/#"}>
            Home
          </NavHashLink>
          <NavHashLink smooth to={"/#about"}>
            About
          </NavHashLink>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
