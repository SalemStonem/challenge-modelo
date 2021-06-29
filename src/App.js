import questions from "./questions/Cuestions.json";
import { useState, useEffect } from "react";
import { Dispatch } from "./components/Dispatch";
import { FormContext } from "./FormContext";

function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(questions[0]);
  }, []);
  const { fields } = elements ?? {};

  const handleSubmit = (e) => {
    e.preventDefault();
    elements.fields.map((item) => {
      // console.log(item.field_value);
      const valueNumber = /^[0-9]+$/;
      const valueText = /^[a-z ,.'-]+$/i;
      // const booleanValue = true;
      switch (item.field_type) {
        case "text":
          if (item.field_value.match(valueText)) {
            // console.log("Es texto");
          } else {
            alert("No es texto");
          }
          break;
        case "tel":
          if (item.field_value.match(valueNumber)) {
            // console.log("Es numérico");
          } else {
            alert("No es numérico");
          }
          break;
        default:
          return null;
      }
    });
    // console.log(elements);
    localStorage.setItem("User-Data", JSON.stringify(elements));
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements };

    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;
            break;

          default:
            field["field_value"] = event.target.value;
            break;
        }
      }
      setElements(newElements);
    });
    // console.log('OnChange', elements)  //Onchange Event Response
  };

  return (
    <main className='w-full h-screen flex justify-center items-center'>
      <FormContext.Provider value={{ handleChange }}>
        <div className='w-1/3 text-center'>
          <h3 className='text-3xl'>Dynamic Form</h3>
          <form onSubmit={handleSubmit}>
            {fields
              ? fields.map((field, i) => <Dispatch key={i} field={field} />)
              : null}
            <button
              type='submit'
              className='bg-blue-500 text-white p-4 w-60 rounded-xl mx-auto my-4 focus:outline-none focus:shadow-inner focus:bg-blue-300'
            >
              Submit
            </button>
          </form>
        </div>
      </FormContext.Provider>
    </main>
  );
}

export default App;
