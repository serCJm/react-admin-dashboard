import React from "react";

export const AuthContext = React.createContext({
  authenticated: true,
  handleAuthentication: () => {} // default value
});
