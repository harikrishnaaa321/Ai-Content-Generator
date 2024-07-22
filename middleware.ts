import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define which routes should be protected
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',  // Catch /dashboard and all its sub-routes
  '/',
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect(); // Protect matching routes
});

// Middleware matcher configuration
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',  // Catch-all route for pages
    '/dashboard(.*)',          // Ensure /dashboard and sub-routes are covered
    '/',                       // Home route
    '/(api|trpc)(.*)',         // API routes
  ],
};
