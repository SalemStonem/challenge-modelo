# Getting Started

First Step is install the npm dependencies (in case of exist delete node_modules and package-lock.json) and then

```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### `Project Structure`

1. prueba-modelo
   -public
   -src
    -components
     -Inputs
      -Checkbox.js
      -Email.js
      -PhoneNumber.js
      -Select.js
      -Text.js
       -Dispatch
     -hooks
      -useSendPost.js
     -questions
      -Cuestions.json
     -App.js
     -FormContext.js
     -index.css
     -index.js
   -craco.config.js
   -package.json
   -README.md
   -tailwind.config.js
     

     ### `Usage`

     add your questions in json file, there is 5 types of inputs:

     1. Text
     2. Email
     3. Phone
     4. Checkbox
     5. Select

     ```
     [
    {
        
        "fields": [
            {
                "field_id": "english_name",
                "field_mandatory": "yes",
                "field_placeholder": "Name",
                "field_type": "text",
                "field_value": ""
            },
            {
                "field_id": "email",
                "field_mandatory": "yes",
                "field_placeholder": "Email",
                "field_type": "email",
                "field_value": ""
            },
            {
                "field_id": "employment",
                "field_value": "",
                "field_mandatory": "yes",
                "field_options": [
                    {
                        "option_label": "Full-Time"
                    },
                    {
                        "option_label": "Part-Time"
                    }
                ],
                "field_type": "select"
                
            },
            {
                "field_id": "NoticePrivacity",
                "field_label": "I accept the terms and conditions of the privacy notice",
                "field_type": "checkbox",
                "field_value": ""
            },
            {
                "field_id": "NumberPhone",
                "field_mandatory": "yes",
                "field_placeholder": "+55 240 749 47",
                "field_type": "tel",
                "field_value": ""
            }
        ]
    }
]
```

  ### `Result`

I send data to localStore

```
localStorage.setItem("User-Data", JSON.stringify(elements));
```

 but if you want exist a fetch Hook called useSendPost for connect with a some API.


```
export const useSendFetch = (url) => {

  const sendingData = async (data) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });
    const resp = await response.json();
    // console.log('resp: ', resp);

  };
  // console.log('state: ', stateData);
  return sendingData;
};


```