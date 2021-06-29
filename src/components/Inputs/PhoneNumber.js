import { useContext } from "react";
import { FormContext } from "../../FormContext";
import PropTypes from "prop-types";

const PhoneNumber = ({ field_id, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);
  // const regex = "+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}";
  return (
    <div className='mb-3'>
      <input
        type='tel'
        className='mt-1 block w-full rounded-xl border-gray-300 shadow p-4 my-4 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none'
        id='phoneNumber'
        aria-describedby='phoneID'
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value}
        pattern='+[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}'
        name='phone'
        required
        onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  );
};

PhoneNumber.propTypes = {
  field_value: PropTypes.number,
};

export default PhoneNumber;
