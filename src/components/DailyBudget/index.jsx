const formatter = new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL'
})


export const DailyBudeget = ({value}) =>{
    return(
         <p className="m0 text-primary-highlight font-bold text-[39px] leading-[125%] text-center ">
              {formatter.format(value)}
         </p>
    )
}