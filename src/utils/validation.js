import { PASSWORD_RULES } from "../constants/validation";

export function validateEmail(email) {
  if (!email.trim()) {
    return "Email is required.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

export function validateRequired(value, message) {
  if (!value.trim()) {
    return message;
  }

  return null;
}

export function validatePassword(password) {
  if (!password) {
    return "Password is required.";
  }

  if (password.length < PASSWORD_RULES.MIN_LENGTH) {
    return `Password must be at least ${PASSWORD_RULES.MIN_LENGTH} characters`;
  }

  if (PASSWORD_RULES.REQUIRE_UPPERCASE && !/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter";
  }

  if (PASSWORD_RULES.REQUIRE_LOWERCASE && !/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter";
  }

  if (PASSWORD_RULES.REQUIRE_NUMBER && !/[0-9]/.test(password)) {
    return "Password must contain at least one number";
  }

  if (
    PASSWORD_RULES.REQUIRE_SPECIAL_CHARACTER &&
    !/[!@#$%^&*]/.test(password)
  ) {
    return "Password must contain at least one special character";
  }

  return null;
}

export function validateConfirmPassword(password, confirmPassword) {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }
  
  return null;
}
