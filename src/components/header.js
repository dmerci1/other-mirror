import React, { Component } from 'react';
import Time from './Time';
import Day from './Date';
import Weather from './weather';
import User from './user';
//import User from './user';
class Header extends React.Component {
    render() {
        return(
          <div>
            <div className = "right">
                <Day></Day>
                <Time></Time>
            </div>
            <div>
                <User user = {this.props.user}></User>
            </div>
            <div className = "left">
                <Weather></Weather>
            </div>
         </div>
          );
        }
      }
      export default Header;
