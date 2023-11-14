export enum Routes {
  signup = "signup",
  login = "login",
  main = "main",
  profile = "profile",
  map = "map",
}

export const pages = {
  [Routes.login]: () => "/login",
  [Routes.signup]: () => "/signup",
  [Routes.main]: () => "/",
  [Routes.profile]: () => "/profile",
  [Routes.map]: () => "/map",
};
