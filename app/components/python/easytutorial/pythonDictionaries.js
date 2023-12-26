import React from 'react';
import styles from './style.module.css';
import BeginnerBatchComp from '../beginnerBatch';
import AdvancedBatchComp from '../advancedBatch';

const PythonDictionaries = () => {
  return (
    <div className={styles.container}>
       <div className="flex flex-row space-x-2">
         <div>
           <BeginnerBatchComp />
          </div>
          <div>
          <AdvancedBatchComp />
            </div>
        </div>
      <h1>Mastering Python Dictionaries: A Comprehensive Guide</h1>

      <h2>Introduction to Dictionaries</h2>
      <p>
        Discover the power and flexibility of Python dictionaries. Ideal for fast data retrieval and manipulation, they're an essential tool for modern Python programming.
      </p>

      <h2>Creating a Dictionary</h2>
      <p>
        Learn two ways to create dictionaries in Python, either using curly braces or the dict() function, to build your data structures effectively.
      </p>
      <p>
        Here's how you can create a dictionary using curly braces:
      </p>
      <pre className={styles.code}>
        <code>
          <span className={styles.comment}># Creating a dictionary using curly braces</span><br />
          employee = {'{'}<br />
          {'    '}<span className={styles.string}>'name'</span>: <span className={styles.string}>'Alice'</span>,<br />
          {'    '}<span className={styles.string}>'age'</span>: <span className={styles.number}>30</span>,<br />
          {'    '}<span className={styles.string}>'department'</span>: <span className={styles.string}>'HR'</span><br />
          {'}'}<br />
        </code>
      </pre>

      <h2>Accessing Elements</h2>
      <p>
        Accessing elements in a dictionary is as simple as using keys. Learn the efficient way to retrieve values from your Python dictionaries.
      </p>
      <p>
        Here is an example of how to access a value using a key:
      </p>
      <pre className={styles.code}>
        <code>
          <span className={styles.comment}># Accessing element using key</span><br />
          <span className={styles.print}>print</span>(employee[<span className={styles.string}>'name'</span>]); <br />
          <span className={styles.comment}># Output: Alice</span><br />
        </code>
      </pre>

      <h2>Modifying a Dictionary</h2>
      <p>
        Dictionaries are mutable, which means you can modify them on the fly. This section teaches you how to add and modify entries in Python dictionaries.
      </p>
      <p>
        Let's modify an existing entry in our dictionary:
      </p>
      <pre className={styles.code}>
        <code>
          <span className={styles.comment}># Modifying an existing entry</span><br />
          employee[<span className={styles.string}>'age'</span>] = <span className={styles.number}>31</span><br />
        </code>
      </pre>

      <h2>Dictionary Comprehensions</h2>
      <p>
        Dictionary comprehensions provide a concise and elegant way to create dictionaries. Master this powerful feature to streamline your code.
      </p>
      <p>
        Here's an example of dictionary comprehension:
      </p>
      <pre className={styles.code}>
        <code>
          <span className={styles.comment}># Dictionary comprehension example</span><br />
          squareDict = {'{'}<br />
          {'    '}<span className={styles.keyword}>x</span>: <span className={styles.keyword}>x</span>**<span className={styles.number}>2</span><br />
          {'    '}<span className={styles.keyword}>for</span> <span className={styles.keyword}>x</span> <span className={styles.keyword}>in</span> <span className={styles.keyword}>range</span>(<span className={styles.number}>10</span>)<br />
          {'}'};<br />
          <span className={styles.print}>print</span>(squareDict)<br />
          <span className={styles.comment}># Output: {'{'}0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81{'}'}</span><br />
        </code>
      </pre>

      <h2>Working with Nested Dictionaries</h2>
      <p>
        Nested dictionaries are useful for representing complex data structures. Learn how to effectively use dictionaries within dictionaries.
      </p>
      <p>
        Below is an example of a nested dictionary, showcasing how you can structure complex data:
      </p>
      <pre className={styles.code}>
        <code>
          <span className={styles.comment}># Nested dictionary example</span><br />
          company = {'{'}<br />
          {'    '}<span className={styles.string}>'employee1'</span>: {'{'}<br />
          {'        '}<span className={styles.string}>'name'</span>: <span className={styles.string}>'Alice'</span>,<br />
          {'        '}<span className={styles.string}>'age'</span>: <span className={styles.number}>30</span><br />
          {'    '}{'}'},<br />
          {'    '}<span className={styles.string}>'employee2'</span>: {'{'}<br />
          {'        '}<span className={styles.string}>'name'</span>: <span className={styles.string}>'Bob'</span>,<br />
          {'        '}<span className={styles.string}>'age'</span>: <span className={styles.number}>25</span><br />
          {'    '}{'}'}<br />
          {'}'}<br />
        </code>
      </pre>

      <h2>Iterating Over Dictionaries</h2>
      <p>
        Iterating over dictionaries in Python is essential for effective data manipulation. You can iterate through keys, values, or both. We'll use the <code>employee</code> dictionary for our examples.
      </p>
      <p>
        First, let's remind ourselves of the <code>employee</code> dictionary structure:
      </p>
      <pre className={styles.code}>
        <code>
          <span className={styles.comment}># Define the employee dictionary</span><br />
          employee = {'{'}
          <span className={styles.string}>'name'</span>: <span className={styles.string}>'Alice'</span>,<br />
          <span className={styles.string}>'age'</span>: <span className={styles.number}>30</span>,<br />
          <span className={styles.string}>'department'</span>: <span className={styles.string}>'HR'</span><br />
          {'}'}<br /><br />
        </code>
      </pre>
      <p>
        Now, let's demonstrate the different ways to iterate over this dictionary:
      </p>
      <pre className={styles.code}>
        <code>
          <span className={styles.comment}># Iterating over keys</span><br />
          <span className={styles.keyword}>for</span> key <span className={styles.keyword}>in</span> employee:<br />
          {'    '}<span className={styles.print}>print</span>(key)<br />
          <span className={styles.comment}># Outputs: name, age, department</span><br /><br />

          <span className={styles.comment}># Iterating over values</span><br />
          <span className={styles.keyword}>for</span> value <span className={styles.keyword}>in</span> employee.values():<br />
          {'    '}<span className={styles.print}>print</span>(value)<br />
          <span className={styles.comment}># Outputs: Alice, 30, HR</span><br /><br />

          <span className={styles.comment}># Iterating over key-value pairs</span><br />
          <span className={styles.keyword}>for</span> key, value <span className={styles.keyword}>in</span> employee.items():<br />
          {'    '}<span className={styles.print}>print</span>({`f'{key}'':' f'{value}'`})<br />

          <span className={styles.comment}># Outputs: name: Alice, age: 30, department: HR</span><br />
        </code>
      </pre>
      <p>
        These methods showcase how to traverse a dictionary, allowing you to access keys, values, or both in a Pythonic way.
      </p>


      <h2>Real-World Applications of Dictionaries</h2>
      <p>
        Explore the practical uses of dictionaries in fields like data analysis, machine learning, and web development. Learn how they are used in JSON data manipulation and API responses.
      </p>
      <p>
        Here is an example of a dictionary used in a web application context:
      </p>
      <pre className={styles.code}>
        <code>
          <span className={styles.comment}># Example use in a web application</span><br />
          userProfile = {'{'}<br />
          {'    '}<span className={styles.string}>'username'</span>: <span className={styles.string}>'alice'</span>,<br />
          {'    '}<span className={styles.string}>'email'</span>: <span className={styles.string}>'alice@example.com'</span>,<br />
          {'    '}<span className={styles.string}>'preferences'</span>: {'{'}<br />
          {'        '}<span className={styles.string}>'theme'</span>: <span className={styles.string}>'dark'</span>,<br />
          {'        '}<span className={styles.string}>'language'</span>: <span className={styles.string}>'EN'</span><br />
          {'    '}{'}'}<br />
          {'}'}<br />
        </code>
      </pre>

      <h2>Dictionary Keys vs. List Indices</h2>
      {/* Dictionary Keys vs. List Indices Section */}

      <h2>Conclusion</h2>
      <p>
        This comprehensive tutorial equips you with a deep understanding of Python dictionaries. From basic operations to advanced applications, you're now ready to leverage dictionaries in your Python projects.
      </p>
    </div>
  );
};

export default PythonDictionaries;
