import Button from "../../components/button";
import Input from "../../components/input";
import {
  Aside,
  FormContainer,
  AuthContainer,
  Form,
  StyledLink,
} from "../../components/authComponents";

export default function Login() {
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
        <Form>
          <Input placeholder="e-mail" />
          <Input placeholder="password" />
          <Button>Log In</Button>
        </Form>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </FormContainer>
    </AuthContainer>
  );
}
