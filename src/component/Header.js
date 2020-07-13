import React, { Component } from 'react'
import ShowView from './ShowView'
import './Header.css'

class Header extends Component {

    constructor() {
        super()
        this.state = {
            currentView: "ShowUser"
        }
    }

    showButtonName = () => {
        if (this.state.currentView === "ShowUser")
            return "Add User"
        else if (this.state.currentView === "AddUser")
            return "Show User(s)"
    }

    changeViewHandler = () => {
        if (this.state.currentView === "ShowUser") {
            this.setState({
                currentView: "AddUser"
            })
        }
        else if (this.state.currentView === "AddUser") {
            this.setState({
                currentView: "ShowUser"
            })
        }
    }

    render() {
        return (
          <div>
              <button id="mainButton" onClick={this.changeViewHandler}> {this.showButtonName()} </button>
              <ShowView view={this.state.currentView}/>
          </div>  
        ) 
    }
}

export default Header