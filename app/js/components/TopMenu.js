import React from "react";
import { Segment, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function TopMenu({ rightMenu, leftMenu, onOptionClick }) {
    return (
        <Segment basic inverted>
            <Menu inverted borderless fixed="top">
                <Menu.Menu position="right">
                    <Menu.Item as={NavLink} to="/accounts">
                        <Icon name="user" />
                        Account
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </Segment>
    );
}