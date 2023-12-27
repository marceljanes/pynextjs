import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import PythonBeginnerComp2 from './components/python/easytutorial/pythonBeginner2'
import PythonBeginnerComp1 from './components/python/easytutorial/pythonBeginner1'
import PythonBeginnerComp3 from './components/python/easytutorial/pythonBeginner3'
import PythonDictionaries from './components/python/easytutorial/pythonDictionaries'

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
    <Head>
      <title>Learn Python: From Basics to Advanced</title>
      <meta name="description" content="Explore Python programming from the fundamentals to advanced topics like AI, machine learning, web development, and more. Start your coding journey with our comprehensive tutorials and courses." />
      <meta name="keywords" content="Python, Programming, Coding, Machine Learning, AI, Web Development, Data Analysis, Automation, Tutorials" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <section className="mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Improve your Python Skills with our Tutorials. Why wait?</h2>
      <p className="mb-4">Dive into the world of Python with our expertly crafted tutorials. Perfect for learners at all levels, our resources are designed to make Python programming accessible, fun, and highly rewarding.Our tutorials cover a wide range of Python topics, from basic syntax to advanced concepts. Each lesson is filled with real-world examples, interactive exercises, and tips from seasoned developers. Unlock your coding potential and join a community of enthusiastic Python learners.</p>
      <div className="relative w-full mt-10 h-96 flex justify-center items-center">
        <div className="rounded-full h-96 w-96 bg-green-200 flex flex-wrap items-center justify-center shadow-lg">
          <span className="text-2xl font-bold absolute">Python</span>
          <div className="m-2 bg-white px-4 py-1 rounded-full shadow">Data Analysis</div>
          <div className="m-2 bg-white px-4 py-1 rounded-full shadow">Web Development</div>
          <div className="m-2 bg-white px-4 py-1 rounded-full shadow">Automation</div>
          <div className="m-2 bg-white px-4 py-1 rounded-full shadow">AI</div>
        </div>
        <div className="absolute top-10 left-1/4 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md">Machine Learning</div>
        <div className="absolute top-20 right-1/4 transform translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md">REST API</div>
        <div className="absolute bottom-20 left-1/4 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md">Web Scraping</div>
        <div className="absolute bottom-10 right-1/4 transform translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md">Neuronal Networks</div>
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md">Business Consulting</div>
        <div className="absolute bottom-5 right-1/2 transform translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-md">Scientific Computing</div>
      </div>
    </section>
    <h2 className="text-2xl font-bold mb-3 mt-10">Let's start with our Tutorials</h2>
    {/* Python Tutorials Section */}
    <section className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Beginner Tutorials */}
          <div className="bg-blue-100 rounded-xl shadow-md p-4 flex-1 max-w-md">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Beginner Python Tutorials</h3>
              <p className="text-blue-600 mb-4">Start your journey into Python with our beginner-friendly tutorials. Learn the basics and build a strong foundation.</p>
              <Link href={'/tutorials/python/beginner'}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Explore Beginner Tutorials
                  </button>
              </Link>
          </div>

          {/* Advanced Tutorials */}
          <div className="bg-green-100 rounded-xl shadow-md p-4 flex-1 max-w-md">
              <h3 className="text-xl font-bold text-green-800 mb-3">Advanced Python Tutorials</h3>
              <p className="text-green-600 mb-4">Enhance your skills with our advanced tutorials. Dive into complex topics and become a Python expert. Find your profession</p>
              <Link href={'/tutorials/python/advanced'}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      Explore Advanced Tutorials
                  </button>
              </Link>
          </div>
        </div>
      </section>



    <section className="mt-10 p-4">
      <h2 className="text-2xl font-bold mb-3">Advantages of Learning Python</h2>
      <p className="mb-2">In 2024, learning is pivotal for fields like data analysis, ChatGPT, business consulting, and social sciences. For data analysis, staying updated with new technologies is crucial for interpreting complex data sets effectively. With ChatGPT and similar AI technologies, understanding their evolving nature is essential for their ethical and efficient application. In business consulting, learning about current market trends and innovative strategies is key to offering relevant, impactful advice. In social sciences, continuous learning helps in understanding and addressing modern societal challenges. Furthermore, learning as a form of personal enrichment and fun stimulates creativity and lifelong curiosity. This holistic approach to learning in 2024 fosters interdisciplinary innovation and a more informed society..</p>
    </section>

    <section className="bg-stone-200 py-8 mt-10">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/2 p-6">
          <Image width={500} height={500} src="/screen1.png" alt="Python Programming" className="w-full rounded" />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-3">Improve Your Skills</h2>
          <ul className="list-disc">
            <li className="mb-2">Tutorials for all skill levels, from beginners to experienced coders.</li>
            <li className="mb-2">Guided coding sessions for practical learning.</li>
            <li className="mb-2">Learn the basics and apply them in real-life projects.</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  )
}
