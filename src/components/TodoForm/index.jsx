import './todo-form.css'
import { TextInput } from "../TextInput"
import { Button } from "../Button"

export function TodoForm ({onSubmit, defaultValue }){

    return (
        <form action={onSubmit} className="form">
           <TextInput placeholder= "Digite o item que deseja adicionar" required name="description" defaultValue={defaultValue} />
           <Button>Salvar item</Button>
        </form>
    )
}