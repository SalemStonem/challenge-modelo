import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
import PropTypes from 'prop-types'

const Text = ({ field_id, field_label, field_placeholder, field_value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            
            <input type="text" className="mt-1 block w-full rounded-xl border-gray-300 shadow p-4 my-4 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none" id="textInput" aria-describedby="textID"
                placeholder={field_placeholder ? field_placeholder : ''}
                value={field_value}
                name="text"
                required
                onChange={event => handleChange(field_id, event)}
            />
            
        </div>
    )
}

Text.propTypes = {
  field_value: PropTypes.string
}

export default Text
