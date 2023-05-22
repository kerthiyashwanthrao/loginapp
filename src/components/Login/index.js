// Write your code here
// Write your code here
import './index.css'

const Login = props => {
  const {login, text, changeButton} = props

  const change = () => {
    changeButton(login)
  }

  return (
    <>
      <div className="container">
        <button onClick={change} type="button" className="button">
          {text}
        </button>
      </div>
    </>
  )
}
export default Login
