import { credentialSignIn } from '@/actions/auth/signIn'
import SignInForm from '@/components/forms/SignInForm'
import FormLayout from '@/components/forms/shared/FormLayout'

export default function SignInPage() {
  return (
    <FormLayout title="Login" >
      <SignInForm onSubmit={credentialSignIn} />
    </FormLayout>
  )
}
