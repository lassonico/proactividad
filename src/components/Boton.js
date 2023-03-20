import style from '../styles/Boton.module.css'

export default function Boton({arrows}) {
  return (
    <button className={`${style.ham} ${ arrows ?  style.activo : ''}`} type="button">
        <span className={`${style.br1} ${ arrows ? style.activo: '' }`}></span>
        <span className={`${style.br2} ${ arrows ? style.activo: '' }`}></span>
        <span className={`${style.br3} ${ arrows ? style.activo: '' }`}></span>
    </button>
  )
}
