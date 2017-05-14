import React from "react";
import {Link } from 'react-router-dom'
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home'
import Info from 'material-ui/svg-icons/action/info';
import FontIcon from 'material-ui/FontIcon';
import Exit from 'material-ui/svg-icons/action/exit-to-app';
import LinkImg from 'material-ui/svg-icons/content/link';
import Close from 'material-ui/svg-icons/navigation/close';
import Reorder from 'material-ui/svg-icons/action/reorder';
import Github from 'material-ui/svg-icons/action/android'
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import  Diveder from 'material-ui/Divider'
import SessionAction from '../actions/SessionAction';
const style = {
    margin: 12,
};




class TaskListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: true};
    }
    handleToggle(){
        this.setState({open:!this.state.open})

}
routerChanger(nextRoute){
    this.props.history.replace(nextRoute);
}

    render (){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                <Drawer open={this.state.open}>
                    <RaisedButton
                        onClick={this.handleToggle.bind(this)}
                        icon={<Close/>}
                        style={style}


                    />
                    <List>
                        <ListItem
                            primaryText="Home"
                            leftIcon={<Home/>}/>
                    </List>
                    <Diveder/>
                    <List>
                        <ListItem
                            primaryText = "Info"
                            leftIcon = {<Info />}
                            onClick = {this.routerChanger.bind(this,'/about')}

                        />
                        <ListItem
                            primaryText="Github"
                            leftIcon={< LinkImg />}
                            href="https://github.com/KaroHovhannisyan/TodoApp"
                        />
                        <Diveder/>
                        <ListItem
                            primaryText="Log out"
                            leftIcon={<Exit />}
                            onClick={this.routerChanger.bind(this,'/')}


                        />
                    </List>


                </Drawer>
                    <IconButton><Reorder onClick={this.handleToggle.bind(this)}/> </IconButton>


                </div>

            </MuiThemeProvider>
        )
    }




}

export default TaskListPage;