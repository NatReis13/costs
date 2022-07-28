import { useState, useCallback, useEffect } from 'react'

import Input from '../Formulario/input'
import SubmitButton from '../Formulario/SubmitButton'

import Styles from '../Service/ServiceForm.module.css'


function ServiceForm({ handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    const handleChange = useCallback((e) => {
        setService({ ...service, [e.target.name]: e.target.value })
    }, [service]);

    return (
        <form onSubmit={submit} className={Styles.form}>

            <Input type="text"
                text="Nome do serviço:"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />

            <Input type="number"
                text="Custo de serviço:"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange}

            />

            <Input type="text"
                text="Descrição do serviço:"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm