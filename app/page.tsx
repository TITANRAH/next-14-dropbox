import { UserButton } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">

      <div className='flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800'>
        <div className='p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5'>
          <h1 className='text-5xl font-bold'>Welcome to Dropbox. <br/><br/> 
          Storing everything for you and yout business needs. All in on place
          </h1>

          <p className='pb-20'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsam consequatur 
            consequuntur, ratione doloribus quae porro! Iusto quas, voluptate ea porro animi
             beatae tempore doloremque est, tempora nostrum enim. Vel?
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsam consequatur 
            consequuntur, ratione doloribus quae porro! Iusto quas, voluptate ea porro animi
             beatae tempore doloremque est, tempora nostrum enim. Vel?
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsam consequatur 
            consequuntur, ratione doloribus quae porro! Iusto quas, voluptate ea porro animi
             beatae tempore doloremque est, tempora nostrum enim. Vel?
          </p>

          <Link href='/dashboard' className='flex cursor-pointer bg-blue-500 p-5 w-fit'>
            Try it for free!
            <ArrowRight className='ml-10'/>
          </Link>
        </div>

        <div className='bg-[#1E1919] dark:bg-slate-800 h-full p-10'>
            <video autoPlay loop muted className='rounded-lg'>

              <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
              type='video/mp4'
              />

              Your browser does not support the video tag
            </video>
        </div>
      </div>
        <h1 className='text-red-500 dark:text-blue-500'>Dropbox clone</h1>

        <p className='text-center font-bold text-xl pt-5'>Disclaimer</p>
        <p className='text-center font-light p-2'>
          This video is made for informational and educational pourpose 
          only.We 
          do not own or affiliate whit Dropnbox or and any of its subsidiaries in 
           any form.Copyright Disclaimer under section 107 of the copyright
        </p>

    </main>
  )
}
