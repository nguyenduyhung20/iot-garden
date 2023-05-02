import React from "react";

function Checkbox({ checked, onChange, label }) {
    return (
        <div className="flex items-center justify-end mr-5">
            <label className="text-lg text-blue-400">
                {label}
            </label>
            <input type="checkbox" checked={checked} onChange={onChange}
            className="m-2 transform scale-150" />
        </div>


    );
}

export default Checkbox;