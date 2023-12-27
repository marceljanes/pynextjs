import Link from "next/link";
import Head from "next/head";

export default function PythonBeginnerTutorials() {
    return (
        <>

            <Head>
                <title>Python Beginner Tutorials - Start Your Python Journey</title>
                <meta name="description" content="Embark on your Python programming journey with our Beginner Tutorials. Covering fundamentals like syntax, structures, and basic operations, these courses are perfect for those starting out or seeking to strengthen their Python foundations. Explore topics like lists, arrays, dictionaries, and dive into object-oriented programming with easy-to-follow lessons." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Python Beginner Tutorials</h1>
            <p className=" mb-4">Our Python Basic Courses offer a comprehensive introduction to essential Python topics. Designed for beginners and intermediate learners, the curriculum covers fundamental data structures, operations, lists, arrays, dictionaries, and object-oriented programming.</p>
            <p className="font-bold mt-6">What you will learn:</p>
            <ul className="list-inside list-disc pl-6 mt-2 ">
                <li className="mt-2">Basic Syntax and Structure of Python</li>
                <li className="mt-2">Writing your first little programs</li>
                <li className="mt-2">Gaining the tools to deepen your knowledge in your topic of choice</li>
            </ul>

            {/* First Three Tutorials Section */}
            <section className="mt-10">
                <h2 className="text-2xl font-bold  mb-4">Python Fundamentals</h2>
                <div className="flex flex-col md:flex-row gap-4">

                    {['fundamentals-part-one', 'fundamentals-part-two', 'fundamentals-part-three'].map((part, idx) => (
                        <div key={idx} className="w-full md:w-1/3 bg-stone-200 py-8 px-6 border-l-8 border-l-fuchsia-500 hover:bg-stone-300 transition duration-300 ease-in-out">
                            <Link href={`/tutorials/python/beginner/${part}`}>
                                <div className="cursor-pointer">
                                    <p className="text-lg font-semibold hover:text-fuchsia-600">Fundamentals Part {idx + 1}</p>                                    
                                </div>
                            </Link>
                        </div>
                    ))}
                    
                </div>
            </section>

            {/* Second Three Tutorials Section */}
            <section className="mt-20">
                <h2 className="text-2xl font-bold  mb-4">Dive Deeper: Python Tools You Need</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/3 bg-stone-200 py-8 px-6 border-l-8 border-l-green-200 hover:bg-stone-300 transition duration-300 ease-in-out">
                        <Link href={'/tutorials/python/beginner/dictionaries-explained'}>
                            <div className="cursor-pointer">
                                <p className="text-lg font-semibold hover:text-green-600">Dictionaries Explained</p>
                                <p className="mt-5 text-sm text-gray-600">Detailed insights into Python dictionaries</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
        
        
        
        </>
        
    );
}
