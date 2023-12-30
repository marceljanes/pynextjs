import WebScrapingTutorial from "@/app/components/python/easytutorial/pythonWebScraping";
import Head from "next/head";




export default function WebScrapy() {

    return (
        <>
            <Head>
                <title>
                 Beautiful Soup and Webscraping with Python explained
                </title>
                <meta name="description" content="Comprehensive Python tutorial for beginners. Learn Python basics, including data structures, functions, and more. Start here your Python Coding Career" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
                
            <WebScrapingTutorial />
        
        </>
       
    )
}