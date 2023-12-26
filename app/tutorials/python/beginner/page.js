import Link from "next/link"
export default function PythonBeginnerTutorials() {

    return (
       <div>
         <h1 className="font-bold text-lg mb-5">Python Beginner Tutorials</h1>
         <p>Our Python Basic Courses offer a comprehensive introduction to essential Python topics. Designed for beginners and intermediate learners, the curriculum covers fundamental data structures, operations, lists, arrays, dictionaries, and object-oriented programming.</p>
         <p className="font-bold mt-5">What you will learn:</p>
         <ul className="list-inside list-disc">
            <li className="ml-5 mt-5">Basic Syntax and Structure of Python</li>
            <li className="ml-5">You write your first little programs</li>
            <li className="ml-5">After all three courses you have the tools to deepen your knowledge in your topic of choice</li>
         </ul>
         {/************** SECTION OF FIRST THREE TUTORIALS*****************/}
         <section className="mt-10">
                    <h2 className="mb-5 font-bold">Python Fundamentals</h2>
                    <div className="flex flex-col md:flex-row md:space-x-2">

                        <div className="w-full md:w-1/3 bg-stone-200 mt-2 py-8 px-6 border-l-8 border-l-fuchsia-500 hover:bg-stone-300">
                    
                            <Link href={'/tutorials/python/beginner/fundamentals-part-one'}>Python Fundamentals Part I</Link>
                            <p className="mt-5 line-clamp-3 text-xs opacity-50">Data Types, Control Structures and Lists</p>

                            
                        </div>
                    
                        <div className="w-full md:w-1/3 bg-stone-200 mt-2 py-8 px-6 border-l-8 border-l-fuchsia-500 hover:bg-stone-300">
                    
                            <Link href={'/tutorials/python/beginner/fundamentals-part-two'}>Python Fundamentals Part II</Link>
                            <p className="mt-5 line-clamp-3 text-xs opacity-50">Arrays, Objects and Classes</p>
                            
                        </div>
                        
                        <div className="w-full md:w-1/3 bg-stone-200 mt-2  py-8 px-6 border-l-8 border-l-fuchsia-500 hover:bg-stone-300">
                    
                            <Link href={'/tutorials/python/beginner/fundamentals-part-three'}>Python Fundamentals Part III</Link>
                            <p className="mt-5 line-clamp-3 text-xs opacity-50">Generators, Try and Except, Error-Handling</p>
                            
                        </div>
                    

                    </div>
         </section>
         {/************** END SECTION OF FIRST THREE TUTORIALS*****************/}
         {/************** SECTION OF SECOND THREE TUTORIALS*****************/}
         <section className="mt-20">
                    <h2 className="mb-5 font-bold">Dive deeper: Python Tools you need</h2>
                    <div className="flex flex-col md:flex-row md:space-x-2">

                        <div className="w-full md:w-1/3 bg-stone-200 mt-2 py-8 px-6 border-l-8 border-l-green-200 hover:bg-stone-300">
                    
                            <Link href={'/tutorials/python/beginner/dictionaries-explained'}>Python Dictionaries explained</Link>
                            <p className="mt-5 line-clamp-3 text-xs opacity-50">Data Types, Control Structures and Lists</p>

                            
                        </div>
                    
                        
                    

                    </div>
         </section>
         {/************** END SECTION OF SECOND THREE TUTORIALS*****************/}
            
        
        </div>
    )
}