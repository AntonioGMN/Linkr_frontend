import { useState } from "react";
import Button from "../../components/button";
import Input from "../../components/input";
import { Aside, FormContainer, LoginContainer, LoginForm, StyledLink } from "./styles";

//CONVERSAR COM O JEFF E COMITAR O LAYOUT DESKTOP ANTES DE AVANÇAR

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
    <LoginContainer>
      <Aside>
        <h1>Linkr</h1>
        <p>save, share and discover<br/>the best links on the web</p>
      </Aside>
      <FormContainer>
        <LoginForm onSubmit={handleSubmit}>
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
        </LoginForm>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </FormContainer>
    </LoginContainer>
  );
}
