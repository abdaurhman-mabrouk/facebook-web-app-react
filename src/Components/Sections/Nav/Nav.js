import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <span className="left">
        <a href="#">
          <img
            src="assets/images/facebookIcon.ico"
            alt="Facebook Logo"
            id="facebookLogo"
          />
        </a>

        <div id="searchBarDiv">
          <input type="text" id="searchBar" placeholder="Search in Facebook" />
          <svg
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            id="searchMark">
            <g fillRule="evenodd" transform="translate(-448 -544)">
              <g fillRule="nonzero">
                <path
                  d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                  transform="translate(448 544)"></path>
                <path
                  d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                  transform="translate(448 544)"></path>
                <path
                  d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                  transform="translate(448 544)"></path>
                <path
                  d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                  transform="translate(448 544)"></path>
              </g>
            </g>
          </svg>
        </div>
      </span>

      <span className="center">
        <a
          href="#"
          id="navBarHomeLink"
          className="navbar-icon-link nav-bar-center-link">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z"></path>
          </svg>
        </a>

        <a
          href="#"
          id="navBarWatchLink"
          className="navbar-icon-link nav-bar-center-link">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M10.996 8.132A1 1 0 0 0 9.5 9v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z"></path>
            <path d="M14.573 2H9.427c-1.824 0-3.293 0-4.45.155-1.2.162-2.21.507-3.013 1.31C1.162 4.266.817 5.277.655 6.477.5 7.634.5 9.103.5 10.927v.146c0 1.824 0 3.293.155 4.45.162 1.2.507 2.21 1.31 3.012.802.803 1.813 1.148 3.013 1.31C6.134 20 7.603 20 9.427 20h5.146c1.824 0 3.293 0 4.45-.155 1.2-.162 2.21-.507 3.012-1.31.803-.802 1.148-1.813 1.31-3.013.155-1.156.155-2.625.155-4.449v-.146c0-1.824 0-3.293-.155-4.45-.162-1.2-.507-2.21-1.31-3.013-.802-.802-1.813-1.147-3.013-1.309C17.866 2 16.397 2 14.573 2zM3.38 4.879c.369-.37.887-.61 1.865-.741C6.251 4.002 7.586 4 9.5 4h5c1.914 0 3.249.002 4.256.138.978.131 1.496.372 1.865.74.37.37.61.888.742 1.866.135 1.007.137 2.342.137 4.256 0 1.914-.002 3.249-.137 4.256-.132.978-.373 1.496-.742 1.865-.369.37-.887.61-1.865.742-1.007.135-2.342.137-4.256.137h-5c-1.914 0-3.249-.002-4.256-.137-.978-.132-1.496-.373-1.865-.742-.37-.369-.61-.887-.741-1.865C2.502 14.249 2.5 12.914 2.5 11c0-1.914.002-3.249.138-4.256.131-.978.372-1.496.74-1.865zM8 21.5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"></path>
          </svg>
        </a>

        <a
          href="#"
          id="navBarMarketLink"
          className="navbar-icon-link nav-bar-center-link">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path>
          </svg>
        </a>

        <a
          href="#"
          id="navBarGroupsLink"
          className="navbar-icon-link nav-bar-center-link">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M.5 12c0 6.351 5.149 11.5 11.5 11.5S23.5 18.351 23.5 12 18.351.5 12 .5.5 5.649.5 12zm2 0c0-.682.072-1.348.209-1.99a2 2 0 0 1 0 3.98A9.539 9.539 0 0 1 2.5 12zm.84-3.912A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 8.66 5.588 4.001 4.001 0 0 0 0 7.824 9.514 9.514 0 0 1-1.755 2.613A5.002 5.002 0 0 0 14 14.5h-4a5.002 5.002 0 0 0-4.905 4.025 9.515 9.515 0 0 1-1.755-2.613 4.001 4.001 0 0 0 0-7.824zM12 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm11.291 1.01a9.538 9.538 0 0 1 0 3.98 2 2 0 0 1 0-3.98zM16.99 20.087A9.455 9.455 0 0 1 12 21.5c-1.83 0-3.54-.517-4.99-1.414a1.004 1.004 0 0 1-.01-.148V19.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v.438a1 1 0 0 1-.01.148z"></path>
          </svg>
        </a>

        <a
          href="#"
          id="navBarGamingLink"
          className="navbar-icon-link nav-bar-center-link">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z"></path>
            <path d="M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z"></path>
          </svg>
        </a>
      </span>

      <span className="right">
        <a href="#" className="navbar-icon-link">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            id="listImage">
            <path d="M18.5 1A1.5 1.5 0 0 0 17 2.5v3A1.5 1.5 0 0 0 18.5 7h3A1.5 1.5 0 0 0 23 5.5v-3A1.5 1.5 0 0 0 21.5 1h-3zm0 8a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 21.5 9h-3zm-16 8A1.5 1.5 0 0 0 1 18.5v3A1.5 1.5 0 0 0 2.5 23h3A1.5 1.5 0 0 0 7 21.5v-3A1.5 1.5 0 0 0 5.5 17h-3zm8 0A1.5 1.5 0 0 0 9 18.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm8 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm-16-8A1.5 1.5 0 0 0 1 10.5v3A1.5 1.5 0 0 0 2.5 15h3A1.5 1.5 0 0 0 7 13.5v-3A1.5 1.5 0 0 0 5.5 9h-3zm0-8A1.5 1.5 0 0 0 1 2.5v3A1.5 1.5 0 0 0 2.5 7h3A1.5 1.5 0 0 0 7 5.5v-3A1.5 1.5 0 0 0 5.5 1h-3zm8 0A1.5 1.5 0 0 0 9 2.5v3A1.5 1.5 0 0 0 10.5 7h3A1.5 1.5 0 0 0 15 5.5v-3A1.5 1.5 0 0 0 13.5 1h-3zm0 8A1.5 1.5 0 0 0 9 10.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 13.5 9h-3z"></path>
          </svg>
        </a>

        <a href="#" className="navbar-icon-link" id="messagesImageLink">
          <svg
            viewBox="0 0 12 13"
            width="20"
            height="20"
            fill="currentColor"
            id="messagesImage">
            <g fillRule="evenodd" transform="translate(-450 -1073)">
              <path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82"></path>
            </g>
          </svg>
        </a>
        {/* Messages Hidden Relative Div */}
        <div id="messagesDiv" style={{ display: 'none' }}>
          {' '}
          {/* Hidden Div */}
          <div id="messagesHeader">
            <span>Messages</span>
            <a href="#">See All</a>
          </div>
          <div id="messagesBody">
            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Message</span>
            </a>

            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Message</span>
            </a>

            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Message</span>
            </a>

            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Message</span>
            </a>

            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Message</span>
            </a>
          </div>
        </div>

        <a href="#" className="navbar-icon-link" id="notificationsImageLink">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            id="notificationsImage">
            <path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path>
          </svg>
        </a>
        {/* Notifications Hidden Relative Div */}
        <div id="notificationsDiv" style={{ display: 'none' }}>
          {' '}
          {/* Hidden Div */}
          <div id="notificationsHeader">
            <span>Notifications</span>
            <a href="#">See All</a>
          </div>
          <div id="notificationsBody">
            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Notification</span>
            </a>
            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Notification</span>
            </a>
            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Notification</span>
            </a>
            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Notification</span>
            </a>
            <a href="#">
              <img src="assets/images/user.png" className="userImg" />
              <span>Notification</span>
            </a>
          </div>
        </div>

        <a href="#" id="userImageLink" className="navbar-icon-link">
          <img
            src="assets/images/user-menu.png"
            alt="User-Image"
            id="userImage"
          />
        </a>
        {/* <!-- User Menu Hidden Relative Div --> */}
        <div id="userMenuDiv" style={{ display: 'none' }}>
          {' '}
          {/* Hidden Div */}
          <div id="pageSwitcherDiv">
            <a href="#" className="page-switcher-link">
              <div>
                <img
                  src="assets/images/user.png"
                  className="page-switcher-image userImg"
                />
                Your Profile
              </div>
            </a>

            <hr />

            <a href="#" className="page-switcher-link">
              <div>
                <img
                  src="assets/images/user.png"
                  className="page-switcher-image userImg"
                />
                Your Profile
              </div>
            </a>

            <a href="#" className="page-switcher-link">
              <div>
                <img
                  src="assets/images/user.png"
                  className="page-switcher-image userImg"
                />
                Your Profile
              </div>
            </a>

            <hr />

            <a href="#" id="showAllProfiles" className="page-switcher-link">
              <i dataVisualcompletion="css-img" ariaHidden="true"></i>
              Show All The Personal Profiles
            </a>
          </div>
          <div id="userMenuLinks">
            <a href="#">
              <img src="assets/images/settings-mark.png" />
              Settings and Pravicy
              <i
                dataVisualcompletion="css-img"
                ariaHidden="true"
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/Y8kZSY8iBwN.png?_nc_eui2=AeHQJ2ve52vvXNI0EzYkUZY86WlMCfHoRYbpaUwJ8ehFhjMmjoXS0SgXGzThtYH9E2Y1eRUIbCwG7Kjnn_1SJZFz')",
                  backgroundPosition: '0px -75px',
                  backgroundSize: 'auto',
                  width: '24px',
                  height: '24px',
                  backgroundRepeat: 'no-repeat',
                  display: 'inline-block',
                }}></i>
            </a>

            <br />

            <a href="#">
              <img src="assets/images/question-mark.png" />
              Help and Support
              <i
                dataVisualcompletion="css-img"
                ariaHidden="true"
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/Y8kZSY8iBwN.png?_nc_eui2=AeHQJ2ve52vvXNI0EzYkUZY86WlMCfHoRYbpaUwJ8ehFhjMmjoXS0SgXGzThtYH9E2Y1eRUIbCwG7Kjnn_1SJZFz')",
                  backgroundPosition: '0px -75px',
                  backgroundSize: 'auto',
                  width: '24px',
                  height: '24px',
                  backgroundRepeat: 'no-repeat',
                  display: 'inline-block',
                }}></i>
            </a>

            <br />

            <a href="#">
              <img src="assets/images/dark-mood-mark.png" />
              Display &amp; Accessibility
              <i
                dataVisualcompletion="css-img"
                ariaHidden="true"
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/Y8kZSY8iBwN.png?_nc_eui2=AeHQJ2ve52vvXNI0EzYkUZY86WlMCfHoRYbpaUwJ8ehFhjMmjoXS0SgXGzThtYH9E2Y1eRUIbCwG7Kjnn_1SJZFz')",
                  backgroundPosition: '0px -75px',
                  backgroundSize: 'auto',
                  width: '24px',
                  height: '24px',
                  backgroundRepeat: 'no-repeat',
                  display: 'inline-block',
                }}></i>
            </a>

            <br />

            <a href="#">
              <img src="assets/images/feedback-mark.png" alt="Feedback Mark" />
              Give feedback
            </a>

            <br />

            <a href="#">
              <img src="assets/images/logout-mark.png" alt="Logout Mark" />
              Logout
            </a>
          </div>
        </div>
      </span>
    </nav>
  );
}

export default Nav;
