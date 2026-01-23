import './todo-form.css'
import { TextInput } from "../TextInput"
import { Button } from "../Button"

export function TodoForm (onSumbmit){

    return (
        <form action={onSumbmit} className="form">
           <TextInput placeholder= "Digite o item que deseja adicionar"/>
           <Button>Salvar item</Button>
        </form>
    )
}