import React from 'react'

export default function BtnSimulador({operador, operacion}) {

  return (
    <button
      onClick={operacion}
      className='flex items-center justify-center  bg-[#1aff05] rounded-md w-8 h-8 text-white text-xl font-normal md:text-2xl'
      >{operador}
    </button>
  )
}
