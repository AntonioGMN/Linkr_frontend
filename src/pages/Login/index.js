import Container from "../../components/container";
import Button from "../../components/button";
import Input from "../../components/input";

export default function Login() {
  return (
    <Container>
      <Input placeholder="e-mail"></Input>
      <Input placeholder="password"></Input>
      <Button>Log In</Button>
    </Container>
  );
}
