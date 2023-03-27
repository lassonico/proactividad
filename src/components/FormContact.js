import { useState } from 'react'

function FormContact() {

    const [ ocupacion, setOcupacion ] = useState(false)

  return (
    <div className='bg-white p-5 rounded-md shadow-xl'>
        <form>
            <h2 className='text-center font-bold text-4xl text-pro-blue mb-4'>Contactanos</h2>
            <div className='flex flex-col gap-2 my-2'>
                <label className='text-pro-blue text-xl font-semibold ml-1'>Nombre Completo:</label>
                <input
                    type="text"
                    placeholder='Ingresa tu nombre completo'
                    className='w-full p-3 border rounded-md outline-none text-xl text-gray-700'
                />
            </div>
            <div className="flex flex-col md:flex-row md:gap-2">
                <div className='flex flex-col my-2 md:w-1/3' >
                    <label className='text-pro-blue text-xl font-semibold ml-1'>Teléfono:</label>
                    <input
                        type="text"
                        placeholder='WhatsApp'
                        className='w-full p-3 border rounded-md outline-none text-xl text-gray-700'
                    />
                </div>
                <div className='flex flex-col my-2 md:w-2/3'>
                    <label className='text-pro-blue text-xl font-semibold ml-1'>Correo electrónico:</label>
                    <input
                        type="text"
                        placeholder='Ej: micorreo@gmail.com'
                        className='w-full p-3 border rounded-md outline-none text-xl text-gray-700'
                    />
                </div>
            </div>
            <div className='flex flex-col gap-2 my-2'>
                <label className='text-pro-blue text-xl font-semibold ml-1'>Fondo de pensión:</label>
                <input
                    type="text"
                    placeholder='Ej: Colpensiones'
                    className='w-full p-3 border rounded-md outline-none text-xl text-gray-700'
                />
            </div>
            <input type="submit" value='Enviar' className='w-full bg-gradient-to-t from-pro-blue to-pro-blue2 rounded-md my-2 py-3 text-xl font-bold text-white cursor-pointer hover:scale-[.98] duration-300'/>
        </form>
    </div>
  )
}

export default FormContact