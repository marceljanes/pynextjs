import Link from "next/link";
import Head from "next/head";

export default function PythonTutorials() {
    return (
        <>
            <Head>
                <title>Python Tutorials - From Beginner to Advanced</title>
                <meta name="description" content="Explore our comprehensive Python tutorials, tailored for both beginners and advanced learners. Start with the basics and gradually progress to complex Python concepts, enhancing your programming skills at every step. Our tutorials are designed to provide practical knowledge and real-world coding experience." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto p-6">
                {/* Contextual Information Box */}
                <div className="bg-yellow-100 rounded-xl shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold text-yellow-800 mb-4">Why Learn Python?</h2>
                    <p className="text-yellow-600 mb-6">Python is a versatile language used in various fields, from web development to data science. Learning Python opens doors to numerous opportunities and is an excellent investment in your future.</p>
                </div>

                {/* Beginner Tutorials Section */}
                <div className="bg-blue-100 rounded-xl shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-bold text-blue-800 mb-4">Beginner Python Tutorials</h2>
                    <p className="text-blue-600 mb-6">Start your journey into Python with our beginner-friendly tutorials. Learn the basics and build a strong foundation.</p>
                    <Link href={'/tutorials/python/beginner'}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Explore Beginner Tutorials
                        </button>
                    </Link>
                </div>

                {/* Advanced Tutorials Section */}
                <div className="bg-green-100 rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Advanced Python Tutorials</h2>
                    <p className="text-green-600 mb-6">Enhance your skills with our advanced tutorials. Dive into complex topics and become a Python expert.</p>
                    <Link href={'/tutorials/python/advanced'}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Explore Advanced Tutorials
                        </button>
                    </Link>
                </div>

                {/* Additional Information Box */}
                <div className="bg-purple-100 rounded-xl shadow-lg p-6 mt-6">
                    <h2 className="text-2xl font-bold text-purple-800 mb-4">Learning Path</h2>
                    <p className="text-purple-600 mb-6">Our learning path is designed to guide you through every step of your Python learning journey. Whether you're starting from scratch or looking to specialize, we have the resources to support your growth.</p>
                </div>

                {/* Testimonial Box */}
                <div className="bg-red-100 rounded-xl shadow-lg p-6 mt-6">
                    <h2 className="text-2xl font-bold text-red-800 mb-4">What Our Learners Say</h2>
                    <p className="text-red-600 mb-6">"These Python tutorials transformed the way I approach programming. The lessons are clear, concise, and applicable to real-world scenarios." - A satisfied learner</p>
                </div>
            </div>
        </>
    );
}
