import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../services/AuthService";
import { AUTH_ROUTES } from "../../../../constants/auth";

function useForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
    setError("");
  }

  async function handleSubmit(event) {
    // The form might be automatically reloading the page upon submission.
    event.preventDefault();

    setLoading(true);

    try {
      await forgotPassword({ email });

      navigate(AUTH_ROUTES.VERIFICATION);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    email,
    setEmail,
    error,
    setError,
    loading,
    navigate,
    handleEmailChange,
    handleSubmit
  };
}

export default useForgotPassword;
