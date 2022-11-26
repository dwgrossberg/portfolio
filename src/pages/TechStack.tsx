/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, VStack, HStack, StackDivider, Image } from "@chakra-ui/react";
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
  const styledBox = (i: number) => {
    <Box
      key={i}
      h="10vw"
      w="10vw"
      minH="20px"
      minW="20px"
      maxW="100px"
      maxH="100px"
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
    />;
  };
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
          regular basis to create powerful and engaging software experiences
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
            `}
          >
            {icons.slice(0, 5).map((icon, i) => {
              return (
                <Box
                  key={i}
                  h="10vw"
                  w="10vw"
                  minH="20px"
                  minW="20px"
                  maxW="100px"
                  maxH="100px"
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
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
            {icons.slice(5, 10).map((icon, i) => {
              return (
                <Box
                  key={i}
                  h="10vw"
                  w="10vw"
                  minH="20px"
                  minW="20px"
                  maxW="100px"
                  maxH="100px"
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
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
            {icons.slice(10, 15).map((icon, i) => {
              return (
                <Box
                  key={i}
                  h="10vw"
                  w="10vw"
                  minH="20px"
                  minW="20px"
                  maxW="100px"
                  maxH="100px"
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
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
            {icons.slice(15, 20).map((icon, i) => {
              return (
                <Box
                  key={i}
                  h="10vw"
                  w="10vw"
                  minH="20px"
                  minW="20px"
                  maxW="100px"
                  maxH="100px"
                  display={"flex"}
                  alignContent={"center"}
                  justifyContent={"center"}
                >
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
