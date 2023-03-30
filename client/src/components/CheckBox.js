import React from "react";

function Checkbox({ checked, onChange, label}) {
    return (
        <label>
            {label}
            <input type="checkbox" checked={checked} onChange={onChange}/>
        </label>
    );
}

export default Checkbox;