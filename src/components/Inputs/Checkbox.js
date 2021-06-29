import React, { useContext } from "react";
import { FormContext } from "../../FormContext";
import PropTypes from "prop-types";

const Checkbox = ({ field_id, field_label, field_value }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className='mb-3 form-check'>
      <input
        type='checkbox'
        className='mr-2'
        id='checkbox'
       
        checked={field_value}
        onChange={(event) => handleChange(field_id, event)}
      />
      <label className='form-check-label' htmlFor='checkbox'>
        {field_label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  field_value: PropTypes.bool,
};

export default Checkbox;
