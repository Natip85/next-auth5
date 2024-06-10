/**
 *An array of routes excessible to public
 *These routes do not require authentication
 *@type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];
/**
 *An array of routes used for authentication
 *These routes will redirect login users to /settings
 *@type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];
/**
 *The prefix for api authentication routes
 *Routes that start wihtthis prefix are used for api authentication peurposes
 *@type {string}
 */
export const apiAuthPrefix = "/api/auth";
/**
 *The defualt redirect path after logging in
 *@type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
