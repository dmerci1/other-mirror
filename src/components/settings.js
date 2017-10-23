import React from 'react';
import { Link } from 'react-router-dom';
import SwitchButton from 'react-switch-button';
import 'react-switch-button/dist/react-switch-button.css';
import ToggleDisplay from 'react-toggle-display';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
   return(

     <div className = "settings">
       <h1 id="settings-title">Mirror Settings</h1>
       <img id="user-image" src = {this.props.image} />

       <nav>
         <ul>
         
           <li><button className= "settings-button" defaultChecked={true} onClick={ () => this.handleClick() }>Mirror Content</button></li>
           
           <li><button className= "settings-button"> Manage Notifications</button></li>
           <li><Link to="/set-weather"><button className= "settings-button"> Log Out</button></Link></li>
         </ul>
       </nav>
      </div>


     );
 }
}
export default Settings;
