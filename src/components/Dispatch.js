import Select from './Inputs/Select';
import Checkbox from './Inputs/Checkbox';
import Text from './Inputs/Text';
import PhoneNumber from './Inputs/PhoneNumber';
import Email from './Inputs/Email';

export const Dispatch = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options } }) => {

    switch (field_type) {
      case "text":
        return (
          <Text
            field_id={field_id}
            field_placeholder={field_placeholder}
            field_value={field_value}
          />
        );
      case "tel":
        return (
          <PhoneNumber
            field_id={field_id}
            field_placeholder={field_placeholder}
            field_value={field_value}
          />
        );
      case "email":
        return (
          <Email
            field_id={field_id}
            field_placeholder={field_placeholder}
            field_value={field_value}
          />
        );
      case "select":
        return (
          <Select
            field_id={field_id}
            field_placeholder={field_placeholder}
            field_value={field_value}
            field_options={field_options}
          />
        );
      case "checkbox":
        return (
          <Checkbox
            field_id={field_id}
            field_label={field_label}
            field_value={field_value}
          />
        );

      default:
        return null;
    }


}

