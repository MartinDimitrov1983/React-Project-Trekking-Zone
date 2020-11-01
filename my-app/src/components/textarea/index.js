import React from "react"
import styles from "./index.module.css"

const TextArea = ({type, id, name, placeHolder, label, onChange, value}) => {

    return (

        <div className="form-label-group">
            <textarea type={type} id={id} name={name} className={`${styles.formControl} form-control`}
                placeholder={placeHolder} value={value} required="" onChange={onChange}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default TextArea;