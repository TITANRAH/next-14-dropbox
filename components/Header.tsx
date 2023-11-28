import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedOut, UserButton,SignInButton } from '@clerk/nextjs';
import { ThemeToggle } from './ThemeToggler';

function Header() {
  return (
    <header className='flex items-center justify-between'>
         <Link href='/' className='flex items-center space-x-2'>
        <div className='bg-[#0160FE] w-fit'>
            <Image
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt='logo'
            className='invert'
            height={50}
            width={50}
            />
        </div>
       
            <h1 className='font-bold text-xl'>Dropbox</h1>
        </Link>

        <div className='px-5 flex space-x-2 items-center'>
            
            <ThemeToggle/>

            <UserButton afterSignOutUrl='/'/>

          
               {/* <SignInButton /> */}
            <SignedOut>
               <SignInButton afterSignInUrl='/dashboard' mode='modal'/>
            </SignedOut>
        </div>
    </header>
  )
}

export default Header