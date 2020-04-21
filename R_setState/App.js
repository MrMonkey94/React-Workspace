import React from "react"

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this) //bind method handleClick to the class App
    }
    handleClick() {
        this.setState(prevState =>                  //function prevState within function handleClick
            return {
                count: prevState.count +1           //new count property
            }
                                
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}
export default App