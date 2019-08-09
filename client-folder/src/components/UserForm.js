import React, { useEffect } from 'react';
import  axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';


const UserForm = ({errors, touched, values, status, user, setUser}) => {
  
    useEffect(() => {
        if(status){
        setUser([...user, status])
        }
    }, [status])


        return (
            <div>
                <Form>
                    <Field type='text' name='username' placeholder='User Name' />
                    <Field type='password' name='password' placeholder='Password' />
                    <button type='submit'>Submit</button>
                </Form>

            </div>
        )
    

}


const FormikUserForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please enter your Name'),
        password: Yup.string().required('Please enter a valid password between 6 and 10 characters').min(6, 'Password too Short').max(10, 'Password too long')
    }),

    handleSubmit(values, { setStatus, resetForm}) {
        console.log(values)
        axios
            .post('http://localhost:5000/api/register', values)
            .then(res => {
                console.log(res.data)
                setStatus(res.data)
                resetForm();
            })
            .catch(err => console.log('Error', err))
    }



})(UserForm);
export default FormikUserForm;
