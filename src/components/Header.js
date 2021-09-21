
import React from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";

export default function Header() {
    return (
        <>
        <Navbar className="header">
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading className="title"><h2>To-Do📋</h2></Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp4-minimal" icon="home" text="Home" />
            {/* <Button className="bp4-minimal" icon="document" text="Files" /> */}
        </Navbar.Group>
    </Navbar>
    </>
    );
  }


  