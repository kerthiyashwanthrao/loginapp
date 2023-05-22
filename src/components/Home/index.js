// Write your code here
import './index.css'

import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {login: false}

  changeButton = login => {
    this.setState({login: !login})
  }

  render() {
    const {login} = this.state
    return (
      <div className="container">
        <div className="card">
          {login ? (
            <Message text="Welcome User" />
          ) : (
            <Message text="Please Login" />
          )}
          {login ? (
            <Logout
              login={login}
              text="Logout"
              changeButton={this.changeButton}
            />
          ) : (
            <Login
              login={login}
              text="Login"
              changeButton={this.changeButton}
            />
          )}
        </div>
      </div>
    )
  }
}
export default Home
