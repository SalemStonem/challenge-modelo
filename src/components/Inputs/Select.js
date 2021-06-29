import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Select = ({ field_id, field_label, field_placeholder, field_value, field_options }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <>
            <label className="form-label">{field_label}</label>
            <select className="mt-1 block w-full rounded-xl border-gray-300 shadow p-4 my-4 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none" aria-label="Default select example"
                onChange={event => handleChange(field_id, event)} required
            >
                <option >Open this select menu</option>
                {field_options.length > 0 && field_options.map((option, i) =>
                    <option value={option.option_label} key={i}>{option.option_label}</option>

                )}
            </select>
        </>
    )
}

export default Select
