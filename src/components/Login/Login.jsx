import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { login } from "../../redux/auth-reducer"
import { required } from "../../utils/validators/validator"
import { creatField, Input } from "../common/FormsControls/FormsControls"
import styles from "../common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit, error}) => {
  return (
        <form onSubmit={handleSubmit}>
          {creatField('text', 'Email', 'email', [required], Input)}
          {creatField('password', 'Password', 'password', [required], Input)}
          {creatField('checkbox', null, 'rememberMe', [], Input, 'remember Me')}

          {error && <div className={styles.formSammaryError}>
            {error}
          </div>}
          <div>
            <button>Login</button>
          </div>
        </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)