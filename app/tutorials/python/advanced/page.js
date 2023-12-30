import Link from "next/link";
import Head from "next/head";

export default function PythonAdvancedTutorials() {
    return (
        <>
            <Head>
                <title>Python Advanced Tutorials - Deepen Your Python Expertise</title>
                <meta name="description" content="Advance your Python skills with our Advanced Tutorials. Delve into complex topics such as Bitcoin data analysis, blockchain technology, and neural networks. These tutorials are tailored for those who have mastered the basics and are ready to explore high-level Python applications." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Python Advanced Tutorials</h1>
                <p className="mb-4">Our Advanced Python Courses are designed to take your Python skills to the next level. Explore cutting-edge topics like Bitcoin data analysis, blockchain, and neural networks, with a mix of theoretical understanding and practical applications.</p>
                <p className="font-bold mt-6">Advanced Topics Covered:</p>
                <ul className="list-inside list-disc pl-6 mt-2">
                    <li className="mt-2">In-depth Blockchain Technology Concepts</li>
                    <li className="mt-2">Bitcoin Data Analysis Techniques</li>
                    <li className="mt-2">Building and Understanding Neural Networks</li>
                </ul>

                {/* Row for Advanced Courses */}
                <div className="my-10 grid md:grid-cols-3 gap-6">
                    {/* Bitcoin Data Analysis */}
                    <div className="p-6 bg-yellow-100 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
                        <Link href={"/tutorials/python/advanced/bitcoin-data-analysis"}>
                            <div className="cursor-pointer">
                                <h4 className="text-lg font-bold text-yellow-800 mb-3">Bitcoin Data Analysis</h4>
                                <p className="text-yellow-600 mb-4">Learn how to analyze Bitcoin market data using Python. This course covers data extraction, manipulation, and visualization techniques.</p>
                                <small className="block text-gray-500 mb-4">Duration: 1 Hour | Difficulty: Advanced</small>
                                <div className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                                    Explore Course
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Blockchain Explained */}
                    <div className="p-6 bg-blue-100 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
                        <Link href={"/tutorials/python/advanced/blockchain-explained"}>
                            <div className="cursor-pointer">
                                <h4 className="text-lg font-bold text-blue-800 mb-3">Blockchain Explained</h4>
                                <p className="text-blue-600 mb-4">Dive into the world of blockchain with Python. Understand the principles of blockchain technology and how to implement it in Python.</p>
                                <small className="block text-gray-500 mb-4">Duration: 1 Hour | Difficulty: Advanced</small>
                                <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Learn Blockchain
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Neural Network Explained */}
                    <div className="p-6 bg-pink-100 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
                        <Link href={"/tutorials/python/advanced/neuronal-network-explained"}>
                            <div className="cursor-pointer">
                                <h4 className="text-lg font-bold text-pink-800 mb-3">Neural Network Explained</h4>
                                <p className="text-pink-600 mb-4">Get a comprehensive understanding of neural networks and how to build them in Python. This course covers the theory behind neural networks and practical implementation.</p>
                                <small className="block text-gray-500 mb-4">Duration: 1 Hour | Difficulty: Advanced</small>
                                <div className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                                    Discover Neural Networks
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
