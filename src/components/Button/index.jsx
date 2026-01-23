import './button.css'

export function Button ({children, ...rest}){
    return <button {...rest}  className='btn'>{children}</button>

}