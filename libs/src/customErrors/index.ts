import { ValidationError } from 'express-validator'
import { ResponseBody } from '..'

export abstract class CustomError extends Error {
  abstract statusCode: number

  constructor(message: string) {
    super(message)

    // Becuase we are extending a build in class we need the prototypes to work with
    Object.setPrototypeOf(this, new.target.prototype)
  }

  abstract serializeErrorMsg(): ResponseBody
}

export class RequestValidationError extends CustomError {
  statusCode = 400

  constructor(message: string, public errors: ValidationError[]) {
    super(message)
    this.errors = errors
  }

  serializeErrorMsg() {
    const formattedErrors = this.errors.map((error) => {
      return `${error.param}: ${error.msg}`
    })

    return {
      message: this.message,
      errors: formattedErrors,
    }
  }
}

export class DataBaseConnectionError extends CustomError {
  statusCode = 500

  constructor(message: string, private errors: string[]) {
    super(message)
    this.errors = errors
  }

  serializeErrorMsg() {
    return {
      message: this.message,
      errors: this.errors,
    }
  }
}

export class NotFoundError extends CustomError {
  statusCode = 404

  constructor(message: string, private errors: string[]) {
    super(message)
    this.errors = errors
  }

  serializeErrorMsg() {
    return {
      message: this.message,
      errors: this.errors,
    }
  }
}

export class NotAuthorizedError extends CustomError {
  statusCode = 401
  constructor(message: string, private errors: string[]) {
    super(message)
    this.errors = errors
  }

  serializeErrorMsg(): ResponseBody {
    return {
      message: this.message,
      errors: this.errors,
    }
  }
}

export class GeneralError extends CustomError {
  constructor(
    public statusCode: number,
    message: string,
    private errors: string[]
  ) {
    super(message)
    this.errors = errors
  }

  serializeErrorMsg(): ResponseBody {
    return {
      message: this.message,
      errors: this.errors,
    }
  }
}
