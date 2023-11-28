import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // aqui dejo publica la ruta que quiera dejar piublica
  publicRoutes: ['/']
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
  


