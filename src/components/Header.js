
import React from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <>
        <Navbar className="header">
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading className="title"><h2>To-Do📋</h2></Navbar.Heading>
            <Navbar.Divider />
            <Link to='/'>
            <Button className="bp4-minimal" icon="home" text="Home" />
            </Link>
            <Link to='/settings'>
            <Button className='bp3-minimal' icon='settings' text='Settings' />
          </Link>
        </Navbar.Group>
    </Navbar>
    </>
    );
  }


  