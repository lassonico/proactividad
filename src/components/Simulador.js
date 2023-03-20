import { useState, useEffect } from 'react'
import { formatearMoneda } from '../utils/formatos.js'
// import Btn from './Btn.jsx'
import BtnSimulador from './BtnSimulador.js'
import Errormessage from './Errormessage.js';


export default function Simular() {

    const [ monto, setMonto ] = useState(15000000);
    const [ plazo, setPlazo ] = useState(24);
    const [ cuota, setCuota ] = useState(0);
    const [ error, setError ] = useState('')

    useEffect(() => {
        const cuo = ((tasa/100) * ((monto/84.15) * 100)) / (1 - (Math.pow(((tasa/100)+1), -plazo)))
        setCuota(cuo)
    }, [plazo, monto])
    
    const min = 5000000;  
    const max = 150000000;  
    const rango = 1000000;
    const plazomin = 12
    const plazomax = 180
    const rangoplazo = 12
    const tasa = 1.912

    const restar = () => {
        if(monto <= min){
            setError('Monto mínimo alcanzado')
            setTimeout(() => {
                setError('')
            }, 3000);
            return
        }
        setMonto(monto-rango)
    }

    const sumar = () => {
        if(monto >= max){
            setError('Monto máximo alcanzado')
            setTimeout(() => {
                setError('')
            }, 3000);
            return
        }
        setMonto(monto+rango)
    }

    const disminuirplazo = () => {
        if(plazo <= rangoplazo){
            setError('Plazo mínimo alcanzado')
            setTimeout(() => {
                setError('')
            }, 3000);
            return
        }
        setPlazo(plazo-rangoplazo)
    }

    const aumentaplazo = () => {
        if(plazo >= 180){
            setError('Plazo máximo alcanzado')
            setTimeout(() => {
                setError('')
            }, 3000);
            return
        }
        setPlazo(plazo+rangoplazo)
    }

    const handleChange = (e) => {
        setMonto((+e.target.value))
    }

    const handlePlazo = (e) => {
        setPlazo((+e.target.value))
    }

  return (
    <div className='p-4 rounded-md shadow-xl bg-white md:mx-auto'>
        <h2 className='text-center font-bold text-4xl text-pro-blue my-3'>¿Cuánto dinero necesitas?</h2>
        <div className='down flex gap-2 flex-col bg-slate-100 py-3 px-4 rounded-md shadow-md mb-3'>
            <div className='down'>
                { error && <Errormessage error={error} /> }
            </div>
            <h2 className='text-pro-blue text-2xl font-bold'>Monto: <span className='text-pro-blue2 float-right'>{formatearMoneda(monto)}</span></h2>
            <h3 className='text-pro-blue text-2xl font-bold'>Plazo: <span className='text-pro-blue2 float-right'>{plazo}</span></h3>
            <p className='text-pro-blue text-2xl font-bold'>Cuota <span className='text-pro-blue2 float-right'>{formatearMoneda(cuota)}</span></p>
        </div>
        <div className='bg-slate-100 py-2 px-4 rounded-md shadow-md'>
            <div className='flex justify-between gap-4 items-center mb-2 mt-4'>
                <BtnSimulador
                    operador='-'
                    operacion={restar}
                />
                <p className='text-md font-bold text-slate-600 uppercase'>Ajusta el Monto</p>
                <BtnSimulador
                    operador='+'
                    operacion={sumar}
                />
            </div>
            <input
                onChange={handleChange}
                type="range"
                step={rango}
                min={min}
                max={max}
                value={monto}
            />
        </div>
        <div className='bg-slate-100 py-2 px-4 rounded-md shadow-md my-4'>
            <div className='flex justify-between gap-4 items-center mb-2 mt-4'>
                <BtnSimulador
                    operador='-'
                    operacion={disminuirplazo}
                />
                <p className='text-md font-bold text-slate-600 uppercase'>Ajusta el Plazo</p>
                <BtnSimulador
                    operador='+'
                    operacion={aumentaplazo}
                />
            </div>
            <input
                onChange={handlePlazo}
                type="range"
                step={rangoplazo}
                min={plazomin}
                max={plazomax}
                value={plazo}
            /> 
        </div>
        <div className='flex justify-center'>
            <button className='block bg-gradient-to-tr from-pro-blue to-pro-blue2 text-white w-full py-2 rounded-md uppercase' >Enviar ésta solicitud</button>
        </div>
    </div>
  )
}
