'use client'

import React from 'react'
import { useRouter } from "next/navigation"
import { useForm } from '@/hooks/useForm'
import FormControl from '@/components/forms/FormControl'
import TextField from '@/components/forms/TextField'
import Button from '@/components/forms/Button'
import { signInSchema } from '@/schemas/auth'
import Link from "next/link"

export default function SignInForm({ onSubmit }) {
  const router = useRouter()
  const form = useForm({
    schema: signInSchema,
    onSubmit: handleSubmit,
  })

  async function handleSubmit(formValues) {
    try {
      await onSubmit?.(formValues)
      router.push("/wishlists")
    } catch (error) {
      form.setError('root.serverError', {
        message: "Invalid credentials",
      })
    }
  }

  return (
    <form onSubmit={form.handleSubmit} className="flex flex-col gap-12 items-start text-sm min-w-[400px]">
      <div className="flex flex-col gap-4 items-start text-sm w-full">
        <FormControl required label="Email" error={form.getError("email")}>
          <TextField type="text" {...form.register("email")} />
        </FormControl>

        <FormControl required label="Password" error={form.getError("password")}>
          <TextField type="password" {...form.register("password")} />
        </FormControl>
        <p className="text-xs text-atomic-tangerine">{form.getError("root.serverError")}</p>
      </div>

      <div className="flex flex-col items-center w-full">
        <Button type="submit">Login</Button>
        <div className="flex flex-row py-3 px-4 justify-center w-full gap-1">
          Don't have an account?
          <Link
            href="/account/sign_up"
            className="text-mauve underline"
          >
            Register here.
          </Link>
        </div>
      </div>
    </form>
  )
}
