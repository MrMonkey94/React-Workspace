import React from 'react'

function Conditional(props) {
    //Conditional rendering: condition ? statement if true: statement if false
    return(
        <div>
    props.isLoading === true ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional 
        rendering</h1>
        </div>
    )
    if (props.isLoading === true){
    return(
        <h1>Loading...</h1>
    )} else {
        return(
            <h1>Some cool stuff about conitional rendering</h1>
        )
    }
    

}
export default Conditional