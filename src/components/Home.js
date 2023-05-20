import React from 'react';
import styles from './Home.module.css';
import Table from './Table';


function Home() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to our performance stats results website!</h1>
        <p className={styles.description}>Here you can find performance stats for various databases.</p>
        <p className={styles.description}>This is the very begining & the focuses is only on corners of the system designs and enlist captured stats during those use cases. We would start with Mongo DB</p>
        <p className={styles.description}>PC config Used: 16 gb ram, 2.6 ghz processor, maximum Memory consumpition by jmeter: 8GB, Total cpu consumpition: 10-80% of 3.6ghz, CPU Consumption by mongo almost 80%</p>
        <p className={styles.description}>Below are the stats of response times captured in milliseconds</p>
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}

export default Home;