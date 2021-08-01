import './App.css';
import Menu from './Components/Task4/Menu';
import ContentWrapper from './Components/UI/ContentWrapper';
import FontType from './Components/Task1/FontTypes';
import InfoBlock from './Components/UI/InfoBlock';
import Button from './Components/Task3/Button';
import NotificationComponent from './Components/Task2/NotificationComponent';
import data from './data/data.json';
import ChessBoard from './Components/Task5/ChessBoard';

const showMessageHandler = (e) => {
   e.target.parentElement.style.display = 'none';
   alert('Цыганские фокусы');
};

const App = () => {
   return (
      <div className="container">
         <ContentWrapper>
            <Menu></Menu>
         </ContentWrapper>
         <ContentWrapper>
            <h2>Task #1: FONT TYPES</h2>
            <div className="font-type-wrapper">
               <InfoBlock className={'font-type'}>
                  <h3>
                     <FontType type={'underlined'}>Underlined</FontType>
                  </h3>
                  <p>
                     <FontType type={'underlined'}>{data.text}</FontType>
                  </p>
               </InfoBlock>
               <InfoBlock className={'font-type'}>
                  <h3>
                     <FontType type={'bold'}>Bold</FontType>
                  </h3>
                  <p>
                     <FontType type={'bold'}>{data.text}</FontType>
                  </p>
               </InfoBlock>
               <InfoBlock className={'font-type'}>
                  <h3>
                     <FontType type={'italic'}>Italic</FontType>
                  </h3>
                  <p>
                     <FontType type={'italic'}>{data.text}</FontType>
                  </p>
               </InfoBlock>
               <InfoBlock className={'font-type'}>
                  <h3>
                     <FontType>No type</FontType>
                  </h3>
                  <p>
                     <FontType>{data.text}</FontType>
                  </p>
               </InfoBlock>
            </div>
         </ContentWrapper>
         <ContentWrapper>
            <h2>Task #3: Button</h2>
            <Button setClickHandler={showMessageHandler} />
         </ContentWrapper>
         <ContentWrapper>
            <h2>Task #2: Notification and its types</h2>
            <NotificationComponent notificationType={'Error'} />
            <NotificationComponent notificationType={'Success'} />
            <NotificationComponent notificationType={'Warning'} />
            <NotificationComponent notificationType={'Notification'} />
         </ContentWrapper>
         <ContentWrapper>
            <ChessBoard />
         </ContentWrapper>
      </div>
   );
};

export default App;
