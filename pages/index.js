import React from 'react';
import styles from './index.css';
import {Link} from 'umi';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index1</h1>
      <Link to="/profile">个人中心</Link>
    </div>
  );
}
