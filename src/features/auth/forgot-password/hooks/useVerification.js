import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { verifyCode } from "../../services/AuthService";
import { resendVerificationCode } from "../../services/AuthService";
import { AUTH_ROUTES, VERIFICATION_CODE_EXPIRY } from "../../../../constants/auth";

function useVerification() {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(VERIFICATION_CODE_EXPIRY);
  const [isResending, setIsResending] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // setInterval menjalankan kode di dalamnya setiap 1 detik
    const timer = setInterval(() => {
      // Kurangi waktu sebanyak 1 detik
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    // Cleanup:
    // Hentikan interval ketika component sudah tidak digunakan
    return () => {
      clearInterval(timer);
    };
  }, []);

  function handleCodeChange(event) {
    setCode(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");

    setLoading(true);

    try {
      await verifyCode({ code });
      navigate(AUTH_ROUTES.NEW_PASSWORD);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    setError("");

    setIsResending(true);

    try {
      await resendVerificationCode();
      setTimeLeft(VERIFICATION_CODE_EXPIRY);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsResending(false);
    }
  }

  const handleErrorHide = useCallback(() => {
    setError("");
  }, []);

  return {
    code,
    setCode,
    timeLeft,
    isResending,
    loading,
    error,
    handleCodeChange,
    handleSubmit,
    handleResend,
    handleErrorHide,
  };
}

export default useVerification;
