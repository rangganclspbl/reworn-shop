import "./Verification.css";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton, ErrorMessage } from "../components/FormComponents";

function Verification() {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
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

  function inputForm(event) {
    setCode(event.target.value);
  }

  async function handlesubmit(event) {
    event.preventDefault();

    setError("");

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const correctCode = "123456";

      if (code === correctCode) {
        navigate("/new-password");
      } else {
        setError("Invalid verification code");
        setCode("");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleResend() {
    setError("");

    setIsResending(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setTimeLeft(60);
    } catch (error) {
      console.log(error);
    } finally {
      setIsResending(false);
    }
  }

  const handleErrorHide = useCallback(() => {
    setError("");
  }, [])

  return (
    <main className="verification-page">
      <div className="verification-container">
        <div className="verification-logo">
          <h1>REWORN</h1>
          <span>SHOP</span>
        </div>

        <div className="verification-content">
          <h2>Verification code</h2>

          <p>Enter the verification code we sent to your email address.</p>

          <form className="verification-form" onSubmit={handlesubmit}>
            <div className="verification-form-group">
              <label htmlFor="verification-code">Verification code</label>

              <input
                type="text"
                id="verification-code"
                placeholder="Enter verification code"
                value={code}
                onChange={inputForm}
              />
              {error && (
                <ErrorMessage
                  className="error-message"
                  onHide={handleErrorHide}
                >
                  {error}
                </ErrorMessage>
              )}

              {timeLeft > 0 ? (
                <p className="code-expiry">Code expires in {timeLeft}s</p>
              ) : (
                <button
                  type="button"
                  className="resend-button"
                  onClick={handleResend}
                  disabled={isResending}
                >
                  {isResending ? "Sending..." : "Resend Code"}
                </button>
              )}
            </div>

            <LoadingButton
              type="submit"
              loading={loading}
              className="verification-button"
            >
              Verify code!
            </LoadingButton>
          </form>

          <div className="back-login">
            <a href="/login">Back to Login</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Verification;
