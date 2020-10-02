import React from 'react'

export default class Menu extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h1>Menu</h1>
                </div>
                {
                    this.props.children
                }
                <div>
                    <h2>Footer</h2>
                </div>
            </div>
        )
    }
}