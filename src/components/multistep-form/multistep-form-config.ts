import { z } from "zod";

import { registerFormSchema } from "@/schemas/register-form";
import UsernameStep from "./steps/username";
import EmailStep from "./steps/email";
import PasswordStep from "./steps/password";

export type MultistepFormType = z.infer<typeof registerFormSchema>;

export const defaultValues: MultistepFormType = {
  username: "",
  email: "",
  password: {
    value: "",
    confirmValue: "",
  },
};

export const stepFields: (keyof MultistepFormType)[] = [
  "username",
  "email",
  "password",
];

export const stepComponents = [UsernameStep, EmailStep, PasswordStep];
