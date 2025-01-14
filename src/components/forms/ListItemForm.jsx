'use client'

import React from 'react'
import { useRouter } from "next/navigation"
import { useForm } from '@/hooks/useForm'
import FormControl from '@/components/forms/shared/FormControl'
import TextField from '@/components/forms/fields/TextField'
import Button from '@/components/shared/Button'
import { createListItemSchema } from "@/schemas/list";

export default function ListItemForm({ defaultValues = {}, onSubmit }) {
  const router = useRouter()
  const form = useForm({
    schema: createListItemSchema,
    onSubmit: handleSubmit,
    defaultValues,
  })

  async function handleSubmit(formValues) {
    try {
      await onSubmit?.(formValues)
    } catch (error) {
      form.setError('root.serverError', {
        message: "Failed to create wishlist",
      })
    }
  }

  return (
    <form onSubmit={form.handleSubmit} className="flex flex-col gap-12 items-start text-sm min-w-[400px]">
      <div className="flex flex-col gap-4 items-start text-sm w-full">
        <FormControl required label="Product's link" error={form.getError("url")}>
          <TextField type="url" placeholder="Ex: https://www.etsy.com/finger-painting-for-cats" {...form.register("url")} />
        </FormControl>

        <FormControl required label="Product's name" error={form.getError("name")}>
          <TextField type="text" placeholder="Ex: World’s Most Useless Gadget" {...form.register("name")} />
        </FormControl>

        <FormControl label="Product's complementary informations" error={form.getError("description")}>
          <TextField type="textarea" placeholder="Ex: Color: Royal Gold, Size: Too large for a normal shelf, Material: Titanium alloy with diamond dust" {...form.register("description")} />
        </FormControl>

        <FormControl label="Product's price" error={form.getError("price")}>
          <TextField type="number" step='0.01' placeholder="Ex: 29.79$" {...form.register("price", {
            valueAsNumber: true,
            setValueAs: (value) => parseFloat(value).toFixed(2) || null,
          })} />
        </FormControl>

        <p className="text-xs text-atomic-tangerine">{form.getError("root.serverError")}</p>
      </div>

      <div className="flex flex-col items-center w-full">
        <Button type="submit">Create</Button>
      </div>
    </form>
  )
}
