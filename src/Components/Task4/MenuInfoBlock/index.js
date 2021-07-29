import data from '../../../data/data.json';
import './MenuInfoBlock.css';

const MenuInfoBlock = (props) => {
   return <div className="menu_info">{data.text}</div>;
};

export default MenuInfoBlock;
