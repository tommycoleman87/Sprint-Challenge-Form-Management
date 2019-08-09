import React, { useEffect } from 'react';
import  axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


const UserForm = ({errors, touched, values, user}) => {
  

        return (
                <div>
                <Form data-testid='userform'> 
                    <Field  data-testid='name' type='text' name='username' placeholder='User Name' />
                    {touched.name && errors.name &&(
                    <p>{errors.name}</p>)}
                    <Field  data-testid='password' type='password' name='password' placeholder='Password' />
                    {touched.name && errors.name &&(
                    <p>{errors.name}</p>)}
                    <button data-testid='button' type='submit'>Submit</button>
                </Form>
                <p>{user}</p>
                </div>

            
        )
    

}


const FormikUserForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter your Name'),
        password: Yup.string().required('Please enter a valid password between 6 and 10 characters').min(6, 'Password too Short').max(10, 'Password too long'),
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        console.log(values)
        axios
          .post(`http://localhost:5000/api/register`, values)
          .then(res => {
            console.log("res data", res.data);
            setStatus(res.data);
            resetForm();
          })
          .catch(err => {
              console.log(err.response)
              resetForm();
          });
      }



})(UserForm);
export default FormikUserForm;
