import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Form, Field, withFormik,} from 'formik'
import * as Yup from 'yup'

const UserForm = ({errors, touched, status}) => {

    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status]);
        return(
            <div className = 'registration-form'>
                <Form>
                <button type='submit'className= 'register'>Register</button>
                    <Field 
                        className = 'username'
                        type = 'text'
                        name = 'username'
                        placeholder = 'Username' 
                    />
                    {touched.username && errors.password && (
                        <p className= 'error'>{errors.username}</p>
                    )}
                    <Field 
                        className = 'password'
                        type = 'password'
                        name = 'password'
                        placeholder = 'Password' 
                    />
                     {touched.password && errors.password && (
                        <p className = 'error'>{errors.password}</p>
                    )}
                </Form>
                {users.map((user, index) => (
                    <p key={index}>{user.username}</p>
                ))}
            </div>
        )
    }

    const FormikUserForm = withFormik({
        mapPropsToValues({username, password}) {
            return {
                username: username || '',
                password: password || '',

            };
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('Please enter your username'),
            password: Yup.string().required('Please enter your password'),
    }),

    handleSubmit(values, {setStatus}) {
        axios
            .post('http://localhost:5000/api/register/', values)
            .then(response => {
                console.log(response)
                setStatus(response.data);
            })
            .catch(error => console.log(error.response))
        }
    })(UserForm);

export default FormikUserForm





// import React, {useState, useEffect} from 'react';
// import {withFormik, Form, Field } from 'formik'
// import axios from 'axios'
// import * as Yup from 'yup'




// const UserForm = ({values, touched, errors, handleSubmit, status}) => {
   
   
//     const [user, setUser] = useState([])
//     console.log(user)
//     useEffect( () => {
//      if(status){
//          setUser([...user, status])
//      }
//    },[status, user])
//    return(
//        <div>
//            <Form>
//              <Field 
//                 type='text' 
//                 name='username' 
//                 placeholder='username'/>
//                 {touched.username && errors.username && (
//                     <p>{errors.username}</p>
//                 )}
//              <Field 
//                 type='password' 
//                 name='password' 
//                 placeholder='password' />
//                 {touched.password && errors.password && (
//                     <p>{errors.password}</p>
//                 )}
//              <button type='submit'>Click</button>
//            </Form>
//                 {user.map((item, index) => ( 
//                 <p key={index}>
//                 {item.username}</p>) )}
//         </div>
//     )
// }
// const FormikUserForm = withFormik({
//    mapPropsToValues({username, password}){
//    return{
//      username: username || '',
//      password: password || ''
//    }
//  },
//  validationSchema: Yup.object().shape({
//    username: Yup.string().required(),
//    password: Yup.string().required()
//  }),
//  handleSubmit(values, {setStatus} ){
//      axios.post('http://localhost:5000/api/restricted/data/', values)
//        .then( res => {
//            setStatus(res.data)
//        })
//        .catch(err => {console.log('There was an error posting your data')})
//  }
// })(UserForm)
// export default FormikUserForm