import React, { useState } from 'react';
import './style.css'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Signin = () => {
    const [formState, setFormState] = useState({
      username: '',
      password: '',
    });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
  
      try {
        const { data } = await login({
          variables: { ...formState },
        });
        console.log(data)
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <main>
        <div>
          <div>
            <h4>Sign In</h4>
            <div className="sign_in_card_body">
              {data ? (
                <p>
                  Success! Thank You For Signing In With Hungr!{' '}
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChange}
                  />
                  <br></br>
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <br></br>
                  <br></br>
                  <button
                  className="sign_in_button"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}
  
              {error && (
                <div>
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Signin;