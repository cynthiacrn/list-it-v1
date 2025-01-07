import { credentialSignIn } from '@/actions/signIn'
import SignInForm from '@/components/SignInForm'

export default function SignInPage() {
  return (
    <div>
      <div className="flex flex-col w-screen h-screen">
        <div className="mt-48 flex flex-col items-center gap-10 justify-center">
          <h1 className="text-7xl font-bold">Login</h1>
          <SignInForm onSubmit={credentialSignIn} />
        </div>
      </div>
    </div>
  )
}
