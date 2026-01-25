// src/components/ListItem/index.jsx 
import styles from './listitem.module.css' 
 
export const ListItem = ({ children, className, ...props }) => { 
return ( 
<li className={`${styles.item} ${className || ''}`} {...props}> 
{children} 
</li> 
) 
} 