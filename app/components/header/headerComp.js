import { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const HeaderCompStandard = ({ mode, setMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.container} bg-gray-200 text-gray-400`}> {/* Adjusted colors */}
            <div className="flex flex-col md:flex-row items-center justify-between py-2 px-2">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link href="/">
                        <span className="text-lg font-bold cursor-pointer">py-learner</span>
                    </Link>
                    <button className="text-2xl md:hidden" onClick={toggleMenu}>
                        &#9776; {/* Hamburger Icon */}
                    </button>
                </div>

                <div className={`flex-col md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'}`}>
                    <Link href="/tutorials/python/beginner">
                        <span className="block px-3 py-2 rounded-md text-base font-medium md:mt-0 md:ml-6 cursor-pointer">Beginner Tutorials</span>
                    </Link>
                    <Link href="/tutorials/python/advanced">
                        <span className="block px-3 py-2 rounded-md text-base font-medium md:mt-0 md:ml-6 cursor-pointer">Advanced Tutorials</span>
                    </Link>
                    {/* Add other links as needed */}
                </div>

               <button 
                  className="rounded p-1 bg-gray-400 text-gray-200 border-0 text-xs hidden md:inline-block md:ml-4" 
                  onClick={() => setMode(!mode)}>
                      Bright/Dark
              </button>

            </div>
        </div>
    );
};

export default HeaderCompStandard;
