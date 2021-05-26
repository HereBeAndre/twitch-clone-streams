import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setUserSignIn, setUserSignOut } from "../store/actions";

const GoogleAuth = ({ isSignedIn, setUserSignIn, setUserSignOut }) => {
  const [auth, setAuth] = useState(null);
  // Callback to listen for Sign In && Sign Out through store
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onAuthChange = (isSignedIn) => {
    return isSignedIn ? setUserSignIn() : setUserSignOut();
  };

  const onSignIn = () => {
    setAuth(auth.signIn());
  };

  const onSignOut = () => {
    setAuth(auth.signOut());
  };

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
          onAuthChange(auth.isSignedIn.get());
          auth?.isSignedIn?.listen(onAuthChange);
        });
    });
  }, [auth?.isSignedIn, onAuthChange]);

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return;
    }
    return isSignedIn ? (
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

const mapStateToProps = (state) => {
  // TODO: Fix auth flow
  return { isSignedIn: state.isSignedIn };
};

export default connect(mapStateToProps, { setUserSignIn, setUserSignOut })(
  GoogleAuth
);
