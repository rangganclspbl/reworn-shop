import "./Verification.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Verification() {
  const [code, setCode] = useState("")
  const navigate = useNavigate()

  function inputForm(event) {
    setCode(event.target.value);
  }

  async function handlesubmit(event) {
    event.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const correctCode = "123456"

      if (code === correctCode) {
        navigate('/new-password');
      } else {
        console.log('Wrong verification code!')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className="verification-page">
      <div className="verification-container">

        <div className="verification-logo">
          <h1>REWORN</h1>
          <span>SHOP</span>
        </div>

        <div className="verification-content">
          <h2>Verification code</h2>

          <p>
            Enter the verification code we sent to your email address.
          </p>

          <form className="verification-form" onSubmit={handlesubmit}>
            <div className="verification-form-group">
              <label htmlFor="verification-code">
                Verification code
              </label>

              <input
                type="text"
                id="verification-code"
                placeholder="Enter verification code"
                value={code}
                onChange={inputForm}
              />
            </div>

            <button type="submit" className="verification-button">
              Verify code
            </button>
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