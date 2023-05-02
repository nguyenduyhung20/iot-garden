import React from "react";

function Input({ type, value, onChange, label, classname }) {
    return (
        <div className="w-full flex flex-row justify-around items-center">
            <label className="mb-2 font-bold text-lg text-blue-400">
                {label}
            </label>
            <input type={type} value={value} onChange={onChange}
                className={`p-2 border border-blue-200 rounded-md ${classname}`} />
        </div>

    );
}

export default Input;