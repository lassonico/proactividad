
function Modal({children, cerrar}) {
    
  return (
    <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 bg-[#000000a1] z-50">
        <div className="down md:w-1/2 w-full bg-white rounded-md flex flex-col justify-center relative p-6 mx-5">
        <svg onClick={cerrar} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x absolute top-2 right-2 cursor-pointer" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
        <div>
            {children}
        </div>
        <button onClick={cerrar} className="bg-pro-blue2 text-white uppercase py-3 rounded md:w-[70%] w-full block mx-auto my-2">ACEPTAR</button>
        </div>
    </div>
  )
}

export default Modal
 