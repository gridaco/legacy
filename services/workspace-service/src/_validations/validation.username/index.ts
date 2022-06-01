import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from "class-validator";
import { prevalidate } from "@policies/bridged-valid-username";

export function IsValidUsername(validationOptions?: ValidationOptions) {
  return function(object: { [key: string]: any }, propertyName: string) {
    registerDecorator({
      name: "isValidUsername",
      target: object.constructor,
      propertyName: propertyName,
      options: {
        ...validationOptions,
        message: (args: ValidationArguments) => {
          return `"${args.value}" cannot be used as an username`;
        },
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          return prevalidate(value).valid;
        },
      },
    });
  };
}
