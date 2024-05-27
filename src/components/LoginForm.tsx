import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { loginSchema } from '../utils/validationSchema';
import { login } from '../store/authSlice';

interface LoginFormValues {
    username: string;
    password: string;
}

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();

    const initialValues: LoginFormValues = {
        username: '',
        password: '',
    };

    const onSubmit = (values: LoginFormValues) => {
        dispatch(login(values.username));
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field name="username" type="text" />
                        <ErrorMessage name="username" component="div" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;
