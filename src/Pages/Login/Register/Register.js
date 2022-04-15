import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    const [agree, setAgree]= useState(false)

  const navigate = useNavigate();



  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // const agree = e.target.terms.checked;
    if(agree){
      createUserWithEmailAndPassword(email, password);
    }

  };

  const navigateRegister = (e) => {
    navigate('/login');
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-3">Plelasee Register here </h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className= 'mb-3' controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name='terms' onClick={() => setAgree(!agree)}  className= {agree ? 'text-danger' : 'text-primary'} label="Accept terms & condition" />
        </Form.Group>
        <Button className='w-50 mb-3 d-block mx-auto' disabled = {!agree} variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>
        {' '}
        Already a member? please{' '}
        <Link
          to="/login"
          className="text-danger text-decoration-none"
          onClick={navigateRegister}
        >
          Login
        </Link>{' '}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
