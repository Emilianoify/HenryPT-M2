import React from 'react';
import './App.css'
export default function Form() {

  const [errors, setErrors] = React.useState({})
  const [input, setInput] = React.useState({
    username: "",
    password: ""
  });

  function handleOnChange(e) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [e.target.name]: e.target.value
      }
    });

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));

  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      alert(e.username, e.password)
    }} >
      <div className='App-header'>
        <div>
          <label>Username:</label>
          <input className={errors.username && 'danger'} type="text" name="username" value={input.username} onChange={handleOnChange} />
          {errors.username && (
      <p className="danger">{errors.username}</p>
    )}
        </div>
        <div>
          <label>Password:</label>
          <input className={errors.password && 'danger'} type="password" name="password" value={input.password} onChange={handleOnChange} />
          {errors.password && (
      <p className="danger">{errors.password}</p>
    )}
        </div>
        <button type='submit'>Enviar</button>
      </div>
    </form>
  )
}

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = "Username is required"
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  } else if(!input.password){
    errors.password = "Password is required"
  }else if(!/(?=.*[0-9])/.test(input.password)){
    errors.password = "Password is invalid"
  }
  return errors;
}