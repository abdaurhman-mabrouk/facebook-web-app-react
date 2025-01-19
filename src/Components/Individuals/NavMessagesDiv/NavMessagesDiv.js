import React from 'react';
import './NavMessagesDiv.css';
import user_image from '../../../assets/images/user.png';

function NavMessagesDiv() {
  return (
    <div
      id="messagesDiv"
      className="messages-menu-div nav-menu-div"
      style={{ display: 'block' }}>
      {' '}
      {/* Hidden Div */}
      <div id="messagesHeader">
        <span>Messages</span>
        <a href="#">See All</a>
      </div>
      <div id="messagesBody">
        <a href="#">
          <img src={user_image} className="userImg" alt="User_Image" />
          <span>Message</span>
        </a>

        <a href="#">
          <img src={user_image} className="userImg" alt="User_Image" />
          <span>Message</span>
        </a>

        <a href="#">
          <img src={user_image} className="userImg" alt="User_Image" />
          <span>Message</span>
        </a>

        <a href="#">
          <img src={user_image} className="userImg" alt="User_Image" />
          <span>Message</span>
        </a>

        <a href="#">
          <img src={user_image} className="userImg" alt="User_Image" />
          <span>Message</span>
        </a>
      </div>
    </div>
  );
}

export default NavMessagesDiv;
