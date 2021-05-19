import { useEffect } from "react";

const GoogleAuth = () => {
  useEffect(() => {
    // Load Google API library
    window.gapi.load("client:auth2", () => {
      // Initialize the library
      window.gapi.client.init({
        clientId:
          "322059734492-bj8ljm3aboh7echc6kcvgep2uknhnai9.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }, []);
  return <div>Google Auth</div>;
};

export default GoogleAuth;
