import React from 'react';
import styles from './style.module.css'; // Ensure this points to the correct CSS module file

const BitcoinComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Python for Financial Analysis: Bitcoin Data Insights</h1>
      <p>Welcome to the Python Financial Analysis series focused on Bitcoin. In this tutorial, we'll explore how Python can be a powerful tool in analyzing and understanding Bitcoin data. We will start by setting up our environment and then proceed to gather and analyze real-time Bitcoin data. This guide is suitable for beginners in Python but assumes basic programming knowledge.</p>

      <h2>Setting Up the Environment</h2>
      <p>To begin, you'll need Python installed on your computer. You can download Python from the official website. We will also use several libraries such as pandas for data manipulation, matplotlib for data visualization, and requests for fetching data from the web.</p>

      <pre className={styles.code}>
        <span className={styles.comment}># Install the required libraries</span><br />
        pip install pandas matplotlib requests
      </pre>

      <p>Once you have Python and the libraries installed, we can start fetching Bitcoin data from a public API and analyze it.</p>

      <h2>Fetching Bitcoin Data</h2>
      <p>In this section, we will write a Python function to fetch the latest Bitcoin data from a public API. We will use the 'requests' library to make HTTP requests and 'pandas' to handle the data.</p>

      <pre className={styles.code}>
        <span className={styles.comment}># Importing necessary libraries</span><br />
        import requests<br />
        import pandas as pd<br /><br />
        <span className={styles.comment}># Function to fetch Bitcoin data</span><br />
        <span className={styles.function}>def</span> <span className={styles.ftext}>fetch_bitcoin_data</span>():<br />
        <span className={styles.keyword}>    url</span> = <span className={styles.string}>'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'</span><br />
        <span className={styles.keyword}>    response</span> = requests.get(url)<br />
        <span className={styles.keyword}>    data</span> = response.json()<br />
        <span className={styles.keyword}>    return</span> pd.DataFrame([data['bpi']['USD']])
      </pre>

      <p>This function fetches the current price of Bitcoin in USD and returns it as a pandas DataFrame. In the next section, we will explore how to analyze this data.</p>

      <h2>Conclusion</h2>
      <p>This is just the beginning of our journey into Bitcoin data analysis with Python. In the upcoming sections, we will delve into data analysis and visualization to gain deeper insights into Bitcoin's market trends.</p>
    </div>
  );
};

export default BitcoinComponent;
