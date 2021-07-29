import React from 'react';
import MenuItem from '../MenuItem';
import MenuInfoBlock from '../MenuInfoBlock';
import './Menu.css';

const Menu = () => {
   const menuTexts = ['Главная', 'Статьи', 'О нас', 'Контакты'];
   const linkAchors = ['main_page', 'article', 'about', 'contacts'];
   return (
      <nav className="menu_wrapper">
         <ul className="menu">
            {menuTexts.map((listItem, index) => (
               <MenuItem linkText={listItem} linkUrl={linkAchors[index]} />
            ))}
         </ul>
         <MenuInfoBlock />
      </nav>
   );
};

export default Menu;
