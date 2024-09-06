const apiUrl = () => {
      return "http://docpiejuan.com:5000/api/v1";
      // return "http://localhost:5000/api/v1";
  };

  const environment = () => {
    if (import.meta.env.DEV) {
      return "development";
    }
    if (import.meta.env.VITE_APP_ENV === "dev") {
      return "development";
    }
    // ADD ANOTHER ENV IF NEED // STAGING OR UAT, PRODUCTION
  };


export const APP_CONFIG = {
    API_URL: apiUrl(),
    ENVIRONMENT: environment(),
  };
