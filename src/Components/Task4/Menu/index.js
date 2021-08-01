import React from 'react';
import MenuItem from '../MenuItem';
import MenuInfoBlock from '../MenuInfoBlock';
import data from '../../../data/data.json';
import './Menu.css';

class Menu extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         element: '',
      };
   }

   getElement = (element) => {
      this.setState({ element });
   };

   render() {
      return (
         <nav className="menu_wrapper">
            <ul className="menu">
               {data.menu.map((listItem, idx) => (
                  <MenuItem
                     linkText={listItem.title}
                     key={idx}
                     getElementHandler={this.getElement}
                  />
               ))}
            </ul>
            <MenuInfoBlock passElement={this.state.element} />
         </nav>
      );
   }
}

export default Menu;
