import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
   return (
      <div className="btn_wrapper">
         <button onClick={props.setClickHandler}>DON'T CLICK ME</button>
      </div>
   );
};

export default Button;

Button.propType = {
   setClickHandler: PropTypes.func.isRequired,
};
