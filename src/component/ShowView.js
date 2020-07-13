import React, { Component } from 'react'
import ShowUser from './ShowUser'
import AddUser from './AddUser'

class ShowView extends Component {
    render() {
        if (this.props.view === "ShowUser")
            return <ShowUser />
        else if (this.props.view === "AddUser")
            return <AddUser />
    }
}

export default ShowView