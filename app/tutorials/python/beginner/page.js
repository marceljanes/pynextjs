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
                <p className="mb-4">Our Python Basic Courses offer a comprehensive introduction to essential Python topics. Designed for beginners and intermediate learners, the curriculum covers fundamental data structures, operations, lists, arrays, dictionaries, and object-oriented programming.</p>
                <p className="font-bold mt-6">What you will learn:</p>
                <ul className="list-inside list-disc pl-6 mt-2">
                    <li className="mt-2">Basic Syntax and Structure of Python</li>
                    <li className="mt-2">Writing your first little programs</li>
                    <li className="mt-2">Gaining the tools to deepen your knowledge in your topic of choice</li>
                </ul>

                {/* Row for Fundamentals Courses 1-3 */}
                <div className="my-10 grid md:grid-cols-3 gap-6">
                    {/* Course 1 */}
                    <div className="p-6 bg-blue-100 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
                        <Link href={"/tutorials/python/beginner/fundamentals-part-one"}>
                            <div className="cursor-pointer">
                                <h4 className="text-xl font-bold text-blue-800 mb-3">Python Fundamentals Course 1</h4>
                                <p className="text-blue-600 mb-4">Begin your Python journey with basic syntax, data types, and operators. Ideal for starters.</p>
                                <small className="block text-gray-500 mb-4">Duration: 30 Minutes | Difficulty: Beginner</small>
                                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Start Course 1
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Course 2 */}
                    <div className="p-6 bg-green-100 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
                        <Link href={"/tutorials/python/beginner/fundamentals-part-two"}>
                            <div className="cursor-pointer">
                                <h4 className="text-xl font-bold text-green-800 mb-3">Python Fundamentals Course 2</h4>
                                <p className="text-green-600 mb-4">Explore lists, arrays, and basic object-oriented programming concepts.</p>
                                <small className="block text-gray-500 mb-4">Duration: 30 Minutes | Difficulty: Beginner</small>
                                <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                    Start Course 2
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Course 3 */}
                    <div className="p-6 bg-purple-100 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
                        <Link href={"/tutorials/python/beginner/fundamentals-part-three"}>
                            <div className="cursor-pointer">
                                <h4 className="text-xl font-bold text-purple-800 mb-3">Python Fundamentals Course 3</h4>
                                <p className="text-purple-600 mb-4">Advance your skills with topics like error handling and file operations.</p>
                                <small className="block text-gray-500 mb-4">Duration: 30 Minutes | Difficulty: Beginner/Advanced</small>
                                <div className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                                    Start Course 3
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Dictionaries Explained */}
                    <div className="p-6 bg-stone-200 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
                        <Link href={'/tutorials/python/beginner/dictionaries-explained'}>
                            <div className="cursor-pointer">
                                <h4 className="text-xl font-bold text-stone-800 mb-3">Dictionaries Explained</h4>
                                <p className="text-stone-600 mb-4">Detailed insights into Python dictionaries.</p>
                                <small className="block text-gray-500">Duration: 30 Minutes | Difficulty: Beginner/Advanced</small>
                                <div className="bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded">
                                    Learn About Dictionaries
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
