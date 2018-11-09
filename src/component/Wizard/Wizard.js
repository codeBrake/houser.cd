import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import StepOne from '../StepOne'

class Wizard extends Component{   
    

    render(){
        return(
            <div>
                <div>
                    <h1>Wizard</h1>
                    <StepOne/>
                    <button>Add Property</button>
                    <Link to='/'><button className='cancelButton'>Cancel</button></Link> 
                </div>
               
            </div>
        )
    }
}
export default Wizard