import styles from './comment.module.css'
import { Avatar } from "../Avatar"
import { ModalComment } from '../ModalComment'
import { useAuth } from '../../hooks/useAuth'

export const Comment = ({ comment }) => {
  const handleEdit = (newComment) =>{
    //setText(newComment.text)
  }
  const {user} = useAuth()
  const isOwer =user && (user.id == comment.author.id)
    return (<div className={styles.comment}>
        <Avatar author={comment.author} />
        <strong>@{comment.author.name}</strong>
        <p>{comment.text}</p>
        <div className={styles.divider} /> 
        {isOwer && <ModalComment isEditing postId={comment?.post?.id} onSuccess={handleEdit}/>}
        
    </div>)
}