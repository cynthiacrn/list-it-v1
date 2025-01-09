'use client'

import React from 'react'
import { useRouter } from "next/navigation"
import { useForm } from '@/hooks/useForm'
import FormControl from '@/components/forms/FormControl'
import TextField from '@/components/forms/TextField'
import Button from '@/components/forms/Button'
import { createListItemSchema } from "@/schemas/list";

export default function CreateListItemForm({ listSlug, onSubmit }) {
  const router = useRouter()
  const form = useForm({
    schema: createListItemSchema,
    onSubmit: handleSubmit,
  })

  async function handleSubmit(formValues) {
    try {
      await onSubmit?.({ listSlug, ...formValues })
      router.push(`/wishlists/${listSlug}`)
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
          <TextField type="url" placeholder="Ex: https://www.amazon.fr/LEGO-10343-tbd-10343/dp/B01N6CJ1QW/?_encoding=UTF8&pd_rd_w=CfdcH&content-id=amzn1.sym.f1302343-9817-4aee-a01c-cc93646e7acc&pf_rd_p=f1302343-9817-4aee-a01c-cc93646e7acc&pf_rd_r=EXS8AWD6T3B5622WMFTP&pd_rd_wg=nzJAS&pd_rd_r=381841c8-a053-4e02-88e3-a7c46e051c4a&ref_=pd_hp_d_btf_crs_zg_bs_322086011" {...form.register("url")} />
        </FormControl>

        <FormControl required label="Product's name" error={form.getError("name")}>
          <TextField type="text" placeholder="Ex: LEGO Botanique L’orchidée Miniature" {...form.register("name")} />
        </FormControl>

        <FormControl label="Product's complementary informations" error={form.getError("description")}>
          <TextField type="textarea" placeholder="Ex: Décoration intérieure sous forme de fleurs artificielles – Laissez libre cours à votre créativité avec ce set LEGO Botanique pour adultes L’orchidée miniature, qui invite les fleuristes en herbe à créer et exposer une fleur LEGO" {...form.register("description")} />
        </FormControl>

        <FormControl label="Product's price" error={form.getError("price")}>
          <TextField type="number" placeholder="Ex: 29.79$" {...form.register("price", { valueAsNumber: true })} />
        </FormControl>

        <p className="text-xs text-atomic-tangerine">{form.getError("root.serverError")}</p>
      </div>

      <div className="flex flex-col items-center w-full">
        <Button type="submit">Create</Button>
      </div>
    </form>
  )
}
