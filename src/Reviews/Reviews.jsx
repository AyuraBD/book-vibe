import { useLoaderData } from "react-router-dom"

const Reviews = () => {
    const reviews = useLoaderData();
  return (
    <div className="lg:px-20 md:px-8 sm:px-6 max-sm:px-4 lg:py-12 md:py-8 sm:py-6 max-sm:py-6">
      <div className="bg-third text-center font-bold font-worksans lg:text-3xl md:text-2xl sm:text-2xl max-sm:text-xl mb-4 py-3 rounded-lg">
        <h3>Reviews</h3>
      </div>      
      <p className="text-center text-xl text-neutral-500">Discover What Readers Are Saying!</p>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-4 lg:py-10 md:py-8 sm:py-6 max-sm:py-6">
            {
                reviews.map(review => <div className="flex gap-3 bg-third p-3 rounded-lg items-center" key={review.id}>
                    <div className="w-1/4">
                        <p className="w-16 h-16 bg-neutral-400 rounded-full mb-2"></p>
                        <h4 className="text-xl font-semibold">{review.reviewer_name}</h4>
                    </div>
                    <div className="w-3/4">
                        <h3 className="text-xl font-semibold mb-2">{review.heading}</h3>
                        <p className="pb-1 border-b border-neutral-400">{review.description}</p>
                        <div className="flex gap-3 justify-start items-center">
                            <p><span className="font-semibold">Category</span> : {review.category}</p>
                            <p><span className="font-semibold">Ratings</span> : {review.ratings}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Reviews