import { ZodError } from "zod"

function createErrorResponse(code, message, details = {}, statusCode = 400) {
  return {
    code,
    message,
    details,
    statusCode,
    timestamp: new Date().toISOString(),
  }
}

export function formatZodErrors(error) {
  const details = error.errors.reduce((acc, err) => {
    acc[err.path[0]] = err.message
    return acc
  }, {})

  return createErrorResponse(
    "validation_error",
    "Validation failed",
    details,
    422
  )
}

export function formatCustomErrors(error) {
  return createErrorResponse(
    "server_error",
    error.message || "An unknown error occurred",
    {},
    500
  )
}

export function formatUnexpectedError() {
  return createErrorResponse(
    "unexpected_error",
    "An unexpected error occurred",
    {},
    500
  )
}

export function formatErrors(error) {
  if (error instanceof ZodError) {
    return formatZodErrors(error)
  }

  if (error instanceof Error) {
    return formatCustomErrors(error)
  }

  return formatUnexpectedError()
}
