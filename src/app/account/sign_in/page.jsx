import { credentialSignIn } from '@/actions/auth/signIn'
import SignInForm from '@/components/SignInForm'

export default function SignInPage() {
  return (
    <div>
      <div className="flex flex-col w-screen h-screen">
        <div className="mt-24 flex flex-col items-center gap-10 justify-center">
          <h1 className="text-7xl font-medium">Login</h1>
          <SignInForm onSubmit={credentialSignIn} />
        </div>
      </div>
    </div>
  )
}
