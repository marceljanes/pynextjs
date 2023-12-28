import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Head>
        <title>Learn Python: From Basics to Advanced</title>
        <meta name="description" content="Explore Python programming from the fundamentals to advanced topics like AI, machine learning, web development, and more. Start your coding journey with our comprehensive tutorials and courses." />
        <meta name="keywords" content="Python, Programming, Coding, Machine Learning, AI, Web Development, Data Analysis, Automation, Tutorials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section className="mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Enhance Your Python Skills</h2>
        <p className="mb-6">Join our expertly crafted Python tutorials, designed for learners at all levels. Our courses cover essential Python topics, offering practical knowledge and hands-on coding experience.</p>
        

      </section>

      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-100 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Beginner Python Tutorials</h3>
            <p className="mb-4">Kickstart your Python journey with beginner-friendly lessons.</p>
            <Link href={'/tutorials/python/beginner'}>
              <span className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Explore Beginner Tutorials
              </span>
            </Link>
          </div>

          <div className="bg-green-100 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-3">Advanced Python Tutorials</h3>
            <p className="mb-4">Elevate your skills with advanced Python topics.</p>
            <Link href={'/tutorials/python/advanced'}>
              <span className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Explore Advanced Tutorials
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-200 py-8 mt-10">
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 p-6">
            <Image width={500} height={500} src="/screen1.png" alt="Python Programming" className="w-full rounded" />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-3">Advance Your Python Skills</h2>
            <ul className="list-disc">
              <li className="mb-2">Comprehensive tutorials for all skill levels.</li>
              <li className="mb-2">Interactive coding sessions for hands-on learning.</li>
              <li className="mb-2">Apply Python skills in real-world projects.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
