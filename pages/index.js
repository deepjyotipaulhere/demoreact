import React from 'react'
import Form from '../components/Form'
import Menu from '../components/Menu'
import Link from 'next/link'

class Index extends React.Component {
  state = {
    name: '',
    pwd: ''
  }
  render() {
    return (
      <div>
        <Menu>
          <h1>Hello World</h1>
          <p>Hello</p>
          <h2>{this.state.name}</h2>
          <input type="text" onChange={e => this.setState({ name: e.target.value })} />
          <button onClick={() => {
            alert(this.state.name)
          }}>Submit</button>
          <Form />
          <Form />
          <Form />
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </Menu>
      </div>
    )
  }
}

export default Index;