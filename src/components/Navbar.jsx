import React,{useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../assets/logo.png'
const Navbar = () => {

    const [nav, setNav] = useState(false);
    const toggleMenu = () => setNav(!nav);

    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className=' font-bold mt-3 '><img className='w-60' src={logo} alt='logo' /></h1>
                    <ul className='hidden md:flex  '>
                        <li>Inicio</li>
                        <li>Sobre Nosotros</li>
                        <li>Soporte</li>
                        <li>Plataformas</li>
                        <li>Precios</li>
                    </ul>

                </div>
                <div className="hidden md:flex pr-4">
                    <button className='border-none bg-transparent text-black mr-4'>Iniciar Sesion</button>
                    <button className='px-8 py-3'>Registrarse</button>
                </div>
                <div className="md:hidden" onClick={toggleMenu}>
                    {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5'/> }
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 md:hidden'}>
                <li className='border-b-2 border-zinc-300 w-full'>Inicio</li>
                <li className='border-b-2 border-zinc-300 w-full'>Sobre Nosotros</li>
                <li className='border-b-2 border-zinc-300 w-full'>Soporte</li>
                <li className='border-b-2 border-zinc-300 w-full'>Plataformas</li>
                <li className='border-b-2 border-zinc-300 w-full'>Precios</li>
                <div className='flex flex-col my-4'>

                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Iniciar Sesion</button>
                    <button className='px-8 py-3'>Registrarse</button>
                </div>
            </ul>

        </div>
    )
}

export default Navbar