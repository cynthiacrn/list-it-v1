import SignUpForm from '@/components/forms/SignUpForm'
import { credentialSignUp } from '@/actions/auth/signUp'

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center gap-10 justify-center">
      <h1 className="text-7xl font-medium">Register</h1>
      <SignUpForm onSubmit={credentialSignUp} />
    </div>
  )
}
