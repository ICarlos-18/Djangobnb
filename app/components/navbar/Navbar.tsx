import Image from 'next/image';
import Link from 'next/link';

import SearchFilters from './SearchFilters';

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image 
                            src="/logo.png"
                            alt="DjangoBnb logo"
                            width={180}
                            height={38}
                        />
                    </Link>

                    <div className='lfex space-x-6'>
                        <SearchFilters />
                    </div>

                    <div className='flex items-center space-x-6'>
                        Add propety - User nav
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;