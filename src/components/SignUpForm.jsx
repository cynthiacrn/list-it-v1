'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from '@/hooks/useForm'
import FormControl from '@/components/forms/FormControl'
import TextField from '@/components/forms/TextField'
import Button from '@/components/forms/Button'
import { signUpSchema } from '@/schemas/auth'
import Link from "next/link";

export default function SignUpForm({ onSubmit }) {
  const router = useRouter()
  const form = useForm({
    schema: signUpSchema,
    onSubmit: handleSubmit,
  })

  async function handleSubmit(formValues) {
    try {
      await onSubmit?.(formValues)
      router.push("/wishlists")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={form.handleSubmit} className="flex flex-col gap-12 items-start text-sm min-w-[400px]">
      <div className="flex flex-col gap-4 items-start text-sm w-full">
        <FormControl label="First Name" error={form.getError("firstName")}>
          <TextField type="text" {...form.register("firstName")} />
        </FormControl>

        <FormControl label="Last Name" error={form.getError("lastName")}>
          <TextField type="text" {...form.register("lastName")} />
        </FormControl>

        <FormControl required label="Email" error={form.getError("email")}>
          <TextField type="text" {...form.register("email")} />
        </FormControl>

        <FormControl required label="Password" error={form.getError("password")}>
          <TextField type="password" {...form.register("password")} />
        </FormControl>
      </div>

      <div className="flex flex-col items-center w-full">
        <Button type="submit">Register</Button>
        <div className="flex flex-row py-3 px-4 justify-center w-full gap-1">
          Already have an account?
          <Link
            href="/account/sign_in"
            className="text-mauve underline"
          >
            Login here.
          </Link>
        </div>
      </div>
    </form>
  )
}
