import React from 'react';
import './Main.css';

// import needed images
import user_image from '../../../assets/images/user.png';
import colored_friends_mark from '../../../assets/images/colored-friends-mark.png';
import colored_statistics_mark from '../../../assets/images/colored-statistics-mark.png';
import colored_timeline_mark from '../../../assets/images/colored-timeline-mark.png';
import colored_groups_mark from '../../../assets/images/colored-groups-mark.png';
import colored_marketplace_mark from '../../../assets/images/colored-marketplace-mark.png';
import colored_videos_mark from '../../../assets/images/colored-videos-mark.png';
import colored_history_mark from '../../../assets/images/colored-history-mark.png';
import colored_save_mark from '../../../assets/images/colored-save-mark.png';
import colored_video_mark from '../../../assets/images/colored-video-mark.png';
import colored_images_mark from '../../../assets/images/images-mark.png';
import colored_live_viedo_mark from '../../../assets/images/colored-live-viedo-mark.png';
import menu_mark from '../../../assets/images/menu-mark.png';
import switch_user_image from '../../../assets/images/switch-user.png';
import sponsor_mark from '../../../assets/images/sponsor-mark.png';
import create_post_mark from '../../../assets/images/create-post-mark.png';
import dark_search_mark from '../../../assets/images/dark-search-mark.png';
import add_mark from '../../../assets/images/add-mark.png';
import gift_mark from '../../../assets/images/gift-mark.png';

