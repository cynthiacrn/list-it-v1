import { useForm as useRHForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

function getNestedValue(obj, path) {
  const keys = path.split('.')
  return keys.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj)
}

export function useForm({ schema, onSubmit, ...rest }) {
  if (!schema) {
    throw new Error("useForm: Missing schema")
  }

  const form = useRHForm({
    mode: "onBlur",
    ...rest,
    resolver: zodResolver(schema),
  })

  const hasErrors = Object.keys(form.formState.errors).length > 0

  const getError = (fieldName) => {
    const fieldError = getNestedValue(form.formState.errors, fieldName)
    return fieldError?.message
  }

  const handleSubmit = onSubmit
    ? form.handleSubmit(onSubmit)
    : form.handleSubmit(() => {})

  return {
    ...form,
    hasErrors,
    getError,
    handleSubmit
  }
}
