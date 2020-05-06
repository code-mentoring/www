import React from 'react';
import { Form } from '@codement/ui/components/Form/Form';
import { FormField } from '@codement/ui/components/FormField/FormField';
import { Button } from '@codement/ui/components/Button/Button';
import * as yup from 'yup';
import { UserInput } from '@codement/api';
import styles from './signup.module.css';
import People from './welcome-people.svg';
import { API } from '../../lib/api';

const signupValidation = yup.object().shape({
  firstName: yup.string().required().label('First name'),
  lastName: yup.string().required().label('Last name'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password')
});


export default () => {
  const submit = (values: UserInput) => {
    API.signup(values);
  };

  return <main>
    <header>
      <img src="/images/logo.svg" alt="Code Mentoring" className="h-12 mx-auto mt-5" />
    </header>


    <div className={styles.wrapper}>

      <h1>Start learning how to code today!</h1>

      <p className="body-2 mt-2 mb-4">
        You’ll see how easy it really is <span role="img" aria-label="img">😊</span>.
        Fill out your details below to join our community and platform.
      </p>

      <Form
        className="grid grid-cols-2 col-gap-4 row-gap-2"
        onSubmit={submit}
        validationSchema={signupValidation}
      >
        <FormField name="firstName" type="text" placeholder="First name" />
        <FormField name="lastName" type="text" placeholder="Last name" />
        <FormField name="email" placeholder="Email" type="text" className="col-span-2" />
        <FormField name="password" placeholder="Password" type="password" className="col-span-2" />
        <Button type="submit" color="success" size="large" className="col-span-2">Signup</Button>
      </Form>
    </div>

    <People className="fixed bottom-0 left-0 h-56" />

  </main>;
};
