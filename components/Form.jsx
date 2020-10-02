import React from 'react'

export default class Form extends React.Component{
    state={
        name: '',
        pwd:''
    }
    render(){
        return (
        <div>
            <input type='text' onChange={e=>this.setState({name:e.target.value})} />
            <input type='password' onChange={e=>this.setState({pwd: e.target.value})} />
            <button>Submit</button>
        </div>
        )
    }
}