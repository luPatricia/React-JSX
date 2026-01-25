import style from './transactionitem.module.css'

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

//
export const TransacrionItem = ({ item }) => {

    const detailAddicionalClassName = item.value >= 0 ? style.income : style.expense
    return (
        <div className={style.transaction}>

            <div className={[style.datails, detailAddicionalClassName].join(' ')}>
                 <p>{item.description}</p>
                 <p>{formater.format(item.value)}</p>
            </div>

            <div className={style.date}>
               {new Date (item.date).toLocaleDateString('pt-BR')}
            </div>

           
        </div>


    )
}