function Main() {
  return (
    <>
      <main id="home">
        <span className="left">
          <div className="span-left-main-links">
            <a href="." className="userLink span-left-main-link">
              <img
                src={user_image}
                alt="User-Image"
                id="leftUserImage"
                className="userImage"
              />
              <p>Your Profile</p>
            </a>

            <a href="." className="span-left-main-link">
              <img src={colored_friends_mark} alt="" /> <p>Friends</p>
            </a>

            <a href="." className="span-left-main-link">
              <img src={colored_statistics_mark} alt="" />
              <p>Professional Dashboard</p>
            </a>

            <a href="." className="span-left-main-link">
              <img src={colored_timeline_mark} alt="" />
              <p>Feed</p>
            </a>

            <a href="." className="span-left-main-link">
              <img src={colored_groups_mark} alt="" />
              <p>Groups</p>
            </a>

            <a href="." className="span-left-main-link">
              <img src={colored_marketplace_mark} alt="" />
              <p>MarketPlace</p>
            </a>

            <a href="." className="span-left-main-link">
              <img src={colored_videos_mark} alt="" />
              <p>Videos</p>
            </a>

            <a href="." className="span-left-main-link">
              <img src={colored_history_mark} alt="" />
              <p>Memories</p>
            </a>

            <a href="." className="span-left-main-link">
              <img src={colored_save_mark} alt="" />
              <p>Saved</p>
            </a>

            <a href="." className="span-left-main-link">
              <span id="showMoreSpan">
                <svg
                  viewBox="0 0 16 16"
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true">
                  <g fillRule="evenodd" transform="translate(-448 -544)">
                    <path
                      fillRule="nonzero"
                      d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                  </g>
                </svg>
              </span>
              <p>Show More</p>
            </a>
          </div>

          <hr />

          <div className="span-left-shortcuts" id="spanLeftShortcutsDiv">
            <h3>Your Shortcuts</h3>

            <a href="." className="userLink">
              <img src={user_image} alt="Page" className="userImg" />
              <p>Page</p>
            </a>
          </div>

          <div id="mainLeftSpanFooter">
            <a href=".">Privacy</a>.<a href=".">Terms</a>.
            <a href=".">Advertising</a>.
            <a href=".">
              Ad Choices
              <i
                data-visualcompletion="css-img"
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v4/yZ/r/3qeHUL-iffT.png?_nc_eui2=AeEIYfSIGij7AZVVuW0--RR1v_wivrhxVvK__CK-uHFW8qcq589ciOsWJNf6IBVtf04jCgJRVu19XwiVEGVOFhVO')",
                  backgroundPosition: '0 -142px',
                  backgroundSize: 'auto',
                  width: '12px',
                  height: '12px',
                  backgroundRepeat: 'no-repeat',
                  display: 'inline-block',
                }}></i>
            </a>
            .<a href=".">Cookies</a>.<a href=".">More</a>.
            <a href=".">Meta © 2025</a>.
          </div>
        </span>

        <span className="center">
          <div id="storiesDiv">
            <div className="story">
              <center>Story</center>
            </div>

            <div className="story">
              <center>Story</center>
            </div>

            <div className="story">
              <center>Story</center>
            </div>

            <div className="story">
              <center>Story</center>
            </div>
          </div>

          <div id="createPostDiv">
            <div id="createPostTextDiv">
              <img src={user_image} alt="" />
              <input type="text" placeholder="What's in Your Mind ?" />
            </div>

            <hr />

            <div id="createPostAttachmentsDiv">
              <a href=".">
                <img src={colored_video_mark} alt="" />
              </a>

              <a href=".">
                <img src={colored_images_mark} alt="" />
              </a>

              <a href=".">
                <img src={colored_live_viedo_mark} alt="" />
              </a>
            </div>
          </div>

          <div id="reelsDiv">
            <div className="reel">
              <center>Reel</center>
            </div>

            <div className="reel">
              <center>Reel</center>
            </div>

            <div className="reel">
              <center>Reel</center>
            </div>
          </div>

          <div id="feedDiv">
            <div className="post">
              <div className="post-details">
                <img src={user_image} alt="User" className="post-user" />
                <span className="post-details">
                  <div className="publisher-name">
                    <a href=".">Publisher Name</a>
                  </div>
                  <div className="post-date">
                    <a href=".">januray 1 at 02:01 pm</a>.
                    <a href=".">
                      <svg
                        viewBox="0 0 16 16"
                        width="12"
                        height="12"
                        fill="currentColor"
                        title="Shared with Custom">
                        <title>Shared with Custom</title>
                        <g fillRule="evenodd" transform="translate(-448 -544)">
                          <path d="M459.75 551c-1.24 0-2.25-1.121-2.25-2.5 0-1.542.863-2.5 2.25-2.5s2.25.958 2.25 2.5c0 1.379-1.01 2.5-2.25 2.5m.692 1h-1.384c-.105 0-.21.005-.312.014a.3.3 0 0 0-.186.509 5.03 5.03 0 0 1 1.44 3.53v1.147a.3.3 0 0 0 .3.3h2.015c.929 0 1.685-.756 1.685-1.685v-.257a3.562 3.562 0 0 0-3.558-3.558m-3.032 6.5h-7.82c-.877 0-1.59-.714-1.59-1.59v-.857a4.057 4.057 0 0 1 4.053-4.053h2.894a4.057 4.057 0 0 1 4.053 4.053v.856c0 .877-.713 1.591-1.59 1.591m-3.91-7.5c-1.379 0-2.5-1.346-2.5-3 0-1.879.935-3 2.5-3s2.5 1.121 2.5 3c0 1.654-1.121 3-2.5 3"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </span>

                <span className="post-control">
                  <a href=".">
                    <svg
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                      fill="currentColor">
                      <g fillRule="evenodd" transform="translate(-446 -350)">
                        <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                      </g>
                    </svg>
                  </a>

                  <a href=".">
                    <svg
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                      fill="currentColor">
                      <path d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z"></path>
                    </svg>
                  </a>
                </span>
              </div>

              <div className="post-description">
                The Text Area of The Post Description.
              </div>

              <div className="post-image">
                <center>
                  <img
                    src="https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/472790544_1398800694859261_7919864601345637473_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEr1X4syEWQiJo_o3Eqzg1Lk852RfKxa52TznZF8rFrneQYNHmtCk3tTQ4nhRfErujpObqhKf6Qu45N-qoHJM4r&_nc_ohc=-MeOmU4vLe8Q7kNvgFlJF5l&_nc_oc=AditvMw91HGEzhDa0Brfaiq6PpVfT4bdYVJ68dI8krbInnYC1ZKIaGxIBgRb8pwNMHU&_nc_zt=23&_nc_ht=scontent.fcai21-3.fna&_nc_gid=ADox5949qkRCXynUYJiH7_0&oh=00_AYD3LOXooF3E1PjQMtefp325wFRuvpE-5jLTyhYNi4fQfw&oe=678DF7A3"
                    alt="Post-Image"
                    className="post-image"
                  />
                </center>
              </div>

              <div className="post-statics">
                <span className="post-statics-left">
                  <img
                    height="18"
                    role="presentation"
                    width="18"
                    src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                    alt=""
                  />
                </span>

                <span className="post-statics-right">
                  <a href=".">1 Comment</a>
                  <a href=".">1 Share</a>
                </span>
              </div>

              <hr />

              <div className="post-reacts">
                <a href=".">
                  <i
                    data-visualcompletion="css-img"
                    style={{
                      backgroundImage:
                        "url('https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeEkDYcN4q1wOEgt48oyGxiwYHlezEfsCP5geV7MR-wI_gJTaDCuRNWBcC6hDf9dFIR3e9dVOGlF6cFTXxFrYF1D')",
                      backgroundPosition: '0px -798px',
                      backgroundSize: 'auto',
                      width: '20px',
                      height: '20px',
                      backgroundRepeat: 'no-repeat',
                      display: 'inline-block',
                    }}></i>
                  Like
                </a>

                <a href=".">
                  <i
                    data-visualcompletion="css-img"
                    style={{
                      backgroundImage:
                        "url('https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeEkDYcN4q1wOEgt48oyGxiwYHlezEfsCP5geV7MR-wI_gJTaDCuRNWBcC6hDf9dFIR3e9dVOGlF6cFTXxFrYF1D')",
                      backgroundPosition: '0px -588px',
                      backgroundSize: 'auto',
                      width: '20px',
                      height: '20px',
                      backgroundRepeat: 'no-repeat',
                      display: 'inline-block',
                    }}></i>
                  Comment
                </a>

                <a href=".">
                  <i
                    data-visualcompletion="css-img"
                    style={{
                      backgroundImage:
                        "url('https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeEkDYcN4q1wOEgt48oyGxiwYHlezEfsCP5geV7MR-wI_gJTaDCuRNWBcC6hDf9dFIR3e9dVOGlF6cFTXxFrYF1D')",
                      backgroundPosition: '0px -588px',
                      backgroundSize: 'auto',
                      width: '20px',
                      height: '20px',
                      backgroundRepeat: 'no-repeat',
                      display: 'inline-block',
                    }}></i>
                  Send
                </a>

                <a href=".">
                  <i
                    data-visualcompletion="css-img"
                    style={{
                      backgroundImage:
                        "url('https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png?_nc_eui2=AeEkDYcN4q1wOEgt48oyGxiwYHlezEfsCP5geV7MR-wI_gJTaDCuRNWBcC6hDf9dFIR3e9dVOGlF6cFTXxFrYF1D')",
                      backgroundPosition: '0px -924px',
                      backgroundSize: 'auto',
                      width: '20px',
                      height: '20px',
                      backgroundRepeat: 'no-repeat',
                      display: 'inline-block',
                    }}></i>
                  Share
                </a>
              </div>
            </div>
          </div>
        </span>

        <span className="right">
          <div>
            <h3>
              Your Pages and Your Profiles
              <img src={menu_mark} alt="" className="right" />
            </h3>

            <a href="." className="userLink">
              <img src={user_image} alt="" className="userImg" /> Your Profile
            </a>

            <a href=".">
              <img src={switch_user_image} alt="" /> Switch To Page
            </a>

            <a href=".">
              <img src={sponsor_mark} alt="" /> Create Sponsor
            </a>
          </div>

          <hr />

          <div id="birthdaysDiv">
            <h3>Birthdays</h3>
            <a href=".">
              <img src={gift_mark} alt="" /> Today's User Birthday
            </a>
          </div>

          <hr />

          <div id="contactsDiv">
            <h3>
              Contacts
              <img src={dark_search_mark} alt="" className="right" />
              <img src={menu_mark} alt="" className="right" />
            </h3>

            <a href="." className="userLink">
              <img src={user_image} alt="" className="userImg" />
              <span>User</span>
            </a>

            <a href="." className="userLink">
              <img src={user_image} alt="" className="userImg" />
              <span>User</span>
            </a>

            <a href="." className="userLink">
              <img src={user_image} alt="" className="userImg" />
              <span>User</span>
            </a>

            <a href="." className="userLink">
              <img src={user_image} alt="" className="userImg" />
              <span>User</span>
            </a>

            <a href="." className="userLink">
              <img src={user_image} alt="" className="userImg" />
              <span>User</span>
            </a>

            <a href="." className="userLink">
              <img src={user_image} alt="" className="userImg" />
              <span>User</span>
            </a>

            <a href="." className="userLink">
              <img src={user_image} alt="" className="userImg" />
              <span>User</span>
            </a>
          </div>

          <hr />

          <div>
            <h3>Groups Conversations</h3>

            <a href="." className="groupLink">
              <img src={user_image} alt="" className="groupImg" /> Group
            </a>

            <a href="." className="groupLink">
              <img src={user_image} alt="" className="groupImg" /> Group
            </a>

            <a href="." className="groupLink">
              <img src={user_image} alt="" className="groupImg" /> Group
            </a>

            <a href=".">
              <img src={add_mark} alt="" /> Create New Group
            </a>
          </div>
        </span>

        {/* <!-- unRelative Content --> */}
        <div id="addPost">
          <a href=".">
            <img src={create_post_mark} alt="create Post" />
          </a>
        </div>
      </main>
    </>
  );
}

export default Main;
