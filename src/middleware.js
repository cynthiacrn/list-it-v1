import { auth } from "@/lib/auth"

export default auth((req) => {
  const isAuthenticated = !!req.auth
  const rootPageVisited = req.nextUrl.pathname === "/"
  const protectedPageVisited = !req.nextUrl.pathname.startsWith("/account/sign_")

  if (!isAuthenticated && protectedPageVisited && !rootPageVisited) {
    const newUrl = new URL("/account/sign_in", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }

  if (isAuthenticated && !protectedPageVisited) {
    const newUrl = new URL("/", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
