import './ContentWrapper.css';

const Section = (props) => {
   const classProp = props.className
      ? `content-wrapper ${props.className}`
      : 'content-wrapper';
   return <div className={classProp}>{props.children}</div>;
};

export default Section;
