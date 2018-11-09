import React, {Component} from 'react'
import {connect} from 'react-redux'



class StepOne extends Component{
    constructor(){
        super()
        
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }
    updateName(value){
        // console.log(1111, value)
        this.setState({
            name: value
        })
    }
    updateAddress(value){
        // console.log(2222, value)
        this.setState({
            address: value
        })
    }
    updateCity(value){
        // console.log(3333, value)
        this.setState({
            city: value
        })
    }
    updateState(value){
        // console.log(4444, value)
        this.setState({
            state: value
        })
    }
    updateZipcode(value){
        // console.log(5555, value)
        this.setState({
            zipcode: value
        })
    }
    render(){
        return(
            <div>
                <div>
                    <h1>Step One</h1>
                    <input onChange={e => this.updateName(e.target.value)} type="text"/>
                    <input onChange={e => this.updateAddress(e.target.value)} type="text"/>
                    <input onChange={e => this.updateCity(e.target.value)} type="text"/>
                    <input onChange={e => this.updateState(e.target.value)} type="text"/>
                    <input onChange={e => this.updateZipcode(e.target.value)} type="integer"/>
                </div>
            </div>
        )
    }
}   
function mapStateToProps(state){
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode
    }
}
export default connect(mapStateToProps)(StepOne)