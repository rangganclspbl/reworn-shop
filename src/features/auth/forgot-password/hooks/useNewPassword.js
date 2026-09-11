import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/AuthService";
import {
  validatePassword,
  validateConfirmPassword,
} from "../../../../utils/validation";

function useNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(
      password,
      confirmPassword,
    );

    if (passwordError) {
      setError(passwordError);
      setPassword("");
      setConfirmPassword("");
      return;
    }

    if (confirmPasswordError) {
      setError(confirmPasswordError);
      return;
    }

    setLoading(true);

    try {
      await resetPassword({ password, confirmPassword });
      setSuccess(true);
    } catch (error) {
      setError(error.message);
      setPassword("");
      setConfirmPassword("");
    } finally {
      setLoading(false);
    }
  }

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    showPassword,
    setShowPassword,
    loading,
    setLoading,
    success,
    setSuccess,
    navigate,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  };
}

export default useNewPassword;
