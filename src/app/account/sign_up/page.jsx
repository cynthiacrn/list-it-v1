import SignUpForm from "@/components/SignUpForm"
import { credentialSignUp } from "@/actions/signUp"

export default function SignUpPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="mt-24 flex flex-col items-center gap-10 justify-center">
        <h1 className="text-7xl font-medium">Register</h1>
        <SignUpForm onSubmit={credentialSignUp} />
      </div>
    </div>
  )
}
