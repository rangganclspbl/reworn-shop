function PasswordField({
  id,
  label,
  placeholder,
  value,
  onChange,
  showPassword,
  onToggleVisibility,
  showToggle = false,
}) {
  return (
    <div className="auth-form-group">
      <label htmlFor={id}>{label}</label>

      <input
        type={showPassword ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {showToggle && (
        <button
          type="button"
          className="show-password-button"
          onClick={onToggleVisibility}
        >
          {showPassword ? "Hide password" : "Show password"}
        </button>
      )}
    </div>
  );
}

export default PasswordField;