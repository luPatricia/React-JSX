
import { IconBank } from '../icon'
import styles from './account.module.css'

const formatter = new Intl.NumberFormat('pt-BR', { 
style: 'currency', 
currency: 'BRL', 
}) 


export const Account = ({ account }) => { 
return ( 
<div className={styles.account}> 
<div> 
<p className={styles.bank}> 
<IconBank/>
<strong>{account.bank}</strong> 
</p> 
</div> 
<div className={styles.details}> 
<p><strong>Saldo</strong></p> 
<p>{formatter.format(account.balance)}</p> 
</div> 
</div> 
) 
} 