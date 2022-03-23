import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import Button from "../../components/button";
import Input from "../../components/input";
import { Hyperlink } from "../../components/hyperlink";
import { Form, Page, HeaderArea, Header, Title, Subtitle } from "./styles";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    pictureUrl: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await api.signUp(formData);

      navigate("/");
    } catch (error) {
      alert(error.response.data);
      setLoading(false);
    }
  }

  return (
    <Page>
      <HeaderArea>
        <Header>
          <Title>linkr</Title>
          <Subtitle>
            save, share and discover
            <br /> the best links on the web
          </Subtitle>
        </Header>
      </HeaderArea>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="e-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <Input
          type="text"
          placeholder="username"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <Input
          type="url"
          placeholder="picture url"
          name="pictureUrl"
          value={formData.pictureUrl}
          onChange={handleChange}
          disabled={loading}
          required
        />
        <Button type="submit" disabled={loading}>
          Sign Up
        </Button>
        <Hyperlink to="/" disabled={loading}>
          Switch back to log in
        </Hyperlink>
      </Form>
    </Page>
  );
}
