import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { SignUpValidationSchema } from "../../lib/validation";
import { Button } from "../../components/ui/button";

const SignUpForm = () => {
  //! what does useForm do?
  // useForm isto manage the sate, validation and submission of a form.
  // it returns an object with methods and properties to manage the form. like register, handleSubmit, formState.

  //? Define the form
  //! The following code is:
  //1. using useForm to create a form with the SignUpValidationSchema as the validation schema and default values for the form fields.
  //2. the resolver is used to connect the validation schema with the form, it will validate the form values against the schema and return the errors if there are any.
  //3. the defaultValues is used to set the initial values of the form fields, in this case we are setting them to empty strings.
  //! useFrom<...> :
  // it is used to specify the type of the form values, in this case we are using z.infer to infer the type from the SignUpValidationSchema.

  const form = useForm<z.infer<typeof SignUpValidationSchema>>({
    resolver: zodResolver(SignUpValidationSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <>
      <div className="flex flex-col items-center px-4 w-full sm:w-[420px]">
        <img src="/images/logo.svg" alt="logo" className="mb-4 w-32 h-32" />
        <h2 className="pt-5 sm:pt-12 h3-bold md:h2bold">
          Create a new account
        </h2>

        <p className="pt-2 text-light-3 small-medium md:base-regular">
          Join our community today!
        </p>

        <FieldSet className="w-full max-w-xs">
          <FieldGroup className="flex flex-col gap-5 mt-4 w-full">
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <FieldDescription>Enter your name.</FieldDescription>
              <Input id="name" type="text" placeholder="Max" />
            </Field>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
              <Input id="username" type="text" placeholder="Max_920" />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <FieldDescription>Enter your email address.</FieldDescription>
              <Input id="email" type="email" placeholder="max@example.com" />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="shad-input"
              />
            </Field>
            <Button
              type="submit"
              className="hover:bg-primary-500/80 w-full cursor-pointer shad-button_primary"
            >
              Sign Up
            </Button>
          </FieldGroup>
        </FieldSet>
      </div>
    </>
  );
};

export default SignUpForm;
