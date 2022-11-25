/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, VStack, HStack, StackDivider, Image } from "@chakra-ui/react";
import { langIcons } from "../assets/langIcons";
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
        <p
          css={css`
            margin-left: 3rem;
            place-self: flex-start;
            margin-bottom: 1rem;
            @media screen and (max-width: 600px) {
              margin-left: 0;
            }
          `}
        >
          Some of tools and technologies that I use on a regular basis to create
          powerful software experiences
        </p>
        <VStack spacing="7vw" justify="center">
          <Box className="title" fontSize={"1.25rem"}>
            Languages
          </Box>
          <HStack
            spacing="10vw"
            overflowX={"auto"}
            maxWidth={"85vw"}
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
            {langIcons.slice(0, 3).map((icon, i) => {
              return (
                <Box
                  key={i}
                  h="10vw"
                  w="10vw"
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
            spacing="10vw"
            overflowX={"auto"}
            maxWidth={"85vw"}
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
            {langIcons.slice(3, 6).map((icon, i) => {
              return (
                <Box
                  key={i}
                  h="10vw"
                  w="10vw"
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
          <Box className="title" fontSize={"1.25rem"}>
            Tools & Libraries
          </Box>
          <HStack
            spacing="10vw"
            overflowX={"auto"}
            maxWidth={"85vw"}
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
            <Box
              h="10vw"
              w="10vw"
              maxW="100px"
              maxH="100px"
              background="pink"
            ></Box>
            <Box
              h="10vw"
              w="10vw"
              maxW="100px"
              maxH="100px"
              background="pink"
            ></Box>
            <Box
              h="10vw"
              w="10vw"
              maxW="100px"
              maxH="100px"
              background="pink"
            ></Box>
          </HStack>
        </VStack>
      </div>
    </div>
  );
};

export default TechStack;
