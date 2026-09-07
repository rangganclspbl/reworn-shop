import { useEffect } from "react";
import "../FormComponents.css";

// Component untuk menampilkan pesan error
function ErrorMessage({ children, onHide }) {
  useEffect(() => {
    // Error akan hilang setelah 2 detik
    const timer = setTimeout(() => {
      onHide();
    }, 2000);

    // Bersihkan timer ketika component berubah/dihapus
    return () => clearTimeout(timer);
  }, [children, onHide]);
  return <p className="error-message">{children}</p>;
}

export default ErrorMessage;