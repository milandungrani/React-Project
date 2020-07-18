import React, { Component } from 'react'
import axios from 'axios'
import './AddUser.css'

class AddUser extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            },
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: ''
            }
        }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    geoChangeHandler = (event) => {
        this.setState({
            address: {
                ...this.state.address,
                geo: {
                    ...this.state.address.geo,
                    [event.target.name] : event.target.value
                }
            }
        })
    }

    addressChangeHandler = (event) => {
        this.setState({
            address: {
                ...this.state.address,
                [event.target.name] : event.target.value
            }
        })
    }

    companyChangeHandler = (event) => {
        this.setState({
            company: {
                ...this.state.company,
                [event.target.name] : event.target.value
            }
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/api/user',this.state)
        .then(response => {
            alert('Submitted Successfully!')
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    } 

    render() {
        const { name, username, email, address, phone, website, company} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Name : </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Michael Scott"
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Username : </label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            placeholder="PrisonMike"
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Email : </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="michaels@dundermifflin.com"
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Address's Street : </label>
                        <input
                            type="text"
                            name="street"
                            value={address.street}
                            placeholder="Scranton Business Park"
                            onChange={this.addressChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Suite : </label>
                        <input
                            type="text"
                            name="suite"
                            value={address.suite}
                            placeholder="Suite 200"
                            onChange={this.addressChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>City : </label>
                        <input
                            type="text"
                            name="city"
                            value={address.city}
                            placeholder="Scranton"
                            onChange={this.addressChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Zipcode : </label>
                        <input
                            type="text"
                            name="zipcode"
                            value={address.zipcode}
                            placeholder="18505-7427"
                            onChange={this.addressChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Geo Location : </label>
                        <input
                            type="number"
                            name="lat"
                            value={address.geo.lat}
                            placeholder="Latitude"
                            onChange={this.geoChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label />
                        <input
                            type="number"
                            name="lng"
                            value={address.geo.lng}
                            placeholder="Longitude"
                            onChange={this.geoChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone : </label>
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            placeholder="570-904-5026"
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Website : </label>
                        <input
                            type="text"
                            name="website"
                            value={website}
                            placeholder="www.dundermifflinpaper.com"
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Company's Name : </label>
                        <input
                            type="text"
                            name="name"
                            value={company.name}
                            placeholder="Dunder Mifflin Inc."
                            onChange={this.companyChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Catch Phrase : </label>
                        <input
                            type="text"
                            name="catchPhrase"
                            value={company.catchPhrase}
                            placeholder="An innovative paper company"
                            onChange={this.companyChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Bs : </label>
                        <input
                            type="text"
                            name="bs"
                            value={company.bs}
                            placeholder="Sell/Production Management"
                            onChange={this.companyChangeHandler}
                            required
                        />
                    </div>
                    <button type="submit" id="submitButton">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUser