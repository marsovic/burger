import React, { Component } from 'react';

import Aux from "../Aux/Aux";
import './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class layout  extends Component {
    
    state= {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawertoggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {
        return(
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawertoggleHandler}/>
            <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.sideDrawerCloseHandler} />
            <main className="Content">
                {this.props.children}
            </main>
        </Aux>
        );
    }
}

export default layout;