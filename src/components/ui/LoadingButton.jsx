import LoadingSpinner from "./LoadingSpinner";

// Component button yang bisa menampilkan loading spinner
function LoadingButton({ loading, children, ...props }) {
  return (
    <button disabled={loading} {...props}>
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
}

export default LoadingButton;
