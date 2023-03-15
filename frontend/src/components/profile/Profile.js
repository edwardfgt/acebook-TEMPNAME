import React, { Component } from 'react';
import '../profile/profile.css'
class ProfilePage extends Component {
  state = {}
  render() {
    return (
      <>
        <div class="profilePageContainer">
          <div className="coverPhoto">
            <img src='/Test-Cover-Photo.jpeg'></img>
          </div>
          <div className="userProfileDetails">
            <div className='innerProfile'>
              <div className='profilePicture'>
                <img src='/Test-Profile-Picture.jpeg'></img>
              </div>
              <div className='userFullName'>
                <h2>Max Allan-Smith</h2>
              </div>
              <div className='friendCount'>
                <h5>551 Friends</h5>
              </div>
              <div className='buttonContainer'>
                <div className='btn btn-outline-primary'>
                  <a>Edit Profile</a>
                </div>
              </div>
            </div>
            <div id="profilePageBreak" className="lineBreak"></div>
            <nav id="profileNavBar" class="navbar navbar-expand-lg navbar-light">
              <a class="navbar-brand" href="#">Posts ▾</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">About<span class="sr-only"></span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Friends</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Photos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Videos</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}



export default ProfilePage;