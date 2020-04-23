import React from 'react'
import { render } from 'react-dom'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            isFriendly: true
        
        }
        this.handleChange = this.handleChange.bind(this)
    }
handleChange(event){
    const {name,value, type, checked}= event.target
    type === "checkbox"? this.setState({[name]: checked}) : this.setState({
        [name]:value
    })
}

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                value={this.state.firstName}
                name="firstName" 
                placeholder="First Name" 
                onChange={this.handleChange} /> 
                <br />
                <input 
                type="text" 
                name="lastName" 
                value={this.state.lastName}
                placeholder="Last Name" 
                onChange={this.handleChange} /> 
                <br />
                <h1>{this.state.firstName}{this.state.lastName} </h1>

                <textarea 
                value={"default value or whatever"}
                onChange={this.handleChange}
                />
                <br />

                <label>
                <input 
                type="checkbox"
                name="isFriendly"
                checked={this.state.isFriendly}
                onChange={this.handleChange}
                /> Is friendly?
                </label>
                <br/>

                <label>
                <input 
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender}
                onChange={this.handleChange}
                /> Male
                </label>
                <br/>

                <label>
                <input 
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender}
                onChange={this.handleChange}
                /> Female
                </label>

                <label>Favorite Color:</label>
                    <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                    >
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <h1>{this.state.firstName}{this.state.lastName}</h1>
                    <h2>You are a {this.state.gender}</h2>
                    <button>Submit</button>
            </form>
        )
    }
}
export default App