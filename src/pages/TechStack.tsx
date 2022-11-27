/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  VStack,
  HStack,
  StackDivider,
  Image,
  Link,
  Text,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { icons } from "../assets/icons";
import theme from "../utilities/theme";
import "../styles/pages.css";

const TechStack = ({
  colorMode,
  width,
  breakpoint,
}: {
  colorMode: string;
  width: number;
  breakpoint: number;
}): JSX.Element => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <div
      style={{
        color:
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text,
      }}
      className="page"
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          width: 75vw;
          margin-bottom: 7rem;
          @media screen and (max-width: 600px) {
            align-items: center;
          }
        `}
      >
        <h2
          className="title"
          css={css`
            font-size: 1.5rem;
            margin-left: 3rem;
            place-self: flex-start;
            @media screen and (max-width: 600px) {
              margin-left: 0;
              place-self: center;
            }
          `}
        >
          Tech Stack
        </h2>
        <p
          css={css`
            margin-left: 3rem;
            place-self: flex-start;
            margin-bottom: 1rem;
            max-width: 65vw;
            text-align: left;
            @media screen and (max-width: 600px) {
              margin-left: 0;
              text-align: center;
              place-self: center;
            }
          `}
        >
          Some of programming languages, libraries, and tools that I use on a
          regular basis to develop engaging software experiences
        </p>
        <VStack spacing="3rem" justify="center">
          <HStack
            spacing={width > breakpoint ? "6vw" : "4vw"}
            overflowX={"auto"}
            maxWidth={"75vw"}
            divider={
              <StackDivider
                borderColor={
                  colorMode === "dark"
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
              />
            }
            css={css`
              overflow: scroll;
              justify-content: center;
              overflow: visible;
            `}
          >
            {icons.slice(0, 5).map((icon: any, i: any) => {
              return (
                <Link
                  key={i}
                  css={css`
                    margin: 0;
                    padding: 0;
                    width: 7%;
                    display: flex;
                  `}
                >
                  <ChakraBox
                    className="icon"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    cursor="pointer"
                  >
                    <Image src={icon.img} />
                    <Text fontSize="smaller">{icon.text}</Text>
                  </ChakraBox>
                </Link>
              );
            })}
          </HStack>
          <HStack
            spacing={width > breakpoint ? "6vw" : "4vw"}
            overflowX={"auto"}
            maxWidth={"75vw"}
            divider={
              <StackDivider
                borderColor={
                  colorMode === "dark"
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
              />
            }
            css={css`
              overflow: scroll;
              justify-content: center;
            `}
          >
            {icons.slice(5, 10).map((icon: any, i: any) => {
              return (
                <Box key={i} className="icon">
                  <Image src={icon} />
                </Box>
              );
            })}
          </HStack>
          <HStack
            spacing={width > breakpoint ? "6vw" : "4vw"}
            overflowX={"auto"}
            maxWidth={"75vw"}
            divider={
              <StackDivider
                borderColor={
                  colorMode === "dark"
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
              />
            }
            css={css`
              overflow: scroll;
              justify-content: center;
            `}
          >
            {icons.slice(10, 15).map((icon: any, i: any) => {
              return (
                <Box key={i} className="icon">
                  <Image src={icon} />
                </Box>
              );
            })}
          </HStack>
          <HStack
            spacing={width > breakpoint ? "6vw" : "4vw"}
            overflowX={"auto"}
            maxWidth={"75vw"}
            divider={
              <StackDivider
                borderColor={
                  colorMode === "dark"
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
              />
            }
            css={css`
              overflow: scroll;
              justify-content: center;
            `}
          >
            {icons.slice(15, 20).map((icon: any, i: any) => {
              return (
                <Box key={i} className="icon">
                  <Image src={icon} />
                </Box>
              );
            })}
          </HStack>
        </VStack>
      </div>
    </div>
  );
};

export default TechStack;
