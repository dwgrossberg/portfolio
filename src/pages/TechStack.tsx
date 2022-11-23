/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, VStack, HStack, StackDivider } from "@chakra-ui/react";
import theme from "../utilities/theme";
import "../styles/pages.css";

const TechStack = ({ colorMode }: { colorMode: string }): JSX.Element => {
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
          align-items: flex-start;
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
            @media screen and (max-width: 600px) {
              margin-left: 0;
            }
          `}
        >
          Tech Stack
        </h2>
        <VStack spacing="30px">
          <Box>Back-End</Box>
          <HStack
            spacing="20px"
            overflowX={"auto"}
            maxWidth={"75vw"}
            justifyContent="flex-start"
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
            <Box h="60px" w="60px" background="pink"></Box>
            <Box h="60px" w="60px" background="pink"></Box>
            <Box h="60px" w="60px" background="pink"></Box>
            <Box h="60px" w="60px" background="pink"></Box>
            <Box h="60px" w="60px" background="pink"></Box>
            <Box h="60px" w="60px" background="pink"></Box>
          </HStack>
          <Box>Front-End</Box>
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
          <Box>Tools & Technologies</Box>
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
