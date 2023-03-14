import React, { Component } from 'react';

class ProfilePage extends Component {
  state = {}
  render() {
    return (
      <div class="profile">
        <img src="https://example.com/profile-picture.jpg" alt="Profile Picture" />
          <h1>First Name</h1>
          <h2>Last Name</h2>
      </div>
    );
  }
}



export default ProfilePage;