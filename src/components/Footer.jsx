import React from 'react'
import {FaFacebook,FaGithub,FaInstagram,FaTwitter,FaTwitch} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Soluciones</h6>
                <ul >
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analiticas</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Soporte</h6>
                <ul >
                    <li className='py-1'>Precios</li>
                    <li className='py-1'>Documentacion</li>
                    <li className='py-1'>Guias</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Compania</h6>
                <ul >
                    <li className='py-1'>Sobre Nosotros</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Trabajos</li>
                    <li className='py-1'>Prensa</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul >
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacidad</li>
                    <li className='py-1'>Terminos</li>
                    <li className='py-1'>Politicas</li>
                    <li className='py-1'>Condiciones</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>Subscribete a nuestras noticias</p>
                <p className='py-4'>Las ultimas noticias, articulos y recursos en tu correo semanalmente</p>
                <form className='flex flex-col sm:flex-row' >
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Ingresa tu email'/>
                    <button className='p-2 mb-4'>Subscribirse</button>
                </form>
            </div>
        </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500'>
            <p className='py-4'>2023 Astelia Cloud, All rights reserved </p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>
                <FaGithub/>
            </div>
        </div>
    </div>
  )
}

export default Footer