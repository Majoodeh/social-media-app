import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldError,
} from "../../components/ui/field";
import { Input } from "../../components/ui/input";
import { SignUpValidationSchema } from "../../lib/validation/index";
import { Button } from "../../components/ui/button";
import Loader from "../../components/ui/shared/Loader";
import { Link } from "react-router-dom";
import { createUserAccount } from "@/lib/appwrite/api";
const SignUpForm = () => {
  const isLoading = false;
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

  async function onSubmit(values: z.infer<typeof SignUpValidationSchema>) {
    const newUser = await createUserAccount(values);
    console.log(newUser);
  }
  console.log(form.formState.errors);

  return (
    <>
      <div className="flex flex-col items-center px-4 w-full sm:w-[420px]">
        <img src="/images/logo.svg" alt="logo" className="mb-4 w-32 h-32" />
        <h2 className="pt-4 h3-bold md:h2bold">Create a new account</h2>

        <p className="pt-2 text-light-3 small-medium md:base-regular">
          Join our community today!
        </p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center w-full"
        >
          <FieldSet className="w-full max-w-xs">
            <FieldGroup className="flex flex-col gap-5 mt-4 w-full">
              {/*  Name */}
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>

                <Input
                  id="name"
                  type="text"
                  placeholder="Mark"
                  {...form.register("name")}
                />
                <FieldError className="text-red-600 text-sm transition-all duration-300 ease-in-out">
                  {form.formState.errors.name?.message}
                </FieldError>
              </Field>
              {/*  Username */}
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>

                <Input
                  id="username"
                  type="text"
                  placeholder="Mark_920"
                  {...form.register("username")}
                />
                <FieldError className="text-red-600 text-sm transition-all duration-300 ease-in-out">
                  {form.formState.errors.username?.message}
                </FieldError>
              </Field>
              {/*  Email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>

                <Input
                  id="email"
                  type="email"
                  placeholder="mark@example.com"
                  {...form.register("email")}
                />
                <FieldError className="text-red-600 text-sm transition-all duration-300 ease-in-out">
                  {form.formState.errors.email?.message}
                </FieldError>
              </Field>
              {/*  Password */}
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
                <Input
                  id="password"
                  type="password"
                  placeholder=""
                  {...form.register("password")}
                />
                <FieldError className="text-red-600 text-sm transition-all duration-300 ease-in-out">
                  {form.formState.errors.password?.message}
                </FieldError>
              </Field>
              <Button
                type="submit"
                className="hover:bg-primary-500/80 w-full cursor-pointer shad-button_primary"
              >
                {isLoading ? (
                  <div className="flex-center gap-2">
                    <Loader /> Loading...
                  </div>
                ) : (
                  "Sign Up"
                )}
              </Button>
              <p className="text-light-3 text-center small-medium md:base-regular">
                Already have an account?
                <Link
                  to="/sign-in"
                  className="ml-1 text-primary-500 text-small-semibold"
                >
                  Log in
                </Link>
              </p>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
