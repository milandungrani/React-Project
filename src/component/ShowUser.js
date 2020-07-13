import React, { Component } from 'react'
import axios from 'axios'
import './ShowUser.css'

class ShowUser extends Component {
    constructor() {
        super()
        this.state = {
            Users: [],
            Error: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response)
                this.setState({ Users: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ Error: 'Error retreiving data' })
            })
    }

    renderTableHeader() {
        let tableHeader = Object.keys(this.state.Users[0])
        return tableHeader.map(key => {
           return <th key={key}>{key.toUpperCase()}</th>
        })
     }

    showAddress = (address) => {
        const {street, suite, city, zipcode, geo} = address
        return `${street},\n${suite},\n${city},\nZipcode : ${zipcode},\nLocation : ${geo.lat}, ${geo.lng}`
    }

    showComany = (company) => {
        const { name, catchPhrase, bs } = company
        return `${name},\n${catchPhrase},\n${bs}`
    }

    renderTableData() {
        return this.state.Users.map(User => {
            const { id, name, username, email, address, phone, website, company } = User
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{this.showAddress(address)}</td>
                    <td>{phone}</td>
                    <td>{website}</td>
                    <td>{this.showComany(company)}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.Users.length ?
                    <div>
                        <h1 id="heading">List of Users</h1>
                        <table id="users">
                            <thead>
                                <tr>{this.renderTableHeader()}</tr>
                            </thead>
                            <tbody>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                    : null
                }
                {
                    this.state.Error ? <div>{this.state.Error}</div> : null
                }
            </div>
        )
    }
}

export default ShowUser