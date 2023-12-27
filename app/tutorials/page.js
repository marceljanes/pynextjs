import Link from "next/link";
import Head from "next/head";

export default function Tutorials() {
    return (
        <>
            <Head>
                <title>Explore Our Wide Range of Tutorials</title>
                <meta name="description" content="Discover a world of learning with our diverse range of tutorials. From Python programming to web development, our tutorials are designed to cater to learners at all levels. Start exploring now and unlock your potential!" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Explore Our Tutorials</h1>
                <p className="mb-4">Welcome to our tutorial library, where learning is made easy and engaging. Whether you're a beginner or looking to sharpen your skills, our tutorials cover a broad spectrum of topics including Python, web development, data science, and more. Each tutorial is crafted to provide practical knowledge and hands-on experience.</p>
                <div className="mb-6">
                    <Link href={'/tutorials/python'}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            All Python Tutorials
                        </button>
                    </Link>
                </div>
                
            </div>
        </>
    );
}
