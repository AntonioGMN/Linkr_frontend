import Button from "../../components/button";
import Input from "../../components/input";
import {
  Aside,
  FormContainer,
  AuthContainer,
  Form,
  StyledLink,
} from "../../components/authComponents";
import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <AuthContainer>
      <Aside>
        <h1>linkr</h1>
        <p>
          save, share and discover
          <br />
          the best links on the web
        </p>
      </Aside>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input 
            placeholder="e-mail"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button>Log In</Button>
        </Form>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </FormContainer>
    </AuthContainer>
  );
}
