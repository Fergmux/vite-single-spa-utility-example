declare module '@simplifi/auth' {
  let signIn: any
  let signOut: any
  let getAccessToken: any
  let SIMPLIFI_TOKEN_KEY: any
  let bearerToken: any
  let SIMPLIFI_ACCESS_TOKEN_KEY: any
  let retrieveAccessToken: any
  export {
    signIn,
    signOut,
    getAccessToken,
    SIMPLIFI_TOKEN_KEY,
    bearerToken,
    SIMPLIFI_ACCESS_TOKEN_KEY,
    retrieveAccessToken,
  }
}

declare module '@simplifi/oidc-auth' {
  let signIn: any
  let signOut: any
  let getAccessToken: any
  let SIMPLIFI_TOKEN_KEY: any
  let oidcSignInCallback: any
  let retrieveEnvironmentSecrets: any
  let bearerToken: any
  export {
    signIn,
    signOut,
    getAccessToken,
    SIMPLIFI_TOKEN_KEY,
    oidcSignInCallback,
    retrieveEnvironmentSecrets,
    bearerToken,
  }
}
