import React from "react";

function Input({type, value, onChange, label}) {
    return (
        <label>
            {label}
            <input type = {type} value={value} onChange={onChange} />
        </label>
    );
}

export default Input;