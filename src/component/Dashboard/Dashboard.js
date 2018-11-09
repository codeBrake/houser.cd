import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'


export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
          list: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)

    }
    componentDidMount(){
        axios.get('/api/houses').then(results => {
            console.log(11111111, results)
            this.setState({
                list: results.data
            })
        })
    }
    deleteHouse(){
        axios.post('/api/delete').then(results => {
           this.props.componentDidMount()
        })
    }


    render(){
        let list = this.state.list.map( ( element, index ) => {
            return (
              {list} 
            )
        })
        return(
            <div>
                Dashboard
                <House/>
                <Link to='/wizard'><button className='addProp'>Add New Property</button></Link>
            </div>
        )
    }
}
