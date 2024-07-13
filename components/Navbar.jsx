import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-3xl'>
            <Link href={"/"}>
                Game Of Life
            </Link>
        </nav>
    )
}

export default Navbar