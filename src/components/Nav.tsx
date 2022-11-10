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
import { HashLink } from "react-router-hash-link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../../public/logo-icon.png";
import logoGW from "../../public/logo-icon-GW.png";
import { useEffect, useState } from "react";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = (e: any) => {
    e.target.style.textDecoration = "underline";
    switch (e.target.id) {
      case "my-story":
        document.getElementById("tech-stack")!.style.textDecoration = "none";
        document.getElementById("projects")!.style.textDecoration = "none";
        document.getElementById("contact")!.style.textDecoration = "none";
        break;
      case "tech-stack":
        document.getElementById("my-story")!.style.textDecoration = "none";
        document.getElementById("projects")!.style.textDecoration = "none";
        document.getElementById("contact")!.style.textDecoration = "none";
        break;
      case "projects":
        document.getElementById("my-story")!.style.textDecoration = "none";
        document.getElementById("tech-stack")!.style.textDecoration = "none";
        document.getElementById("contact")!.style.textDecoration = "none";
        break;
      case "contact":
        document.getElementById("my-story")!.style.textDecoration = "none";
        document.getElementById("tech-stack")!.style.textDecoration = "none";
        document.getElementById("projects")!.style.textDecoration = "none";
        break;
    }
  };
  useEffect(() => {}, [document]);
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
            <HashLink
              smooth
              to={"/#my-story"}
              id="my-story"
              onClick={(e) => {
                handleClick(e);
              }}
              style={{
                textDecoration: "none",
              }}
              css={css`
                color: inherit;
                &:hover {
                  color: #a5ffc9;
                }
              `}
            >
              My Story
            </HashLink>{" "}
            <HashLink
              smooth
              to={"/#tech-stack"}
              id="tech-stack"
              onClick={(e) => {
                handleClick(e);
              }}
              style={{
                textDecoration: "none",
              }}
              css={css`
                color: inherit;
                &:hover {
                  color: #a5ffc9;
                }
              `}
            >
              Tech Stack
            </HashLink>
            <HashLink
              smooth
              to={"/#projects"}
              id="projects"
              onClick={(e) => {
                handleClick(e);
              }}
              style={{ textDecoration: "none" }}
              css={css`
                color: inherit;
                &:hover {
                  color: #a5ffc9;
                }
              `}
            >
              Projects
            </HashLink>
            <HashLink
              smooth
              to={"/#contact"}
              id="contact"
              onClick={(e) => {
                handleClick(e);
              }}
              style={{ textDecoration: "none" }}
              css={css`
                color: inherit;
                &:hover {
                  color: #a5ffc9;
                }
                &:target {
                  color: #a5ffc9;
                }
              `}
            >
              Contact
            </HashLink>
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
