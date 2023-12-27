import Link from "next/link";
import Head from "next/head";

export default function PythonAdvancedTutorials() {
    return (
        <>
            <Head>
                <title>Python Advanced Tutorials - Real Projects and Self-Learning</title>
                <meta name="description" content="Our Advanced Python Tutorials offer real-world projects to enhance your coding skills. These courses are designed to empower you to start your projects and develop a self-learning approach. Dive deep into Python with practical projects like Bitcoin Data Analysis and more, perfect for intermediate to advanced learners." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Python Advanced Tutorials</h1>
                <p className=" mb-4">Our Python Advanced Courses are centered around hands-on projects, providing a deep dive into practical applications of Python. These courses are crafted for learners who wish to transition from theoretical knowledge to real-world applications. We focus on equipping you with the skills to start your own projects and foster a self-directed learning approach.</p>
                <p className="font-bold  mt-6">Key takeaways:</p>
                <ul className="list-inside list-disc pl-6 mt-2 ">
                    <li className="mt-2">Developing real-world Python applications</li>
                    <li className="mt-2">Gaining confidence to initiate and manage independent projects</li>
                    <li className="mt-2">Learning how to self-learn and adapt to new Python challenges</li>
                </ul>

                {/* Project-Based Tutorials Section */}
                <section className="mt-20">
                    <h2 className="text-2xl font-bold  mb-4">Dive Deeper: Real Projects</h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/3 bg-stone-200 py-8 px-6 border-l-8 border-l-green-200 hover:bg-stone-300 transition duration-300 ease-in-out">
                            <Link href={'/tutorials/python/advanced/bitcoin-data-analysis'}>
                                <div className="cursor-pointer">
                                    <p className="text-lg font-semibold hover:text-green-600">Bitcoin Analysis</p>
                                    <p className="mt-5 text-sm text-gray-600">Engage in a practical project on Bitcoin data analysis, learning complex data manipulation, API interactions, and visualization techniques.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
