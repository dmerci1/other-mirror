import React from 'react';
import App from './App';
class User extends React.Component {
      
    render() {
        return(
     <div className='user-profile'>
       <h1 className = "users-name">Hello {this.props.user}</h1>
     </div>
     );
    }
}
 
export default User;
