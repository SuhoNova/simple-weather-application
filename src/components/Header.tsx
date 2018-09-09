import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
// import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Header: React.StatelessComponent<{}> = () => {
    return (
        <AppBar position="static">
                <Toolbar>
                    <IconButton  aria-label="Menu" color="inherit">
                        <MenuIcon aria-haspopup="true"/>
                    </IconButton>
                    <Typography variant="display2" color="inherit">
                        <Link to="/">What is the Weather?</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        // <Navbar>
        //     <Navbar.Header>
        //         <Navbar.Brand>
        //             <Link to="/">What is the Weather?</Link>
        //         </Navbar.Brand>
        //     </Navbar.Header>
        // </Navbar>
    );
}