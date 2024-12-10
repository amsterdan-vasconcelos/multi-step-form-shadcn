import { z } from "zod";

export const registerFormSchema = z.object({
  username: z
    .string({ message: "Campo requerido." })
    .refine((s) => s.length >= 3 && s.length <= 18, {
      message: "O nome de usuário deve conter entre 3 e 18 caracteres.",
    }),
  email: z
    .string({ message: "Campo requerido." })
    .email({ message: "Email inválido." }),
  password: z
    .object({
      value: z
        .string({ message: "Campo requerido." })
        .min(6, { message: "A senha deve conter pelo menos 6 caracteres." }),
      confirmValue: z.string({ message: "Campo requerido." }),
    })
    .refine(({ value, confirmValue }) => value === confirmValue, {
      message: "As senhas devem coincidir.",
      path: ["confirmValue"],
    }),
});
