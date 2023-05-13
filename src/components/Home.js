import React from 'react';
import styles from './Home.module.css';


function Home() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to our performance stats results website!</h1>
        <p className={styles.description}>Here you can find performance stats for various databases.</p>
        <p className={styles.description}>This is a begining of new website which focuses only on corners of the system designs and enlist captured stats during those use cases. We would start with Mongo DB</p>
      </div>
    </div>
  );
}

export default Home;