import Button from "../../components/button";
import Input from "../../components/input";
import {
  Aside,
  FormContainer,
  AuthContainer,
  Form,
  StyledLink,
} from "../../components/authComponents";
import { useEffect, useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const { auth, persistLogged } = useAuth();
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try{
      const { data } = await api.signIn(formData);
      persistLogged(data);
      console.log(data)
      setLoading(false);
      navigate("/timeline")
    } catch (error){
      setLoading(false);
      const errorMessage = error.response.data;
      alert(errorMessage);
    }
  }

  useEffect(() => {
    if (auth?.token) navigate("/timeline");
  }, [auth, navigate]);

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
            disabled={loading}
            required
          />
          <Input
            placeholder="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            disabled={loading}
            required
          />
          <Button>Log In</Button>
        </Form>
        <StyledLink to="/sign-up">First time? Create an account!</StyledLink>
      </FormContainer>
    </AuthContainer>
  );
}
