import { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const HeaderCompStandard = ({ mode, setMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkStyle = "block px-3 py-2 rounded-md text-base md:mt-0 md:ml-6 cursor-pointer hover:text-stone-600";
    const modeButtonStyle = "rounded p-1 bg-gray-400 text-gray-200 border-0 text-xs md:inline-block hover:bg-gray-500";

    return (
        <div className={`${styles.container} bg-stone-100 text-stone-400 shadow-md`}>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-1 px-4 md:px-6">
                {/* Logo */}
                <div className="flex-grow-0">
                    <Link href="/">
                        <span className="flex items-center cursor-pointer">
                            <div className="bg-stone-700 p-2 rounded">
                                <div className="text-[#dcdcdc] font-mono text-sm">
                                    <span className="text-yellow-300">py</span>
                                    <span className="text-stone-200">Learner</span>
                                </div>
                            </div>
                        </span>
                    </Link>
                </div>

                {/* Hamburger Menu Button */}
                <button className="text-2xl md:hidden" onClick={toggleMenu}>
                    &#9776;
                </button>

                {/* Dark Mode Button */}
                <div className="flex-grow-0">
                    <button className={modeButtonStyle} onClick={() => setMode(!mode)}>
                        Bright/Dark
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderCompStandard;
