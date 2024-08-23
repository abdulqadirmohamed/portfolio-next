import React from 'react'

const Tags = () => {
    const tags = [
        'JavaScript',
        'TypeScript',
        'React Native',
        'React',
        'Next.js',
        'GraphQL'
    ]
    return (
        <div className='flex gap-2'>
            {tags.map((tag)=>(
                <div className='bg-background text-foreground px-2 rounded-sm cursor-pointer'>
                    <h4 className='text-sm'>{tag}</h4>
                </div>
            ))}
        </div>
    )
}

export default Tags