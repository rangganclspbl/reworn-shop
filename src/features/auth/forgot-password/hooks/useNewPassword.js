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

    // Validate password
    const passwordError = validatePassword(password);

    // Validate confirm password
    const confirmPasswordError = validateConfirmPassword(
      password,
      confirmPassword
    );

    // Stop if password validation fails
    if (passwordError) {
      setError(passwordError);
      return;
    }

    // Stop if confirm password validation fails
    if (confirmPasswordError) {
      setError(confirmPasswordError);
      return;
    }

    setLoading(true);

    try {
      await resetPassword({
        password,
        confirmPassword,
      });

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