/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, VStack, HStack, StackDivider, Flex } from "@chakra-ui/react";
import theme from "../utilities/theme";
import "../styles/pages.css";

const TechStack = ({ colorMode }: { colorMode: string }): JSX.Element => {
  const SLIDE_COUNT = 6;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
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
            }
          `}
        >
          Tech Stack
        </h2>
        <VStack spacing="30px" justify="flex-start">
          <Box>Languages</Box>
          <HStack
            spacing="3.5vw"
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
            `}
          >
            <Box minH="60px" minW="60px" background="pink"></Box>
            <Box minH="60px" minW="60px" background="pink"></Box>
            <Box minH="60px" minW="60px" background="pink"></Box>
            <Box minH="60px" minW="60px" background="pink"></Box>
          </HStack>
          <HStack
            spacing="3.5vw"
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
            `}
          >
            <Box h="60px" minW="60px" background="pink"></Box>
            <Box h="60px" minW="60px" background="pink"></Box>
            <Box h="60px" minW="60px" background="pink"></Box>
            <Box h="60px" minW="60px" background="pink"></Box>
          </HStack>
          <Box>Tools & Libraries</Box>
          <HStack
            spacing="20px"
            divider={
              <StackDivider
                borderColor={
                  colorMode === "dark"
                    ? theme.colors.dark.text
                    : theme.colors.light.text
                }
              />
            }
          >
            <Box h="60px" w="60px" background="pink"></Box>
            <Box h="60px" w="60px" background="pink"></Box>
          </HStack>
        </VStack>
      </div>
    </div>
  );
};

export default TechStack;
