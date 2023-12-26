import React from 'react';
import styles from './style.module.css';
import BeginnerBatchComp from '../beginnerBatch';
import AdvancedBatchComp from '../advancedBatch';

const PythonFundamentals2 = () => {
  return (
    <>
      
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
        <p>Welcome to the second part of the Python Essentials Guide. Building upon the foundations laid in the first part, this guide delves into more advanced concepts like lists, arrays, and objects. This guide is designed for learners who have grasped the basics and are ready to explore further into Python programming.</p>

        <h2>Python Lists: Dynamic and Versatile Data Structures</h2>
        <p>Python lists are dynamic arrays that can store a variety of data types. They are one of the most versatile and commonly used data structures in Python programming. Lists are mutable, meaning you can modify them after their creation, adding or removing elements as needed.</p>

        <h3>Creating and Understanding Lists</h3>
        <p>Creating a list in Python is straightforward and intuitive. Lists are defined by enclosing elements in square brackets, allowing you to store an ordered sequence of items.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Example of creating a list</span>{'\n'}
          <span className={styles.keyword}>my_list</span> = [42, <span className={styles.string}>'Answer'</span>, <span className={styles.number}>3.14</span>, <span className={styles.string}>'Python'</span>]{'\n'}
          <span className={styles.print}>print</span>(my_list)  <span className={styles.comment}># Output: [42, 'Answer', 3.14, 'Python']</span>
        </pre>

        <h3>Accessing and Modifying List Elements</h3>
        <p>Accessing elements in a list is done through indexing. Python lists are zero-indexed, meaning the first element is at index 0. You can also modify the contents of a list by assigning new values to these indices.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Accessing and modifying list elements</span>{'\n'}
          <span className={styles.keyword}>first_element</span> = my_list[0]{'\n'}
          <span className={styles.print}>print</span>(first_element)  <span className={styles.comment}># Output: 42</span>{'\n'}
          my_list[1] = <span className={styles.string}>'Mystery'</span>{'\n'}
          <span className={styles.print}>print</span>(my_list)  <span className={styles.comment}># Output: [42, 'Mystery', 3.14, 'Python']</span>
        </pre>

        <h3>Iterating Over Lists</h3>
        <p>Iterating over lists is a common operation in Python. You can use a for loop to go through each element of the list, executing a block of code for each one.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Looping through a list</span>{'\n'}
          for item in my_list:{'\n'}
          {'    '}<span className={styles.print}>print</span>(item)
        </pre>

        <h2>Python Arrays: Efficient and Homogeneous Data Storage</h2>
        <p>While lists are great for storing a collection of varied data types, arrays in Python are more efficient for storing a large collection of items of the same type. This makes them ideal for numerical data processing where performance is critical.</p>

        <h3>Creating and Using Arrays</h3>
        <p>Python's array module provides an array data structure that is more efficient than lists for certain use cases. The array module requires all array elements to be of the same type, thereby saving memory and improving processing speed.</p>
        <pre className={styles.code}>
          <span className={styles.keyword}>from</span> array <span className={styles.keyword}>import</span> array{'\n'}
          <span className={styles.comment}># Example: Creating an array of integers</span>{'\n'}
          <span className={styles.keyword}>integer_array</span> = array(<span className={styles.string}>'i'</span>, [1, 2, 3, 4, 5]){'\n'}
          <span className={styles.print}>print</span>(integer_array)  <span className={styles.comment}># Output: array('i', [1, 2, 3, 4, 5])</span>
        </pre>

        <h3>Operations on Arrays</h3>
        <p>Operations on arrays are similar to those on lists, but with the added efficiency and restriction that all elements must be of the same type. Arrays are useful in scenarios where you need to perform lots of numerical computations, as they provide a performance boost over lists.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Accessing and modifying array elements</span>{'\n'}
          <span className={styles.print}>print</span>(integer_array[2])  <span className={styles.comment}># Output: 3</span>{'\n'}
          integer_array[3] = 6{'\n'}
          <span className={styles.print}>print</span>(integer_array)  <span className={styles.comment}># Output: array('i', [1, 2, 3, 6, 5])</span>
        </pre>

        <h2>Understanding Python Objects: The Building Blocks of Python Code</h2>
        <p>Objects in Python are more than just data. They combine variables and functions into a single entity. Objects are instances of classes, which can be thought of as blueprints for creating these instances.</p>

        <h3>Defining and Using Classes and Objects</h3>
        <p>A class in Python is like a blueprint for an object. It defines the structure and behavior of an object. An object is an instance of a class, with its own distinct data.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Defining a class and creating objects</span>{'\n'}
          <span className={styles.function}>class</span> <span className={styles.ftext}>Person:</span>{'\n'}
          {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>__init__(</span><span className={styles.arg}>self, name, age</span><span className={styles.ftext}>):</span>{'\n'}
          {'        '}self.name = name{'\n'}
          {'        '}self.age = age{'\n'}
          {'\n'}
          {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>introduce(</span><span className={styles.arg}>self</span><span className={styles.ftext}>):</span>{'\n'}
          {'        '}return <span className={styles.string}>"Hi, I am "</span> + self.name + <span className={styles.string}>" and I am "</span> + str(self.age) + <span className={styles.string}>" years old."</span>{'\n'}
          {'\n'}
          <span className={styles.comment}># Creating instances of the Person class</span>{'\n'}
          <span className={styles.keyword}>alice</span> = Person(<span className={styles.string}>"Alice"</span>, 28){'\n'}
          <span className={styles.keyword}>bob</span> = Person(<span className={styles.string}>"Bob"</span>, 32){'\n'}
          <span className={styles.print}>print</span>(alice.introduce())  <span className={styles.comment}># Output: Hi, I am Alice and I am 28 years old.</span>{'\n'}
          <span className={styles.print}>print</span>(bob.introduce())  <span className={styles.comment}># Output: Hi, I am Bob and I am 32 years old.</span>
        </pre>

        <h3>Exploring Advanced Object-Oriented Concepts</h3>
        <p>Object-oriented programming (OOP) in Python allows for complex data structures and interactions, enabling you to write more modular and scalable code. Understanding OOP principles like inheritance, encapsulation, and polymorphism is crucial for building robust applications.</p>

        <h4>Inheritance in Python</h4>
        <p>Inheritance allows new classes to inherit the attributes and methods of existing classes. This promotes code reusability and a hierarchical structure.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Demonstrating inheritance in Python</span>{'\n'}
          <span className={styles.function}>class</span> <span className={styles.ftext}>Employee(Person):</span>{'\n'}
          {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>__init__(</span><span className={styles.arg}>self, name, age, position</span><span className={styles.ftext}>):</span>{'\n'}
          {'        '}super().__init__(name, age){'\n'}
          {'        '}self.position = position{'\n'}
          {'\n'}
          <span className={styles.comment}># Creating an instance of the Employee class</span>{'\n'}
          <span className={styles.keyword}>employee1</span> = Employee(<span className={styles.string}>"Eve"</span>, 26, <span className={styles.string}>"Engineer"</span>){'\n'}
          <span className={styles.print}>print</span>(employee1.introduce() + <span className={styles.string}>" and I am an "</span> + employee1.position){'\n'}
          <span className={styles.comment}># Output: Hi, I am Eve and I am 26 years old and I am an Engineer</span>
        </pre>

        <h4>Encapsulation in Python</h4>
        <p>Encapsulation involves wrapping data and methods within a single unit. It restricts direct access to some of the object's components, which is a good practice for data integrity.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Using encapsulation in Python</span>{'\n'}
          <span className={styles.function}>class</span> <span className={styles.ftext}>BankAccount:</span>{'\n'}
          {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>__init__(</span><span className={styles.arg}>self, account_number, balance</span><span className={styles.ftext}>):</span>{'\n'}
          {'        '}self.__account_number = account_number  <span className={styles.comment}># Private attribute</span>{'\n'}
          {'        '}self.__balance = balance  <span className={styles.comment}># Private attribute</span>{'\n'}
          {'\n'}
          <span className={styles.comment}># Access methods for private attributes</span>{'\n'}
          {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>get_balance(</span><span className={styles.arg}>self</span><span className={styles.ftext}>):</span>{'\n'}
          {'        '}return self.__balance{'\n'}
          {'\n'}
          <span className={styles.keyword}>account</span> = BankAccount(<span className={styles.string}>"12345"</span>, 1000){'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Account balance: $"</span> + str(account.get_balance())){'\n'}
          <span className={styles.comment}># Output: Account balance: $1000</span>
        </pre>

        <h4>Polymorphism in Python</h4>
        <p>Polymorphism allows methods to have the same name but behave differently based on the object they belong to. This enhances flexibility and readability in code design.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Demonstrating polymorphism in Python</span>{'\n'}
          <span className={styles.function}>class</span> <span className={styles.ftext}>Cat:</span>{'\n'}
          {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>speak(</span><span className={styles.arg}>self</span><span className={styles.ftext}>):</span>{'\n'}
          {'        '}return <span className={styles.string}>"Meow"</span>{'\n'}
          {'\n'}
          <span className={styles.function}>class</span> <span className={styles.ftext}>Dog:</span>{'\n'}
          {'    '}<span className={styles.function}>def</span> <span className={styles.ftext}>speak(</span><span className={styles.arg}>self</span><span className={styles.ftext}>):</span>{'\n'}
          {'        '}return <span className={styles.string}>"Woof"</span>{'\n'}
          {'\n'}
          <span className={styles.comment}># Using polymorphism with different animal instances</span>{'\n'}
          <span className={styles.keyword}>cat</span> = Cat(){'\n'}
          <span className={styles.keyword}>dog</span> = Dog(){'\n'}
          <span className={styles.print}>print</span>(cat.speak())  <span className={styles.comment}># Output: Meow</span>{'\n'}
          <span className={styles.print}>print</span>(dog.speak())  <span className={styles.comment}># Output: Woof</span>
        </pre>

        <h2>Conclusion</h2>
        <p>This guide has explored advanced Python concepts including lists, arrays, and object-oriented programming, equipping you with the knowledge to tackle more complex programming challenges in Python. Remember, practice is key to mastering Python, so keep experimenting and building with these new skills.</p>
        



        </div>
      </>) }

    export default PythonFundamentals2