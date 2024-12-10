import { z } from "zod";

import { registerFormSchema } from "@/schemas/register-form";

export type RegisterFormType = z.infer<typeof registerFormSchema>;

export const defaultValues: RegisterFormType = {
  username: "",
  email: "",
  password: {
    value: "",
    confirmValue: "",
  },
};
