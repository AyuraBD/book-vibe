import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Authors = () => {
    const authors = useLoaderData();
  return (
    <div className="lg:px-20 md:px-8 sm:px-6 max-sm:px-4 lg:py-12 md:py-8 sm:py-6 max-sm:py-6">
      <div className="bg-third text-center font-bold font-worksans lg:text-3xl md:text-2xl sm:text-2xl max-sm:text-xl mb-4 py-3 rounded-lg">
        <h3>Authors</h3>
      </div>      
      <p className="text-center text-xl text-neutral-500">Meet the Minds Behind the Books!</p>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-4 lg:py-10 md:py-8 sm:py-6 max-sm:py-6">
            {
                authors.map(author => <div className="flex gap-3 bg-third p-3 rounded-lg items-center" key={author.id}>
                    <div className="w-1/4">
                        <p className="w-16 h-16 bg-neutral-400 rounded-full mb-2"></p>
                        <h4 className="text-xl font-semibold">{author.name}</h4>
                    </div>
                    <div className="w-3/4">
                        <p className="pb-1 border-b border-neutral-400">{author.short_bio}</p>
                        <div className="flex gap-3 justify-start items-center">
                            <p><span className="font-semibold">Category</span> : {author.category}</p>
                        </div>
                        <div>
                        <p><span className="font-semibold">Awards</span> : {author.awards.map((li, idx) => <span className='mr-1' key={idx}>{li},</span>)}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Authors