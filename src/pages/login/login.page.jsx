import { useState } from 'react';
import { connect } from 'react-redux';

import { login } from '../../redux/auth/auth.actions';

import './login.styles.scss';

const LoginPage = ({ login }) => {
    // Local State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        // MaKe sure the user typed his credentials
        if(email === '' && password === ''){
            alert('Please provide your email and password')
        }else if(email === 'test@test.com' && password === 'test'){

            // Idealy the login should be an async dispatch
            //But it's done here because no backend auth is needed
            
            // Dispathc login
            login();
            // Clear input fields
            setEmail('');
            setPassword('');
            // Persist authentication state in localStore
            localStorage.setItem('isAuthenticated', true);
        }else{
            // Alert credentials erroe
            alert('Email or password is wrong !')
        }
    }
    return (
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
        <input
          type="email"
          className="form-control"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="form-control"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="btn" onClick={loginHandler}>Login</button>
      </form>
    )
}

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(login())
})
export default connect(null, mapDispatchToProps)(LoginPage)