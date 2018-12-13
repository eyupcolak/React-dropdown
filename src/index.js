import React from "react";
import { render } from "react-dom";

import { Button, Dropdown, Icon, Menu } from "antd";

const Item = Menu.Item;

const styles = {
  fontFamily: "sans-serif",
  padding: "1rem"
};

const overlay = () => (
  <Menu>
    <Item>
      <Icon type="user" />
      One
    </Item>
    <Item>
      <Icon type="team" />
      Two
    </Item>
  </Menu>
);

const App = () => (
  <div style={styles}>
    <Dropdown overlay={overlay()} trigger={["click"]}>
      <Button>
        click me
        <Icon type="down" />
      </Button>
    </Dropdown>
  </div>
);

render(<App />, document.getElementById("root"));
