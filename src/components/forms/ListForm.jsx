'use client'

import React from 'react'
import { useRouter } from "next/navigation"
import { useForm } from '@/hooks/useForm'
import FormControl from '@/components/forms/shared/FormControl'
import TextField from '@/components/forms/fields/TextField'
import SwitchField from '@/components/forms/fields/SwitchField'
import Button from '@/components/shared/Button'
import { createListSchema } from "@/schemas/list";

export default function ListForm({ defaultValues = {}, onSubmit , buttonAction}) {
  const router = useRouter()
  const form = useForm({
    schema: createListSchema,
    onSubmit: handleSubmit,
    defaultValues,
  })

  async function handleSubmit(formValues) {
    try {
      await onSubmit?.({
        ...formValues,
        visibility: formValues.isPrivate ? "PRIVATE" : "PUBLIC"
      })
    } catch (error) {
      form.setError('root.serverError', {
        message: "Failed to create wishlist",
      })
    }
  }

  return (
    <form onSubmit={form.handleSubmit} className="flex flex-col gap-12 items-start text-sm min-w-[400px]">
      <div className="flex flex-col gap-4 items-start text-sm w-full">
        <FormControl required label="Name" error={form.getError("name")}>
          <TextField type="text" {...form.register("name")} />
        </FormControl>

        <FormControl label="Description" error={form.getError("description")}>
          <TextField type="textarea" {...form.register("description")} />
        </FormControl>

        <FormControl label="Make private" error={form.getError("isPrivate")}>
          <SwitchField {...form.register("isPrivate")} />
        </FormControl>

        <p className="text-xs text-atomic-tangerine">{form.getError("root.serverError")}</p>
      </div>

      <div className="flex flex-col items-center w-full">
        <Button type="submit">{buttonAction}</Button>
      </div>
    </form>
  )
}
