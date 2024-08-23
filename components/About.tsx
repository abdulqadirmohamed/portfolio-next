import Image from 'next/image'
import React from 'react'
import Tags from './Tags'

const About = () => {
    return (
        <div className='my-6 dark:text-[#b5b2bc]'>
            <div className='flex items-center gap-4'>
                <div>
                    <Image
                        className='rounded-full ring-4 ring-gray-200 dark:ring-gray-700'
                        src={'https://avatars.githubusercontent.com/u/63993502?v=4'}
                        width={60} height={60} alt='abdulqadir' />
                </div>
                <div className=''>
                    <h1 className='font-semibold text-lg dark:text-white'>Abdulqadir Mohamed</h1>
                    <p className='text-sm'>Engineering Leader and Developer based in UK</p>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='font-bold dark:text-white'>About</h1>
                <p>Hello! I'm Junior, a Software Developer based in Garowe, Somalia.
                    I enjoy creating beautiful and reliable applications for internet and phones.
                    My goal is to always build scalable products and performant experiences.</p>
                <div>
                    <p className='my-4'>Here are a few technologies I've been working with recently:</p>
                    <Tags />
                </div>
            </div>

        </div >
    )
}

export default About