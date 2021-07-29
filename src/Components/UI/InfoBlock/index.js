import './InfoBlock.css';

const InfoBlock = (props) => {
   return (
      <div className={`info-block ${props.className}`}>{props.children}</div>
   );
};

export default InfoBlock;
