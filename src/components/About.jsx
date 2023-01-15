import React from 'react'

const About = () => {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Utilizado por desarrolladores a traves del mundo</h2>
                    <p className='text-3xl py-6 text-gray-500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis libero quasi earum ad hic alias laboriosam commodi repellendus quos!</p>
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl  shadow-xl'>
                        <p className='text-6xl font-bold text-violet-500'>100%</p>
                        <p className='text-gray-500 mt-2'>Completado</p>

                    </div>
                    <div className='border py-8 rounded-xl  shadow-xl'>
                        <p className='text-6xl font-bold text-violet-500'>24/7</p>
                        <p className='text-gray-500 mt-2'>Delivery</p>

                    </div>
                    <div className='border py-8 rounded-xl  shadow-xl'>
                        <p className='text-6xl font-bold text-violet-500'>100k</p>
                        <p className='text-gray-500 mt-2'>Transacciones</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About