import { useForm } from 'react-hook-form'


import './Formulario.css'
function Formulario(){

    const {register, //para registrar un input a mi formulario
        handleSubmit, //es un submit personalizado de reacthook-form, para poder  porej, trabajar con errores antes de enviar el formulario, realizar alguna funcionadicional, etc
        watch, // nos va a permitir visualizar el contenido del formulario
        formState: {errors} //trabajar y manejar errores de manera PERSONALIZADA
    } = useForm()

    const enviarFormulario = (data) =>{ 
        console.log(data)
    }

    return(
        <>
            <h1>Formulario con React-hook-form</h1>
            <form onSubmit={handleSubmit(enviarFormulario)}  className="formulario" action="">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" {...register("nombre",{required: true})} />
                { errors?.nombre && <span className='error'>El campo nombre es requerido</span>}
                <label htmlFor="apellido">Apellido</label>
                <input type="text" id=""  {...register("apellido",{required: true})}/>
                {errors?.apellido && <span className='error'>El campo apellido es requerido</span>}
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" 
                {...register("password",{required: true,minLength: 8})} 
                placeholder="********"/>
                {errors?.password && <span className='error'>El password debe tener minimo 8 caracteres</span>}
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" {...register("email")} />
                <label htmlFor="genero">Genero</label>
                <select name="genero" id="" {...register("genero")}>
                    <option value="">-- Seleccione un genero --</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
                <button type="submit">Enviar</button>
            </form>
        </>


    )

}


export default Formulario