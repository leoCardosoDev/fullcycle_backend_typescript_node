import { FieldsErrors } from './validator_fields_interface'

export class ValidationError extends Error {}

export class EntityValidationError extends Error {
  constructor(public error: FieldsErrors, message = 'Validation Error') {
    super(message)
  }

  count() {
    return Object.keys(this.error).length
  }
}
