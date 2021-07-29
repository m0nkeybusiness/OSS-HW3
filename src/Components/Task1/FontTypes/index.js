import PropTypes from 'prop-types';

const FontTypes = (props) => {
   switch (props.type) {
      case 'bold':
         return <b>{props.children}</b>;
      case 'italic':
         return <i>{props.children}</i>;
      case 'underlined':
         return <u>{props.children}</u>;
      default:
         return null;
   }
};

export default FontTypes;

FontTypes.propTypes = {
   type: PropTypes.string,
};

FontTypes.defaultProps = {
   type: 'bold',
};
