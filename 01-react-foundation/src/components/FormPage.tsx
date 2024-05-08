import React from 'react'
import { useForm } from 'react-hook-form'

type FormInputs = {
    email: string;
    password: string;
}

export const FormPage = () => {

    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'sadfsa@gdaf.com',
            password: 'sadfsd'
        }
    })

    const onSubmit = (myForm: FormInputs) => {
        console.log(myForm)
    }

    //Ver el estado actual de un campo en el formulario
    console.log(watch('email'))

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Formularios</h3>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder="Email" id="Email" { ...register('email', {required: true}) }/>
                <input type="password" placeholder="Password" id="Password" { ...register('password') } />
                <button type="submit">Ingresar</button>
            </div>
        </form>
        <pre>
            {JSON.stringify(formState, null, 2)}
        </pre>
    </>
  )
}
