import { credentialSignIn } from "@/actions/signIn";
import SignInForm from "@/components/SignInForm";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm onSubmit={credentialSignIn} />
    </div>
  )
}
