import React from "react";
import ReactDOM from 'react-dom';
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
import Folder from 'material-ui/svg-icons/file/folder';
import AddFolder from 'material-ui/svg-icons/content/add'
import Github from 'material-ui/svg-icons/action/android';
import OpenFolder from 'material-ui/svg-icons/file/folder-open';
import RaisedButton from 'material-ui/RaisedButton';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {List, ListItem} from 'material-ui/List';
import  Diveder from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SessionAction from '../actions/SessionAction';
import './components.css';
import Subheader from 'material-ui/Subheader';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

import IconMenu from 'material-ui/IconMenu';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
const style = {
    margin: 12,
}

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="top-right"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Rename</MenuItem>
    </IconMenu>
);


class TaskListPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {MenuOpen: false,
                      exit:false,
                      createFolder:false,
                      FolderNames:["vafsv","hgjhgjhg",'asdasda',"dsdsds","sdsds",'sdsds']}

    }

    handleOpen() {
        this.setState({exit: true});

    }
    createFolder(){
        this.setState({createFolder:true})
        var NewFolderValue=this.refs.newFolderName.input.value;
        this.state.FolderNames.push(NewFolderValue);
        console.log(this.state.FolderNames);
        this.setState({createFolder:false})




    }
    openMenu(){
       this.setState({MenuOpen:!this.state.MenuOpen})
      }

    handleClose (close) {
        if (close === 'Logout_Canceled') {
            {
                this.setState({exit: !this.state.exit})
            }
        } else if (close === 'Folder_CreateCanceled') {
            {
                this.setState({createFolder: !this.state.createFolder})
            }
        } else if (close === 'Log_Out') {
            {
                this.props.history.replace('/');
            }
        }
        //this.setState({exit: false});
        //this.props.history.replace("./");
    }
    routerChanger(nextRoute){
    //this.props.history.replace(nextRoute);
    }
    changeFolderImage(){
        console.log('AAA');
    }

    render (){
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose.bind(this,'Logout_Canceled')}
            />,
            <FlatButton
                label="Log Out"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose.bind(this,'Log_Out')}
            />,
        ];
        const actionsForFolder = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.createFolder.bind(this)}
            />,
            <FlatButton
               label = "Cancel"
               primary={true}
               keyboardFocused={true}
               onClick={this.handleClose.bind(this,"Folder_CreateCanceled")}

            />
        ];
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                <Drawer open={this.state.MenuOpen}>
                    <RaisedButton
                        onClick={this.openMenu.bind(this)}
                        icon={<Close/>}
                        className="closeDrawer"


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
                            onClick={this.handleOpen.bind(this)}


                        />

                        <Dialog
                            title="Are You Sure?"
                            actions={actions}
                            modal={false}
                            open={this.state.exit}
                            onRequestClose={this.handleClose.bind(this)}
                        >
                            Do You want to Log Out from your profile?
                        </Dialog>
                    </List>


                </Drawer>
                    <IconButton><Reorder onClick={this.openMenu.bind(this)}/> </IconButton>
                    <List className="listOfFolders" >
                        <Subheader>Folders</Subheader>
                        <Diveder/>
                       {
                            this.state.FolderNames.map(e =>
                                <ListItem
                                    leftIcon={<Folder/>}
                                    rightIconButton={rightIconMenu}
                                    key={Math.random(1500)}
                                    primaryText={e}
                                    onClick ={this.changeFolderImage.bind(this)}

                                />
                            )
                        }

                        <Diveder/>
                                <ListItem
                                    primaryText="Add Folder"
                                    leftIcon={<AddFolder />}
                                    onClick={this.createFolder.bind(this)}

                              />
                    <Dialog
                            title="Create New Folder"
                            actions={actionsForFolder}
                            modal={false}
                            open={this.state.createFolder}
                            onRequestClose={this.handleClose.bind(this)}
                        >
                            What is your folder name?
                        <Diveder />
                            <TextField ref="newFolderName"  hintText="Enter name" />
                        </Dialog>

                        <Diveder/>

                    </List>



                </div>

            </MuiThemeProvider>
        )
    }




}

export default TaskListPage;