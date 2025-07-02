import React from 'react'

export default function Facilities() {
    return (
        <>
            <div className='p-8'>
                <h1 className="text-4xl font-bold text-center mt-10">Our Facilities</h1>
                <hr className='underLine-short' />
                <p className="text-center text-xl mt-4 mb-10">Explore our state-of-the-art facilities designed to enhance your fitness journey.</p>
                <div className='facility-splits flex justify-between gap-8'>
                    <div className='facilities-outer-img'>
                        <img  className='workout-img' src="https://i.pinimg.com/736x/dd/d0/87/ddd0872b311d1be9556c3801f22bdd4f.jpg" alt="" />
                    </div>
                    <div className='facilities-text'>
                        <h2 className='text-4xl'>Cardio Area</h2>
                        <hr className='underLine-topic' />
                        <p className='mt-2 facilties-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam enim ab earum corrupti vel sapiente doloribus minima dolores impedit dolorum consequuntur quos optio aliquid, accusantium perspiciatis nam laborum. Provident totam hic porro, placeat iusto a asperiores dolor accusamus vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis fugit animi illo eum totam hic facere. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rerum. Necessitatibus natus ducimus cumque? Reprehenderit hic, non sint officiis voluptatibus nemo cupiditate nostrum enim expedita eos repellendus cum eveniet explicabo!</p>
                    </div>
                </div>

                <div className='facility-splits flex justify-between gap-8 mt-15'>
                    <div className='facilities-text'>
                        <h2 className='text-4xl'>Cardio Area</h2>
                        <hr className='underLine-topic' />
                        <p className='mt-2 facilties-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam enim ab earum corrupti vel sapiente doloribus minima dolores impedit dolorum consequuntur quos optio aliquid, accusantium perspiciatis nam laborum. Provident totam hic porro, placeat iusto a asperiores dolor accusamus vel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.<br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, laboriosam quidem porro labore ab temporibus deserunt minus nobis aspernatur! Quaerat distinctio temporibus quod deleniti nesciunt vitae eos sapiente impedit maxime, iusto culpa ipsam blanditiis. Facere amet corporis id nulla dicta!</p>
                    </div>
                    <div className='facilities-outer-img'>
                        <img  className='workout-img' src="https://i.pinimg.com/736x/5f/72/4d/5f724de14b6211863c39900535677c52.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
