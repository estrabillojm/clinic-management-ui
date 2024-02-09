const apiUrl = () => {
    if (import.meta.env.DEV) {
      return "http://localhost:5000/api/v1";
    }
    if (import.meta.env.VITE_APP_ENV === "dev") {
      return "https://DEVELOPMENT URL HERE**";
    }
    // ADD ANOTHER ENV IF NEED // STAGING OR UAT, PRODUCTION
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
