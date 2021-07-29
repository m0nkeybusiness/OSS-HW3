import React from 'react';
import data from '../../../data/data.json';
import PropTypes from 'prop-types';
import './NotificationComponent.css';

class NotificationComponent extends React.Component {
   showType(notifiType) {
      return (
         <div className={`${notifiType.type.toLowerCase()} box`}>
            <div className="type">{notifiType.type}</div>
            <div className="msg">{notifiType.msg}</div>
         </div>
      );
   }

   render() {
      switch (this.props.notificationType) {
         case 'Error':
            return this.showType(data.notificationTypes[0]);
         case 'Success':
            return this.showType(data.notificationTypes[1]);
         case 'Warning':
            return this.showType(data.notificationTypes[2]);
         case 'Notification':
            return this.showType(data.notificationTypes[3]);
         default:
            return null;
      }
   }
}

export default NotificationComponent;

NotificationComponent.propTypes = {
   notificationType: PropTypes.string.isRequired,
};

NotificationComponent.defaultProps = {
   notificationType: 'Notification',
};
