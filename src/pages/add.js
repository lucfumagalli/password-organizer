import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Add(){
  const [formData, setFormData] = React.useState({
    site: "", 
    email: "", 
    password: "", 
    description: "",
    username: false
  })
  console.log(formData.favColor)

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  return (
    <div id="add-password">
      <h2>Aggiungi nuova password</h2>
      <div>
        <input 
          type="text" 
          placeholder="SITO"
          name="site"
          onChange={handleChange}
          value={formData.site}
        />
        <input 
          type="text" 
          placeholder="your@email.com"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type="text" 
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <textarea 
          placeholder="Aggiungi un commento"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />
        <button>
          <FontAwesomeIcon icon="fa-solid fa-plus"/>
          Aggiungi
        </button>
      </div>
    </div>
  );
}
