import React, { useState } from "react";
const UrlForm=(props)=>{
    const {formSubmit}=props
    const [title,setTitle]=useState('')
    const [originalUrl,setOrigalUrl]=useState('')
    const handleChange=(e)=>{
        switch(e.target.name){
            case 'title':setTitle(e.target.value)
            break
            case 'originalUrl':setOrigalUrl(e.target.value)
            break
            default :break
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title,originalUrl
        }
        const reset=()=>{
            setTitle('')
            setOrigalUrl('')
        }
        formSubmit(formData,reset)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="tile">Title:</label><input type="text" value={title} placeholder='Title' onChange={handleChange} name="title" id="title" /><br /><br />
                <label htmlFor="originalUrl">Original Url:</label><input type="text" value={originalUrl} onChange={handleChange}  placeholder='Original Url' name="originalUrl" id="originalUrl" /><br />
                <br />
                <input type="submit" value="Save" className="btn btn-primary" />
            </form>
        </div>
    )
}
export default UrlForm