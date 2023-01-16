import React from 'react'
import { PhoneIcon,ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon,SupportIcon } from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
    <div className='w-full h-screen mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
           <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="supportImg" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12' >
            <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Soporte</h2>
            <h3 className='text-5xl font-bold py-6 text-center'>Encontrando el equipo indicado</h3>
            <p className='py-4 text-3xl text-slate-300'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cumque nesciunt, nisi delectus ducimus pariatur aspernatur ratione reiciendis eligendi perspiciatis.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <PhoneIcon className='w-16 p-4 bg-violet-500 text-white rounded-lg mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Ventas</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit veniam nostrum aperiam fugit ratione perspiciatis sed eos minus laboriosam.</p>
                </div>
                <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-violet-500'>Contactanos <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <SupportIcon className='w-16 p-4 bg-violet-500 text-white rounded-lg mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Soporte Tecnico</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit veniam nostrum aperiam fugit ratione perspiciatis sed eos minus laboriosam.</p>
                </div>
                <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-violet-500'>Contactanos <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <ChipIcon className='w-16 p-4 bg-violet-500 text-white rounded-lg mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-6'>Consultas de Medios</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio velit veniam nostrum aperiam fugit ratione perspiciatis sed eos minus laboriosam.</p>
                </div>
                <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-violet-500'>Contactanos <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Support