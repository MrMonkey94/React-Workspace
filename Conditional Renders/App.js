import React, {Component} from 'react'
import Conditional from './Conditional'

class App extends Component{
    constructor(){                         // in order to set states its needs to be a class component                    
        super()
        this.state = {
            isLoading: true                 //in rder to to keepo track is an actions is taking place, 
                                            //it needs to have a state during call to an API
        }
    }

    componentDidMount(){
        setTimeout(() => {                  //faking a call to an API
            this.setState({
                isLoading: false
            })
        },1500)
    }

                                             // to add a button that loges te user in/out 
                                            // an event listener (onClick)           
    render(){
        return (
            <div>
                <Conditional isLoading={this.state.isLoading}/> //importing the Conditional component
            </div>
        )
    }   
}
export default App

