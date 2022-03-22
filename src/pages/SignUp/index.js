import Container from "../../components/container";
import Button from "../../components/button";
import Input from "../../components/input";

export default function SignUp() {
  return (
    <Container>
      <Input placeholder="e-mail"></Input>
      <Input placeholder="password"></Input>
      <Input placeholder="username"></Input>
      <Input placeholder="picture url"></Input>
      <Button>Sign Up</Button>
    </Container>
  );
}
