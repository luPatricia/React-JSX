import './todo-form.css'
import { TextInput } from "../TextInput"
import { Button } from "../Button"

export function TodoForm ({onSubmit}){

    return (
        <form action={onSubmit} className="form">
           <TextInput placeholder= "Digite o item que deseja adicionar" required name="description" />
           <Button>Salvar item</Button>
        </form>
    )
}