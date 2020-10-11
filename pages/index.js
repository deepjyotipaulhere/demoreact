import React from 'react'
import Form from '../components/Form'
import Menu from '../components/Menu'
import Link from 'next/link'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class Index extends React.Component {
  state = {
    name: '',
    pwd: '',
    username: ''
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
          <form>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onKeyDown={e=>this.setState({username:e})}  />
            <Button variant="contained" color="primary" onClick={(e) => {
              e.preventDefault();
              axios.post("http://localhost:5000/register", {
                username: this.state.username
              }).then((response) => {
                alert(response.data)
              });

            }}>
              Primary
            </Button>
            {
              JSON.stringify(this.state.username)
            }
          </form>
        </Menu>
      </div>
    )
  }
}

export default Index;