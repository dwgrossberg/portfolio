/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { motion, transform } from "framer-motion";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../../public/logo-icon.png";
import logoGW from "../../public/logo-icon-GW.png";
import { useEffect, useState } from "react";
import UnderlinedMenu from "./UnderlinedMenu";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const updateActive = (path: string) => {
    switch (path) {
      case "my-story-nav":
        document.getElementById("tech-stack-nav")!.style.textDecoration =
          "none";
        document.getElementById("projects-nav")!.style.textDecoration = "none";
        document.getElementById("contact-nav")!.style.textDecoration = "none";
        break;
      case "tech-stack-nav":
        document.getElementById("my-story-nav")!.style.textDecoration = "none";
        document.getElementById("projects-nav")!.style.textDecoration = "none";
        document.getElementById("contact-nav")!.style.textDecoration = "none";
        break;
      case "projects-nav":
        document.getElementById("my-story-nav")!.style.textDecoration = "none";
        document.getElementById("tech-stack-nav")!.style.textDecoration =
          "none";
        document.getElementById("contact-nav")!.style.textDecoration = "none";
        break;
      case "contact-nav":
        document.getElementById("my-story-nav")!.style.textDecoration = "none";
        document.getElementById("tech-stack-nav")!.style.textDecoration =
          "none";
        document.getElementById("projects-nav")!.style.textDecoration = "none";
        break;
      case "":
        document.getElementById("my-story-nav")!.style.textDecoration = "none";
        document.getElementById("tech-stack-nav")!.style.textDecoration =
          "none";
        document.getElementById("projects-nav")!.style.textDecoration = "none";
        document.getElementById("contact-nav")!.style.textDecoration = "none";

        break;
    }
  };
  const handleClick = (e: any) => {
    e.target.style.textDecoration = "underline";
    updateActive(e.target.id);
  };
  useEffect(() => {
    const path = document.location.hash.substring(3);
    switch (path) {
      case "my-story":
        document.getElementById("my-story-nav")!.style.textDecoration =
          "underline";
        break;
      case "tech-stack":
        document.getElementById("tech-stack-nav")!.style.textDecoration =
          "underline";
        break;
      case "projects":
        document.getElementById("projects-nav")!.style.textDecoration =
          "underline";
        break;
      case "contact":
        document.getElementById("contact-nav")!.style.textDecoration =
          "underline";
        break;
    }
  }, []);
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
            <HashLink
              smooth
              to={"/#"}
              onClick={(e) => {
                handleClick(e);
              }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                alt="DGlogo"
                src={logoGW}
                css={css`
                  width: 3em;
                `}
              />
            </HashLink>
          </Box>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              gap: 20px;
              align-items: center;
              width: 360px;
            `}
          >
            <UnderlinedMenu />
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
