import './lista-suspensa.css';
 export function ListaSuspensa({ itens, id, name }) {
    return (
        <select className='lista-suspensa-form' defaultValue="" id={id} name={name}>
            <option value="" disabled>
                Selecione uma opção
            </option>
            {itens.map(function (item){
                return <option key={item.id} value={item.id}>
                          {item.nome}
                       </option>
                
            })}
        </select>
    )
}