// src/components/Accounts/index.jsx 
import styles from './accounts.module.css' 
import { IconWallet } from '../icon'
import { Account } from '../Account'
import { ListItem } from '../ListItem'
import { List } from '../List'
import { Button } from '../Button'

export const Accounts = () => { 
const accounts = [ 
{ bank: "Anybank", balance: 1200 }, 
{ bank: "Bytebank", balance: 800 }, 
{ bank: "Switch Bank", balance: 1800 } 
] 

return ( 
<div className={styles.accounts}> 
<List> 
{accounts.map(ac => ( 
<ListItem key={ac.bank}> 
<Account account={ac}/>
</ListItem> 
))}
</List> 
<div className={styles.divider} /> 
<div className={styles.actions}> 
<Button> 
    <IconWallet/> Adicionar conta
</Button> 
</div> 
</div> 
) 
} 