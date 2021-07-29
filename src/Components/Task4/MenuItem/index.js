import './MenuItem.css';

const MenuItem = (props) => {
   return (
      <li className="menu__item">
         <a href={`#${props.linkUrl}`}>{props.linkText}</a>
      </li>
   );
};

export default MenuItem;
