import PythonFundamentals from "@/app/components/python/easytutorial/pythonBeginner1"
import Head from "next/head";




export default function FundamentalsPartOne() {

    return (
        <>
            <Head>
                <title>
                 Python Programming for Beginners: Learn Python Basics Part I
                </title>
                <meta name="description" content="Comprehensive Python tutorial for beginners. Learn Python basics, including data structures, functions, and more. Start here your Python Coding Career" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                
            <PythonFundamentals />
        
        </>
       
    )
}