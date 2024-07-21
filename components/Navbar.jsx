import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-3xl bg-[#f8f9fa] text-[#495057] shadow-md shadow-[#000000] flex justify-center items-center py-5'>
            <Link href={"/"}>
                Game Of Life
            </Link>
        </nav>
    )
}

export default Navbar