import React from 'react';
import { Link } from 'react-router-dom';
class Register extends React.Component {

  render() {
   return(

     <div id = "login">
       <h1>Register Page</h1>
      <button className= "settings-button">Register</button>
       <Link to="/login"><button className= "Back to Login">Register</button></Link>
      </div>

     );
 }
}
export default Register;
