import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/AuthService";
import { AUTH_ROUTES } from "../../../../constants/auth";
import {
  validatePassword,
  validateConfirmPassword,
} from "../../../../utils/validation";

function useSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    general: "",
  });

  const navigate = useNavigate();

  function handleInput(event, setState) {
    setState(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      general: "",
    };

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    }

    // Password validation
    const passwordError = validatePassword(password);

    if (passwordError) {
      newErrors.password = passwordError;
    }

    // Confirm password validation
    const confirmPasswordError = validateConfirmPassword(
      password,
      confirmPassword,
    );

    if (confirmPasswordError) {
      newErrors.confirmPassword = confirmPasswordError;
    }

    // Check if there are validation errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (hasErrors) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      await signup({
        name,
        email,
        password,
      });

      navigate(AUTH_ROUTES.LOGIN);
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        general: error.message,
      }));
    } finally {
      setLoading(false);
    }
  }

  return {
    name,
    setName,

    email,
    setEmail,

    password,
    setPassword,

    confirmPassword,
    setConfirmPassword,

    showPassword,
    setShowPassword,

    showConfirmPassword,
    setShowConfirmPassword,

    loading,

    errors,
    setErrors,

    handleInput,
    handleSubmit,
  };
}

export default useSignupForm;
