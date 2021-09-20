
import React from 'react';
import styles from './profile.css';
import {history} from 'umi';

function Profile() {
  return (
    <div>
      <button onClick={() => history.goBack()}> 返回</button>
      <h1 className={styles.title}>Page profile</h1>
    </div>
  );
}

Profile.wrappers = ['../PrivateRoute.js']
export default Profile