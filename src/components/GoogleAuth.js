import { useEffect, useState } from "react";

const GoogleAuth = () => {
  const [auth, setAuth] = useState(null);
  const [isUserSignedIn, setIsUserSignedIn] = useState(null);

  // Callback to listen for Sign In && Sign Out user
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onAuthChange = () => {
    setIsUserSignedIn(auth.isSignedIn.get());
  };

  const onSignIn = () => {
    setAuth(auth.signIn());
  };

  const onSignOut = () => {
    setAuth(auth.signOut());
  };

  console.log(auth, isUserSignedIn);

  useEffect(() => {
    // Load Google API library
    window.gapi.load("client:auth2", () => {
      // Initialize the library - init returns a Promise
      window.gapi.client
        .init({
          clientId: "placeholder",
          scope: "email",
        })
        .then(async () => {
          const authInstance = await window.gapi.auth2.getAuthInstance();
          await setAuth(authInstance);
          setIsUserSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, [auth?.isSignedIn, onAuthChange]);

  const renderAuthButton = () => {
    if (isUserSignedIn === null) {
      return;
    }
    return isUserSignedIn ? (
      <button className="ui red google button" onClick={onSignOut}>
        <i className="ui google icon"></i>
        Sign Out
      </button>
    ) : (
      <button className="ui red google button" onClick={onSignIn}>
        <i className="ui google icon"></i>
        Sign In
      </button>
    );
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
