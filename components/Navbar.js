import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-6 font-mono'>
        <div className='flex flex-1'>
        <Link href={'/'} className='flex'>
          <h2 className='text-2xl'>Quine research</h2>
          </Link>
        </div>
      <div className='flex'>
        <p className='pr-5'>instagram</p>
      </div>
    </div>

  )
}

export default Navbar