import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services/AuthService";
import { AUTH_ROUTES } from "../../../../constants/auth";

function useLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleInput(event, setState) {
    setState(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    try {
      await login({ email, password });

      navigate(AUTH_ROUTES.HOME);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    loading,
    error,
    setError,
    showPassword,
    setShowPassword,
    handleInput,
    handleSubmit,
  };
}

export default useLoginForm;