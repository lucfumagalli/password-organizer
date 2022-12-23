import "./style.css"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function Form(){
    const [formData, setFormData] = React.useState({
        site: "", 
        email: "", 
        password: "", 
        description: "",
        username: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function isEmpty(str) {
        return (!str || str.length === 0 );
    }

    async function loadOnDatabase(formData){
        // const config = {
        //     host: process.env.DATABASE_HOST,
        //     username: process.env.DATABASE_USERNAME,
        //     password: process.env.DATABASE_PASSWORD
        // }
        // const conn = connect(config)
        // const results = await conn.execute('select 1 from dual where 1=?', [1])
    }

    function handleSubmit(event){
        event.preventDefault()
        if(isEmpty(formData.site)||isEmpty(formData.email)||isEmpty(formData.password)){
            document.getElementById("input-error").style.display = "inline-grid"
        }else{
            loadOnDatabase(formData)
            console.log(formData)
            window.location.reload()
        }
    }

    return (
        <div id="form">
            <form name="new_password" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="SITO *"
                name="site"
                onChange={handleChange}
                value={formData.site}
                className="item-site"
                />
                <input 
                type="email" 
                placeholder="your@email.com *"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="item-email"
                />
                <input 
                type="password" 
                placeholder="Password *"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="item-password"
                />
                <textarea 
                placeholder="Aggiungi un commento"
                name="description"
                onChange={handleChange}
                value={formData.description}
                className="item-description"
                />
                <button className="item-submit">
                <FontAwesomeIcon icon="fa-solid fa-plus"/>
                Aggiungi
                </button>
                <div id="input-error">
                    &#10060; Compila correttamente tutti i campi!!!
                </div>
            </form>
        </div>
    );
}