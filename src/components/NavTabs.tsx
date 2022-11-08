import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabListProps,
} from "@chakra-ui/react";
import { FC, PropsWithChildren, ReactNode } from "react";
import { RouteProps } from "react-router-dom";

interface HeaderProps {
  children: any;
}

const NavTabs: FC<PropsWithChildren<HeaderProps>> = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <Tabs>
      <TabList>
        <Tab>Home</Tab>
        <Tab>About</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavTabs;
