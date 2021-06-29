import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
import PropTypes from "prop-types";

const Email = ({ field_id, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);
  // const regex = "+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}";
  return (
    <div className='mb-3'>
      <input
        type='email'
        className='mt-1 block w-full rounded-xl border-gray-300 shadow p-4 my-4 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none'
        id='emailInput'
        aria-describedby='emailID'
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value}
        name='email'
        required
        onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  );
};

Email.propTypes = {
  field_value: PropTypes.number,
};

export default Email;
