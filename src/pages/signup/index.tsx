import { UserInput } from '@codement/api';
import { Button } from '@codement/ui/components/Button/Button';
import { Form } from '@codement/ui/components/Form/Form';
import { FormField } from '@codement/ui/components/FormField/FormField';
import Link from 'next/link';
import React, { useState } from 'react';
import * as yup from 'yup';

import { API } from '../../lib/api';
import styles from './signup.module.css';
import People from './welcome-people.svg';


const signupValidation = yup.object().shape({
  firstName: yup.string().required().label('First name'),
  lastName: yup.string().required().label('Last name'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().label('Password')
});


export default () => {

  const [success, isSuccessful] = useState(false);
  const [error, updateErrorMsg] = useState('');

  const submit = async (values: UserInput) => {
    const res = await API.signup(values);
    if (res.data?.createUser) {
      isSuccessful(true);
      updateErrorMsg('');
    } else if (res.errors[0].message) {
      isSuccessful(false);
      updateErrorMsg('That email is already registered!');
    }
  };

  return <main>
    <header>
      <img src="/images/logo.svg" alt="Code Mentoring" className="h-12 mx-auto mt-5" />
    </header>
    {
      !success
        ? <div className={styles.wrapper}>

          <h1>Start learning how to code today!</h1>

          <p className="body-2 mt-2 mb-4">
            You’ll see how easy it really is <span role="img" aria-label="img">😊</span>.
            Fill out your details below to join our community and platform.
          </p>
          <Form
            className="grid grid-cols-2 col-gap-4 row-gap-2"
            onSubmit={submit}
            validationSchema={signupValidation}
            error={error}
          >
            <FormField name="firstName" type="text" placeholder="First name" />
            <FormField name="lastName" type="text" placeholder="Last name" />
            <FormField name="email" placeholder="Email" type="text" className="col-span-2" />
            <FormField name="password" placeholder="Password" type="password" className="col-span-2" />
            <Button type="submit" color="success" size="large" className="col-span-2">Signup</Button>
          </Form>
        </div>
        : <div className={styles.wrapper}>
          <h1>Success <span role="img" aria-label="img">🎉</span>!</h1>
          <p className="body-2 mt-2 mb-4">
            You're in! Thanks for signing up to the Code Mentoring
            Beta. We'll let you know when we're up and running!
          </p>
          <Link href="/"><Button type="button" color="success" size="large" className="col-span-2">Return Home</Button></Link>
        </div>
    }
    <People className="fixed bottom-0 left-0 h-56" />

  </main>;
};
