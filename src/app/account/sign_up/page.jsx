import SignUpForm from "@/components/SignUpForm";
import { credentialSignUp } from "@/actions/signUp";

export default function SignInPage() {
  return (
    <div>
      <h1>Sign Up</h1>
      <SignUpForm onSubmit={credentialSignUp} />
    </div>
  )
}
