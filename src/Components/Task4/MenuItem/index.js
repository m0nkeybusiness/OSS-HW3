import React from 'react';
import './MenuItem.css';

class MenuItem extends React.Component {
   clickElementHandler = (e) => {
      this.props.getElementHandler(e.target.textContent);
   };
   render() {
      return (
         <li className="menu__item">
            <span onClick={this.clickElementHandler}>
               {this.props.linkText}
            </span>
         </li>
      );
   }
}

export default MenuItem;
