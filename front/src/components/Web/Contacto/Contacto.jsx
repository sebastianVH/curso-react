import { useForm } from 'react-hook-form'
import './Contacto.css'
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react'


export default function Contacto() {

    const {register, handleSubmit, formState: {errors},setError,watch} = useForm()
    const [largoConsulta, setLargoConsulta] = useState(0)

    const enviarFormulario = (data) => {
        Swal.fire({
            title: 'Enviado',
            text: 'Tu consulta ha sido enviada',
            icon: 'success',
            timer: 2000,
            width: 300,
            heightAuto: false
        })
    }

    useEffect(() => {
     console.log(errors);
    },[errors])

    const setearConsulta = (e) => {
        const largo = e.target.value.length
        setLargoConsulta(largo)
    }

    return (
        <div className='contenedor-contacto'>
            <h1>Contactanos</h1>
            <form className="formulario-contacto" onSubmit={handleSubmit(enviarFormulario)}>
                <label htmlFor="nombre">Nombre</label>
                <input type='text' className='form-input' {...register("nombre", {required:{value:true,message: 'El campo nombre es requerido!'}, maxLength: {value: 10, message: 'El campo nombre no puede ser mayor a 10 caracteres'}})} />
                {errors?.nombre && <span className='form-error'>{errors?.nombre.message}</span>}
                <label htmlFor="email">Email</label>
                <input type='email' className='form-input' {...register("email", {required: true})} />
                {errors?.email && <span className='form-error'>El campo email es requerido</span>}
                <label htmlFor="consulta">Consulta</label>
                <textarea onChangeCapture={setearConsulta} className='form-input'cols={30} rows={10} {...register("consulta", {
                    required: {
                    value:true,
                    message: 'El campo consulta es requerido!',
                    },
                    maxLength:{
                    value:100,
                    message:'La consulta no puede ser mayor a 100 caracteres',
                    }})} />
                <span>{largoConsulta}/100</span>
                <span className='form-error'>{errors?.consulta?.message}</span>
                <button className='boton-enviar' type='submit'>Enviar</button>
            </form>
        </div>
    )
}
