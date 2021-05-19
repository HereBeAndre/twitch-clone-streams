import { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    // Load Google API library
    window.gapi.load("client:auth2", () => {
      // Initialize the library - init returns a Promise
      window.gapi.client
        .init({
          clientId:
            "322059734492-bj8ljm3aboh7echc6kcvgep2uknhnai9.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
        });
    });
  }, []);

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return <div>Don't know if we're signed in</div>;
    }
    return isSignedIn ? <div>I'm signed in</div> : <div>Not signed in</div>;
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
