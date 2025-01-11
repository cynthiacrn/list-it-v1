import { credentialSignIn } from '@/actions/auth/signIn'
import SignInForm from '@/components/SignInForm'
import FormLayout from "@/components/forms/FormLayout";

export default function SignInPage() {
  return (
    <FormLayout title="Login" >
      <SignInForm onSubmit={credentialSignIn} />
    </FormLayout>
  )
}
