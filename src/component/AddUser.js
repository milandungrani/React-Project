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

    addressChangeHandler = (event) => {
        let address = this.state.address
        
        if (event.target.name === "address.street"){
            address.street = event.target.value
        }
        else if (event.target.name === "address.suite"){
            address.suite = event.target.value
        }
        else if (event.target.name === "address.city"){
            address.city = event.target.value
        }
        else if (event.target.name === "address.zipcode"){
            address.zipcode = event.target.value
        }
        else if (event.target.name === "address.geo.lat"){
            address.geo.lat = event.target.value
        }
        else if (event.target.name === "address.geo.lng"){
            address.geo.lng = event.target.value
        }

        this.setState({
            address: address
        })
    }

    companyChangeHandler = (event) => {
        let company = this.state.company
        
        if (event.target.name === "company.name"){
            company.name = event.target.value
        }
        else if (event.target.name === "company.catchPhrase"){
            company.catchPhrase = event.target.value
        }
        else if (event.target.name === "company.bs"){
            company.bs = event.target.value
        }

        this.setState({
            company: company
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/users',this.state)
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
                            name="address.street"
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
                            name="address.suite"
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
                            name="address.city"
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
                            name="address.zipcode"
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
                            name="address.geo.lat"
                            value={address.geo.lat}
                            placeholder="Latitude"
                            onChange={this.addressChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label />
                        <input
                            type="number"
                            name="address.geo.lng"
                            value={address.geo.lng}
                            placeholder="Longitude"
                            onChange={this.addressChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Phone : </label>
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
                            name="company.name"
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
                            name="company.catchPhrase"
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
                            name="company.bs"
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