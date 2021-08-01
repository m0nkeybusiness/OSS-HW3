import React from 'react';
import PropTypes from 'prop-types';
import data from '../../../data/data.json';
import './MenuInfoBlock.css';

class MenuInfoBlock extends React.Component {
   constructor(props) {
      super(props);
   }

   returnElements() {
      const menuList = data.menu;
      for (let i = 0; i < menuList.length; i++) {
         if (this.props.passElement === menuList[i].title) {
            return (
               <div className="menu_info">
                  <h3 className="menu__title">{menuList[i].title}</h3>
                  <div className="menu__content">{menuList[i].text}</div>
               </div>
            );
         }
      }
      return (
         <div className="menu_info">
            <h3 className="menu__title">{menuList[0].title}</h3>
            <div className="menu__content">{menuList[0].text}</div>
         </div>
      );
   }

   render() {
      return this.returnElements();
   }
}
export default MenuInfoBlock;

MenuInfoBlock.propTypes = {
   passElement: PropTypes.string,
};
