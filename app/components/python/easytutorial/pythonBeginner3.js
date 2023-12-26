import React from 'react';
import styles from './style.module.css'; // Ensure this points to the correct CSS module file
import BeginnerBatchComp from '../beginnerBatch';
import AdvancedBatchComp from '../advancedBatch';

const PythonFundamentals3 = () => {
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
      
        <h1>Python Programming for Beginners: Learn Python Basics Part II</h1>
      <p>Welcome to Part 3 of our Python Essentials Guide. In this segment, we delve into sophisticated Python programming concepts. These advanced topics, including list comprehensions, decorators, error handling, and file operations, are pivotal for enhancing your Python expertise. Understanding these intricate concepts will empower you to write more efficient, scalable, and maintainable code, thereby elevating your programming acumen to new heights.</p>

      <h2>List Comprehensions: Elegant and Efficient Python Lists</h2>
      <p>List comprehensions offer a succinct and expressive way to create and manipulate lists in Python. They transform complex loops and logic into concise, readable one-liners. By using list comprehensions, you can efficiently perform operations like filtering data, applying functions, or constructing new lists from existing ones. This approach not only simplifies your code but also enhances its performance.</p>
      <pre className={styles.code}>
        <span className={styles.comment}># Demonstrating list comprehension</span>{'\n'}
        squares = [<span className={styles.keyword}>x</span> * <span className={styles.keyword}>x</span> for <span className={styles.keyword}>x</span> in <span className={styles.keyword}>range</span>(<span className={styles.number}>10</span>)]{'\n'}
        <span className={styles.print}>print</span>(squares)  <span className={styles.comment}># Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</span>
      </pre>

      <h2>Decorators: Enhancing Functions in Python</h2>
      <p>Decorators are a unique feature in Python that allows programmers to modify the behavior of functions or methods dynamically. This is achieved without altering the original function's code, thus adhering to the principle of code reusability. Decorators are commonly used in logging, authentication, or enhancing existing functions with additional capabilities. Understanding decorators is key to writing more modular and cleaner Python code.</p>
      <pre className={styles.code}>
        <span className={styles.comment}># Implementing a basic decorator</span>{'\n'}
        def <span className={styles.function}>my_decorator</span>(<span className={styles.farg}>func</span>):{'\n'}
        {'    '}def <span className={styles.function}>wrapper</span>():{'\n'}
        {'        '}<span className={styles.print}>print</span>(<span className={styles.string}>"Something before the function is called."</span>){'\n'}
        {'        '}<span className={styles.keyword}>func</span>(){'\n'}
        {'        '}<span className={styles.print}>print</span>(<span className={styles.string}>"Something after the function is called."</span>){'\n'}
        {'    '}return <span className={styles.keyword}>wrapper</span>{'\n'}
        {'\n'}
        @<span className={styles.function}>my_decorator</span>{'\n'}
        def <span className={styles.function}>say_hello</span>():{'\n'}
        {'    '}<span className={styles.print}>print</span>(<span className={styles.string}>"Hello!"</span>){'\n'}
        {'\n'}
        <span className={styles.keyword}>say_hello</span>(){'\n'}
        <span className={styles.comment}># Output: Something before the function is called. Hello! Something after the function is called.</span>
      </pre>

      <h2>Error and Exception Handling: Writing Robust Python Code</h2>
      <p>Effective error and exception handling in Python is fundamental to building reliable and fault-tolerant applications. It involves anticipating and managing potential errors in a program, ensuring smooth execution and providing meaningful feedback to users. Mastering error handling techniques is crucial for preventing your programs from crashing and for handling unexpected situations gracefully.</p>
      <pre className={styles.code}>
        <span className={styles.comment}># Example of error handling in Python</span>{'\n'}
        try:{'\n'}
        {'    '}<span className={styles.keyword}>result</span> = <span className={styles.number}>10</span> / <span className={styles.number}>0</span>{'\n'}
        except <span className={styles.keyword}>ZeroDivisionError</span>:{'\n'}
        {'    '}<span className={styles.print}>print</span>(<span className={styles.string}>"Divided by zero!"</span>){'\n'}
        finally:{'\n'}
        {'    '}<span className={styles.print}>print</span>(<span className={styles.string}>"This always executes."</span>)
      </pre>

      <h2>File Operations: Managing Data in Python</h2>
      <p>File operations are integral to many Python applications, whether it's reading data from files, writing data to files, or manipulating file contents. Python simplifies file operations through its built-in functions, allowing for easy handling of various file types. This section provides insights into reading and writing files, which is essential for any Python programmer dealing with data storage and retrieval.</p>
      <pre className={styles.code}>
        <span className={styles.comment}># Demonstrating file read and write operations</span>{'\n'}
        with open(<span className={styles.string}>'example.txt'</span>, <span className={styles.string}>'w'</span>) as <span className={styles.keyword}>file</span>:{'\n'}
        {'    '}<span className={styles.keyword}>file</span>.write(<span className={styles.string}>'Hello, Python!'</span>){'\n'}
        {'\n'}
        with open(<span className={styles.string}>'example.txt'</span>, <span className={styles.string}>'r'</span>) as <span className={styles.keyword}>file</span>:{'\n'}
        {'    '}<span className={styles.keyword}>content</span> = <span className={styles.keyword}>file</span>.read(){'\n'}
        {'    '}<span className={styles.print}>print</span>(<span className={styles.keyword}>content</span>)
      </pre>

      <h2>Generators: Streamlining Large Data Processing in Python</h2>
      <p>Generators in Python are a powerful feature for managing memory efficiently, particularly when dealing with large data sets. They allow for generating items on the fly, without the need to store the entire collection in memory. This is particularly beneficial when processing large data sets, as it significantly reduces memory usage. Understanding and utilizing generators can greatly enhance the performance of your Python applications.</p>
      <pre className={styles.code}>
        <span className={styles.comment}># Creating a Fibonacci series generator</span>{'\n'}
        def <span className={styles.function}>fibonacci</span>(<span className={styles.farg}>n</span>):{'\n'}
        {'    '}<span className={styles.keyword}>a</span>, <span className={styles.keyword}>b</span> = <span className={styles.number}>0</span>, <span className={styles.number}>1</span>{'\n'}
        {'    '}while <span className={styles.keyword}>a</span> &lt; <span className={styles.keyword}>n</span>:{'\n'}
        {'        '}yield <span className={styles.keyword}>a</span>{'\n'}
        {'        '}<span className={styles.keyword}>a</span>, <span className={styles.keyword}>b</span> = <span className={styles.keyword}>b</span>, <span className={styles.keyword}>a</span> + <span className={styles.keyword}>b</span>{'\n'}
        {'\n'}
        for <span className={styles.keyword}>number</span> in <span className={styles.function}>fibonacci</span>(<span className={styles.number}>100</span>):{'\n'}
        {'    '}<span className={styles.print}>print</span>(<span className={styles.keyword}>number</span>)
      </pre>

      <h2>Lambda Functions</h2>
      <div>
        <p>Lambda functions in Python, also known as anonymous functions, are concise, one-line functions defined without a name. They are particularly useful when you need a small function for a short period and are commonly used with functions like map(), filter(), and reduce(). Lambda functions can accept any number of arguments, but can only have one expression. Their syntax is simple and focused, making them a handy tool for simple operations that need to be performed quickly and inline. Understanding lambda functions is crucial for writing cleaner and more efficient Python code, particularly in data manipulation and functional programming contexts.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Example of a lambda function</span>{'\n'}
          <span className={styles.keyword}>adder</span> = <span className={styles.function}>lambda</span> <span className={styles.farg}>x</span>, <span className={styles.farg}>y</span>: <span className={styles.keyword}>x</span> + <span className={styles.keyword}>y</span>{'\n'}
          <span className={styles.print}>print</span>(<span className={styles.keyword}>adder</span>(<span className={styles.number}>5</span>, <span className={styles.number}>10</span>))  <span className={styles.comment}># Output: 15</span>
        </pre>
      </div>
    
      <h2>Conclusion</h2>
      <div>
        <p>This guide has taken you through some of Python's advanced concepts, enhancing your understanding of the language and its capabilities. By mastering these topics, you're well-equipped to tackle more complex programming challenges and take advantage of Python's full potential. Remember, the key to proficiency in Python, as with any programming language, lies in practice and continuous learning.</p>
      </div>
    </div>
  );
};

export default PythonFundamentals3;
