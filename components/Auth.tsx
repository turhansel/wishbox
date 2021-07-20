import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebaseClient from "../fireabase/client";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebaseClient.auth.GithubAuthProvider.PROVIDER_ID],
};

const Auth = () => {
  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth ={firebaseClient.auth()}
      />
    </div>
  );
};

export default Auth;
