import React from "react";
import axios from "../config/axios";
import UrlForm from "./UrlForm";
const UrlAddItem=(props)=>{
    const {handleUrls}=props
    const formSubmit=(formData,reset)=>{
        axios.post('/api/urls',formData)
        .then(res=>{
            handleUrls(res.data,'ADD')
            reset()
        })
        .catch(err=>console.log(err))
    }
    return(
        <div>
            <h2>Add Item</h2>
            <UrlForm formSubmit={formSubmit}/>
        </div>
    )
}
export default UrlAddItem