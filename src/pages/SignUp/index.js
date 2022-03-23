import Button from "../../components/button";
import Input from "../../components/input";
import { SignUpForm } from "./styles";

export default function SignUp() {
  return (
    <SignUpForm>
      <Input placeholder="e-mail"></Input>
      <Input placeholder="password"></Input>
      <Input placeholder="username"></Input>
      <Input placeholder="picture url"></Input>
      <Button>Sign Up</Button>
    </SignUpForm>
  );
}
