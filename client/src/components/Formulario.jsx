import React from 'react';
import styles from './Formulario.module.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';

const Formulario = ({login}) =>{
    const registerSchema = Yup.object().shape({
        name: Yup.string()
        .min(2, 'El nombre debe tener 2 caracteres')
        .max(50, 'Muy largo, reduce')
        .required('Required'),
        email: Yup.string().email('Email inválido').required('Email Requerido'),
        password: Yup.string()
        .min(4, 'La contraseña debe tener minimo 4 caracteres')
        .required('Contraseña requerida'),
        confirmPassword: Yup.string()
        .required('Contraseña requerida')
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
    });
    const loginSchema = Yup.object().shape({
        email: Yup.string().email('Email inválido').required('Email Requerido'),
        password: Yup.string()
        .min(4, 'La contraseña debe tener minimo 4 caracteres')
        .required('Contraseña requerida'),
    });
    const createData = async (values) =>{
        try{
            const response = await axios.post('http://localhost:8000/api/trips', values);
            console.log(response.data);
            Swal.fire({
                title: 'Guardado con exíto',
                text: 'Tus datos se guardaron con éxito',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            }catch(error){
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }
    return(
        <>
        <div className={styles.card}>
        <Formik
    initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }}
    validationSchema={login ? loginSchema : registerSchema}
    onSubmit={createData}
    >
    {({ errors, touched }) => (
        <Form>
            {!login && (
                <>
                <label htmlFor="name">NOMBRE</label>
        <Field name="name" />
        {errors.name && touched.name ? (
            <div className={styles.errors}>{errors.name}</div>
        ) : null}
                </>
            )}
        <label htmlFor="email">EMAIL</label>
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div className={styles.errors}>{errors.email}</div> : null}
        <label htmlFor="password">CONTRASEÑA</label>
        <Field name="password" type="password" />
        {errors.password && touched.password ? (
            <div className={styles.errors}>{errors.password}</div>
        ) : null}
        {!login && (
            <>
            <label htmlFor="confirmPassword">CONFIRMAR CONTRASEÑA</label>
        <Field name="lastName" type="password" />
        {errors.password && touched.password ? (
            <div className={styles.errors}>{errors.lastName}</div>
        ) : null}
            </>
        )}
        <button type="submit">OK</button>
        </Form>
    )}
    </Formik>
        </div>
        </>
    )
}
export default Formulario;