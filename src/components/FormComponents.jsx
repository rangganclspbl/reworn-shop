import "./FormComponents.css";
import { useEffect } from "react";
// Component untuk menampilkan animasi loading
function LoadingSpinner() {
  return <span className="loading-spinner"></span>;
}

// Component button yang bisa menampilkan loading spinner
function LoadingButton({ loading, children, ...props }) {
  return (
    <button disabled={loading} {...props}>
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
}

// Component untuk menampilkan pesan error
function ErrorMessage({ children, onHide }) {
  useEffect(() => {
    // Error akan hilang setelah 10 detik
    const timer = setTimeout(() => {
      onHide();
    }, 2000);

    // Bersihkan timer ketika component berubah/dihapus
    return () => clearTimeout(timer);
  }, [children, onHide]);
  return <p className="error-message">{children}</p>;
}

export { LoadingSpinner, LoadingButton, ErrorMessage };
