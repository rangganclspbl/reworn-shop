async function login({ email, password }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const registeredEmail = "rangga@gmail.com";
  const registeredPassword = "123456";

  if (email !== registeredEmail || password !== registeredPassword) {
    throw new Error("Incorrect email or password.");
  }

  return {
    success: true,
  };
}

async function signup({ name, email, password }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Temporary logic — will be replaced with backend API later.
  if (!name || !email || !password) {
    throw new Error("Name, email, and password are required.");
  }

  return {
    success: true,
    user: {
      name,
      email,
    },
  };
}

async function forgotPassword({ email }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const registeredEmail = "rangga@gmail.com";

  if (email !== registeredEmail) {
    throw new Error("Email is not registered!");
  }

  return {
    success: true,
  };
}

async function verifyCode({ code }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const correctCode = "123456";

  if (code !== correctCode) {
    throw new Error("Invalid verification code");
  }

  return {
    success: true,
  };
}

async function resendVerificationCode() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    success: true,
  };
}

async function resetPassword({ password, confirmPassword }) {
  if (confirmPassword !== password) {
    throw new Error("Passwords do not match");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    success: true,
    message: "Password successfully updated",
  };
}

export {
  login,
  signup,
  forgotPassword,
  verifyCode,
  resetPassword,
  resendVerificationCode,
};
