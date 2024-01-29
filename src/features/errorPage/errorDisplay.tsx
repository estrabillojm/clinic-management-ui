import { useNavigate } from "react-router-dom";

const ErrorPageDisplay = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h1 className="text-2xl font-bold mb-2">Something went wrong.</h1>
      <p className="text-lg text-gray-500 mb-6">
        An error occurred while loading the page.
      </p>
      <button className="text-blue-500 underline" onClick={handleNavigateBack}>
        Go Back
      </button>
    </div>
  );
};

export default ErrorPageDisplay;