import React, {Component} from 'react'
import Conditional from './Conditional'

class App extends Component{
    constructor(){
        super()
        this.state = {
            isLoading: true                 //during call to an API
        }
    }

    componentDidMount(){
        setTimeout(() => {                  //faking a call to an API
            this.setState({
                isLoading: false
            })
        },1500)
    }


    render(){
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/> //importing the Conditional component
            </div>
        )
    }   
}
export default App

