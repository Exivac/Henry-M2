import React, { useState } from 'react';
import { validate } from './validator';


export default function  Form() {
  //Internal Functions

  const [input, setInput] = React.useState({
    username: '',
    password: '',
  })

  const [errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }



  //Return Value
  return (
      <form>
        <div>
          <label htmlFor="Usermame">Username:</label>
          <input 
          type="text" 
          name='username' 
          value={input['username']}
          onChange={handleInputChange}
          />

          <label htmlFor="Password">Password:</label>
          <input 
          type="password" 
          name="password" 
          value={input['password']}
          onChange={handleInputChange}
          />
          
          <input type="submit" name='Submit' onSubmit={(e) => e.preventDefault}/>
        </div>
      </form>
  )
}
