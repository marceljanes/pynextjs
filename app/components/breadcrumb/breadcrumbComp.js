'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './style.module.css'; // Assuming you have a CSS module for styling

const Breadcrumb = () => {
    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path)
    
    return (
        <div className={`${styles.horizontalList}`}>
            
                <ul className="bg-green-200 text-green-500 rounded p-1 font-medium -mt-5 -ml-5 -mr-5 ">
                    <li><Link href={'/'}>HOME</Link></li>
                    {pathNames.length > 0 && <span className="mr-2 ml-2">&gt;</span>}
                {
                    pathNames.map( (link, index) => {
                        let href = `/${pathNames.slice(0, index + 1).join('/')}`
                        link = link.replaceAll('-',' ').toUpperCase()                  
                        let itemLink = link[0].toUpperCase() + link.slice(1, link.length)
                        if(true) {
                            return (
                            
                                <li key={index} className={`${(index + 1 == pathNames.length) && 'underline decoration-dotted'}`}>
                                    <Link href={href}>{itemLink}</Link>
                                    {index + 1 !== pathNames.length && <span className="ml-2 mr-2">&gt;</span>}
                                </li>
                                
                        
                        )


                        } 
                        
                    })
                }
                </ul>
            
        </div>
    )
}
export default Breadcrumb;