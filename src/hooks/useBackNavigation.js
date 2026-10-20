import { useNavigate, useLocation } from "react-router-dom";

function useBackNavigation(fallback = "/") {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from;

  function goBack() {
    const destination = from || fallback;
    navigate(destination);
  }

  return {
    goBack,
  };
}

export default useBackNavigation;
