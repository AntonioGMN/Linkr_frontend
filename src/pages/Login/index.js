import Button from "../../components/button";
import Input from "../../components/input";
import { Aside, FormContainer, LoginContainer, LoginForm, StyledLink } from "./styles";

//CONVERSAR COM O JEFF E COMITAR O LAYOUT DESKTOP ANTES DE AVANÇAR

export default function Login() {
  return (
    <LoginContainer>
      <Aside>
        <h1>Linkr</h1>
        <p>save, share and discover<br/>the best links on the web</p>
      </Aside>
      <FormContainer>
        <LoginForm>
          <Input 
            placeholder="e-mail"
          />
          <Input 
            placeholder="password"
          />
          <Button>Log In</Button>
        </LoginForm>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </FormContainer>
    </LoginContainer>
  );
}
