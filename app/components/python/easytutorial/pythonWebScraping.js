import styles from './style.module.css';
import BeginnerBatchComp from '../beginnerBatch';
import Link from 'next/link';

const AdvancedWebScrapingTutorial = () => {

    const jobListings = [
        { title: "Python AI Developer", company: "CORE AI", location: "Stratford-upon-Avon, Warwickshire, United Kingdom" },
        { title: "Senior RPA Python developer", company: "Dyad AI", location: "London, UK" },
        { title: "Principal Software Engineer", company: "Teamworks", location: "Remote, Kansas, United States" },
        { title: "Michigan Online, Software Engineer", company: "University of Michigan", location: "Ann Arbor, Michigan, USA" },
        { title: "Full Stack Python Developer", company: "bnbprofits", location: "Denpasar, Bali, Indonesia" },
        { title: "Senior Python Architect & Tech Lead", company: "Six Feet Up", location: "100% Remote, EST / CST, United States" },
        { title: "Senior Software Engineer (Open Source / Python)", company: "dltHub", location: "Berlin, Germany" },
        { title: "Python Backend Developer", company: "Rapidor", location: "Cochin, Kerala, India" },
        // ... other job listings ...
      ];
    
      
  return (
    <>
      <div className={styles.container}>
        <BeginnerBatchComp />
        <h1>Mastering Web Scraping with Python: A Deep Dive into Data Extraction Techniques</h1>
        <p>Advance your skills in web scraping with this comprehensive tutorial. We'll be extracting detailed job listings from a real-world example, leveraging Python and BeautifulSoup's robust capabilities.</p>

        <h2>Understanding Complex Web Structures</h2>
        <p>Complex web pages often have nested and intricate structures. Understanding these is key to effective scraping. We'll analyze the Python job board's structure to plan our scraping strategy.</p>

        <h2>Python Environment Setup</h2>
        <p>Python, along with Requests and BeautifulSoup, forms the backbone of our scraping tool. Let's ensure they're installed and set up correctly.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Import necessary libraries</span>{'\n'}
          import requests{'\n'}
          from bs4 import BeautifulSoup
        </pre>

        <h2>Fetching Web Page Content</h2>
        <p>Web scraping begins with fetching the HTML content of the page. We'll use the Requests library for this purpose.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Fetching the web page</span>{'\n'}
          url = <span className={styles.string}>'https://www.python.org/jobs/'</span>{'\n'}
          response = requests.get(url){'\n'}
          soup = BeautifulSoup(response.content, <span className={styles.string}>'html.parser'</span>)
        </pre>

        <h2>Isolating the Jobs Section</h2>
        <p>Identify and isolate the section of the web page that contains the job listings. This is crucial for targeted scraping.</p>
        <pre className={styles.code}>
          <span className={styles.comment}># Python code snippet for isolating the job section</span>{'\n'}
          <span className={styles.keyword}>job_section</span> = soup.find(<span className={styles.string}>'section'</span>, <span className={styles.function}>{'{'}'class': </span><span className={styles.string}>'main-content'</span><span className={styles.function}>{'}'}</span>)
        </pre>

        <h2>Detailed Extraction of Job Listings</h2>
            <p>Within the job section, each job listing is uniquely structured. We'll use BeautifulSoup's methods to navigate and extract detailed information from each job post.</p>
            <pre className={styles.code}>
            <span className={styles.comment}># Looping through job listings</span>{'\n'}
            <span className={styles.keyword}>job_listings</span> = job_section.find_all(<span className={styles.string}>'li'</span>){'\n'}
            <span className={styles.keyword}>for</span> job <span className={styles.keyword}>in</span> job_listings:{'\n'}
                {'    '}title = job.find(<span className={styles.string}>'h2'</span>).find(<span className={styles.string}>'a'</span>).get_text(strip=True){'\n'}
                {'    '}company = job.find(<span className={styles.string}>'span'</span>, <span className={styles.function}>{'{'}'class'</span>: <span className={styles.string}>'listing-company-name'</span><span className={styles.function}>{'}'}</span>).contents[0].strip(){'\n'}
                {'    '}location = job.find(<span className={styles.string}>'span'</span>, <span className={styles.function}>{'{'}'class'</span>: <span className={styles.string}>'listing-location'</span><span className={styles.function}>{'}'}</span>).get_text(strip=True){'\n'}
                {'    '}print(<span className={styles.string}>f"Job Title: {'{'}title{'}'}, Company: {'{'}company{'}'}, Location: {'{'}location{'}'}"</span>)
            </pre>

           <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold mb-2 ">Understanding the Code</h4>
                <p className=" mb-3">
                    In the line <span className="font-bold">title = job.find('h2').find('a').get_text(strip=True)</span>, we are extracting the title of a job from a specific section of HTML. Let's break down what each part does:
                </p>
                <ul className="list-disc list-inside">
                    <li className="mb-1"><span className="font-semibold text-purple-600">job.find('h2')</span>: Searches within the HTML content of <span className="font-semibold">job</span> for the first occurrence of the <span className="text-purple-600">&lt;h2&gt;</span> tag, which usually contains heading text, such as a job title.</li>
                    <li className="mb-1"><span className="font-semibold text-purple-600">.find('a')</span>: After finding the <span className="text-purple-600">&lt;h2&gt;</span> tag, this searches within it for the first occurrence of the <span className="text-purple-600">&lt;a&gt;</span> (anchor) tag, often containing hyperlinked text like the job title.</li>
                    <li className="mb-1"><span className="font-semibold text-purple-600">.get_text(strip=True)</span>: Extracts the text from within the anchor tag. The argument <span className="text-purple-600">strip=True</span> removes leading and trailing whitespace, retrieving only the clean text content (the job title).</li>
                </ul>
                <p className="text-gray-700 mt-2">
                    This approach navigates through the nested HTML structure to accurately pinpoint and extract the job title.
                </p>
            </div>

            <h2 className="mt-10">Output from the current Python.org Job side</h2>


            <div className="my-10 p-6 bg-stone-100 rounded-xl shadow-md">
                <h4 className="text-xl font-bold mb-3">Job Listings</h4>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left">
                    <thead className="text-xs  uppercase bg-stone-100">
                        <tr>
                        <th scope="col" className="px-6 py-3">Job Title</th>
                        <th scope="col" className="px-6 py-3">Company</th>
                        <th scope="col" className="px-6 py-3">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobListings.map((job, index) => (
                        <tr key={index} className="bg-stone-50 border-b">
                            <td className="px-6 py-4">{job.title}</td>
                            <td className="px-6 py-4">{job.company}</td>
                            <td className="px-6 py-4">{job.location}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            
            

        <h2>Advanced BeautifulSoup Techniques</h2>
        <p>Explore advanced features of BeautifulSoup, such as sibling navigation, attribute filtering, and conditional extraction. These techniques allow for more nuanced data retrieval from complex HTML structures.</p>
        <div className={styles.container}>
            {/* ... other tutorial content ... */}

            <div className="my-10 flex flex-col md:flex-row gap-4">
                <div className="flex-1 p-6 bg-blue-100 rounded-xl shadow-md">
                <h4 className="text-xl font-bold text-blue-800 mb-3">BeautifulSoup Cheatsheet with Examples</h4>
                <p className="text-blue-600 mb-4">Quick reference guide for commonly used BeautifulSoup commands in web scraping, complete with examples.</p>
                <pre className={styles.code}>
                    <p><span className={styles.keyword}>soup.find_all('tag')</span>: Finds all instances of 'tag'. Example: soup.find_all('a')</p>
                    <p><span className={styles.keyword}>soup.find('tag')</span>: Finds the first instance of 'tag'. Example: soup.find('div')</p>
                    <p><span className={styles.keyword}>tag.get_text()</span>: Extracts text from a tag. Example: tag.get_text()</p>
                    <p><span className={styles.keyword}>tag.contents</span>: Returns children of a tag. Example: tag.contents</p>
                    <p><span className={styles.keyword}>tag.children</span>: Returns an iterator over children. Example: list(tag.children)</p>
                    <p><span className={styles.keyword}>tag['attribute']</span>: Accesses attribute value. Example: tag['href']</p>
                    <p><span className={styles.keyword}>soup.select('selector')</span>: Selects elements using CSS selector. Example: soup.select('.class_name')</p>
                </pre>
                <Link href={"/tutorials/python/advanced/web-scraping-next-steps"}>
                    <div className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <p>Explore Advanced Topics</p>
                    </div>
                </Link>
                </div>
            </div>
            </div>

        {/* Further explanation of advanced techniques */}

        <h2>Handling Edge Cases and Errors</h2>
        <p>Robust web scraping involves handling exceptions and edge cases, ensuring the scraper works reliably across different scenarios.</p>
        {/* Explanation of error handling and edge cases */}

        <h2>Storing and Using Scraped Data</h2>
        <p>Once data is scraped, storing it effectively for analysis or use in applications is crucial. We'll discuss various storage methods, from simple CSV files to databases.</p>
        {/* Explanation of data storage options and examples */}

        <h3>Become a Web Scraping Expert</h3>
        <p>This tutorial provides the foundation for advanced web scraping techniques. Keep experimenting and exploring to master data extraction from the web.</p>

        {/* Link to more resources */}
        <div className="my-10 flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-6 bg-blue-100 rounded-xl shadow-md">
            <h4 className="text-xl font-bold text-blue-800 mb-3">Next Steps in Web Scraping</h4>
            <p className="text-blue-600 mb-4">Further your journey in web scraping by exploring dynamic content handling, JavaScript-heavy sites, and ethical considerations.</p>
            <Link href={"/tutorials/python/advanced/web-scraping-next-steps"}>
              <div className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <p>Explore Advanced Topics</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedWebScrapingTutorial;
