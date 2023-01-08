/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  VStack,
  HStack,
  StackDivider,
  Image,
  Link,
  Tooltip,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { icons } from "../assets/icons";
import theme from "../utilities/theme";
import { Fragment } from "react";

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
  const LinkedBox = (i: any, icon: any) => {
    return (
      <Tooltip
        key={i}
        hasArrow
        fontSize="sm"
        label={icon.text}
        bg={
          colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text
        }
        color={
          colorMode === "dark"
            ? theme.colors.light.text
            : theme.colors.dark.text
        }
      >
        <Link
          css={css`
            margin: 0;
            padding: 0;
            display: flex;
            max-width: 65px;
            width: 7%;
            @media screen and (max-width: 600px) {
              width: 10%;
            }
          `}
          href={icon.href}
          isExternal
        >
          <ChakraBox
            className="icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            cursor="pointer"
          >
            <Image src={icon.img} alt={icon.text} />
          </ChakraBox>
        </Link>
      </Tooltip>
    );
  };
  return (
    <Fragment>
      <div
        style={{
          color:
            colorMode === "dark"
              ? theme.colors.dark.text
              : theme.colors.light.text,
        }}
        className="page"
        css={css`
          margin-bottom: 10rem;
        `}
      >
        <div
          className="page-container"
          css={css`
            align-items: center;
          `}
        >
          <h2 className="title">Tech Stack</h2>
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
                justify-content: center;
                overflow: visible;
              `}
            >
              {icons.slice(0, 5).map((icon: any, i: any) => {
                return LinkedBox(i, icon);
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
                overflow: visible;
                justify-content: center;
              `}
            >
              {icons.slice(5, 10).map((icon: any, i: any) => {
                return LinkedBox(i, icon);
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
                overflow: visible;
                justify-content: center;
              `}
            >
              {icons.slice(10, 15).map((icon: any, i: any) => {
                return LinkedBox(i, icon);
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
                overflow: visible;
                justify-content: center;
              `}
            >
              {icons.slice(15, 20).map((icon: any, i: any) => {
                return LinkedBox(i, icon);
              })}
            </HStack>
          </VStack>
        </div>
      </div>
    </Fragment>
  );
};

export default TechStack;
