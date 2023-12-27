import styles from './style.module.css';
import BeginnerBatchComp from '../beginnerBatch';
import Link from 'next/link';




const PythonFundamentals = () => {
  return (
    <>
     
      <div className={styles.container}>
        <BeginnerBatchComp />
        <h1>Python Programming for Beginners: Learn Python Basics Part I</h1>
        <p>Delve into the world of Python programming, an excellent language for beginners and experts alike. Known for its simplicity and versatility, Python is a go-to for web development, data analysis, artificial intelligence, and more. This comprehensive guide covers all you need to kickstart your Python journey, from basic syntax to complex concepts.</p>

        <h2>Python Basics: Your First Step into Coding</h2>
        <p>Dive into Python's fundamental concepts. Learn how to declare variables, understand data types, and utilize basic operators. This section lays the groundwork for your Python coding skills.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Introduction to variables, data types, and basic operators</span>{'\n'}
          <span className={styles.keyword}>number</span> = <span className={styles.number}>42</span>  <span className={styles.comment}># An integer assignment</span>{'\n'}
          <span className={styles.keyword}>pi_value</span> = <span className={styles.number}>3.1415</span>  <span className={styles.comment}># A floating point</span>{'\n'}
          <span className={styles.keyword}>name</span> = <span className={styles.string}>"Python"</span>  <span className={styles.comment}># A string</span>{'\n'}
          {'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Integer: "</span>, number){'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Float: "</span>, pi_value){'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"String: "</span>, name){'\n'}
          {'\n'}
          <span className={styles.comment}># Demonstrating basic arithmetic operations</span>{'\n'}
          <span className={styles.keyword}>sum</span> = <span className={styles.number}>7</span> + <span className={styles.number}>3</span>  <span className={styles.comment}># Addition</span>{'\n'}
          <span className={styles.keyword}>difference</span> = <span className={styles.number}>10</span> - <span className={styles.number}>4</span>  <span className={styles.comment}># Subtraction</span>{'\n'}
          <span className={styles.keyword}>product</span> = <span className={styles.number}>5</span> * <span className={styles.number}>2</span>  <span className={styles.comment}># Multiplication</span>{'\n'}
          <span className={styles.keyword}>quotient</span> = <span className={styles.number}>20</span> / <span className={styles.number}>4</span>  <span className={styles.comment}># Division</span>{'\n'}
          {'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Sum: "</span>, sum){'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Difference: "</span>, difference){'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Product: "</span>, product){'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Quotient: "</span>, quotient)
        </pre>

        <h2>Control Structures: Directing the Flow of Your Program</h2>
        <p>Control structures like 'if' statements, 'for' loops, and 'while' loops are vital in Python programming. They help in decision making and controlling the flow of execution based on certain conditions.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Understanding if statements, for loops, and while loops</span>{'\n'}
          <span className={styles.keyword}>if</span> number &gt; <span className={styles.number}>20</span>:{'\n'}
          {'    '}<span className={styles.print}>print</span>(<span className={styles.string}>"Number is greater than 20"</span>){'\n'}
          {'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Counting to 5 using a for loop:"</span>){'\n'}
          <span className={styles.keyword}>for</span> i <span className={styles.keyword}>in</span> <span className={styles.keyword}>range</span>(<span className={styles.number}>1</span>, <span className={styles.number}>6</span>):{'\n'}
          {'    '}<span className={styles.print}>print</span>(i){'\n'}
          {'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Counting to 5 using a while loop:"</span>){'\n'}
          <span className={styles.keyword}>counter</span> = <span className={styles.number}>1</span>{'\n'}
          <span className={styles.keyword}>while</span> counter &lt;= <span className={styles.number}>5</span>:{'\n'}
          {'    '}<span className={styles.print}>print</span>(counter){'\n'}
          {'    '}counter += <span className={styles.number}>1</span>
        </pre>

        <h2>Working with Lists in Python</h2>
        <p>Lists in Python are versatile and ordered collections of elements. They can contain items of different types, including other lists. Lists are mutable, meaning their contents can be changed after creation.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Creating and manipulating a list</span>{'\n'}
          <span className={styles.keyword}>fruit_list</span> = [<span className={styles.string}>"apple"</span>, <span className={styles.string}>"banana"</span>, <span className={styles.string}>"cherry"</span>]  <span className={styles.comment}># A list of fruits</span>{'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Original list: "</span>, fruit_list){'\n'}
          fruit_list.append(<span className={styles.string}>"orange"</span>)  <span className={styles.comment}># Adding an element to the list</span>{'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"List after addition: "</span>, fruit_list){'\n'}
          {'\n'}
          <span className={styles.comment}># Accessing elements from the list</span>{'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Second element: "</span>, fruit_list[<span className={styles.number}>1</span>])  <span className={styles.comment}># Accessing by index</span>{'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Last element: "</span>, fruit_list[-<span className={styles.number}>1</span>])  <span className={styles.comment}># Negative indexing</span>
        </pre>

        <h2>Understanding Dictionaries in Python</h2>
        <p>Dictionaries in Python are collections of key-value pairs. They are unordered and can be modified after creation. Dictionaries are ideal for storing data that can be uniquely identified with a key.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Creating and modifying a dictionary</span>{'\n'}
          <span className={styles.keyword}>person_dict</span> = {'{'}<span className={styles.string}>"name"</span>: <span className={styles.string}>"Alice"</span>, <span className={styles.string}>"age"</span>: <span className={styles.number}>25</span>{'}'}  <span className={styles.comment}># A dictionary with personal information</span>{'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Original dictionary: "</span>, person_dict){'\n'}
          person_dict[<span className={styles.string}>"email"</span>] = <span className={styles.string}>"alice@example.com"</span>  <span className={styles.comment}># Adding a new key-value pair</span>{'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Updated dictionary: "</span>, person_dict){'\n'}
          {'\n'}
          <span className={styles.comment}># Accessing elements in a dictionary</span>{'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Name: "</span>, person_dict[<span className={styles.string}>"name"</span>])  <span className={styles.comment}># Accessing by key</span>{'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Age: "</span>, person_dict.get(<span className={styles.string}>"age"</span>, <span className={styles.string}>"Not found"</span>))  <span className={styles.comment}># Safe access with .get()</span>
        </pre>

        <h2>Functions: Building Blocks of Reusable Code</h2>
        <p>Functions in Python are defined to perform a specific task and can be reused throughout your programs. They enhance the modularity and readability of your code.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Creating and utilizing functions for reusable code</span>{'\n'}
          <span className={styles.function}>def</span> <span className={styles.ftext}>display_message(</span><span className={styles.arg}>message</span><span className={styles.ftext}>):</span>{'\n'}
          {'    '}<span className={styles.print}>print</span>(<span className={styles.string}>"Message: "</span> + message){'\n'}
          {'\n'}
          <span className={styles.print}>print</span>(<span className={styles.string}>"Calling a function to display a message."</span>){'\n'}
          display_message(<span className={styles.string}>"Hello from Python"</span>)
        </pre>

        

        <h3>Embark on Your Python Programming Journey</h3>
        <p>Python is a language of endless opportunities. Start with these fundamentals and continue exploring more complex topics and projects. Keep practicing, and you'll soon become proficient in Python programming. Enjoy your coding adventure!</p>
        {/* Row with two boxes for Course 1 and Course 2 */}
      <div className="my-10 flex flex-col md:flex-row gap-4">
            {/* Box for Course 2 */}
            <div className="flex-1 p-6 bg-green-100 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-green-800 mb-3">Python Fundamentals Course 2</h4>
                <p className="text-green-600 mb-4">Delve deeper into Python with lists, arrays, and basic object-oriented programming. Enhance your understanding of Python's structure and functionality.</p>
                <Link href={"/tutorials/python/beginner/fundamentals-part-two"}>
                    <div className="cursor-pointer bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        <p>Start Course 2</p>
                    </div>
                </Link>
            </div>

            {/* Box for Course 3 */}
            <div className="flex-1 p-6 bg-purple-100 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-purple-800 mb-3">Python Fundamentals Course 3</h4>
                <p className="text-purple-600 mb-4">Advance your skills with topics like list comprehensions, decorators, error handling, and file operations. This course prepares you for complex programming challenges.</p>
                <Link href={"/tutorials/python/beginner/fundamentals-part-three"}>
                    <div className="cursor-pointer bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        <p>Start Course 3</p>
                    </div>
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default PythonFundamentals;
