import { useState } from "react";
import {
  MultistepFormType,
  stepFields,
  defaultValues,
  stepComponents,
} from "./multistep-form-config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/schemas/register-form";

export const useMultistepForm = () => {
  const [step, setStep] = useState(0);
  const isLastStep = step === stepFields.length - 1;
  const isInitStep = step === 0;

  const CurrentStepComponet = stepComponents[step];

  const form = useForm<MultistepFormType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  });

  const onSubmit = (values: MultistepFormType) => console.log(values);

  const next = async () => {
    const isValid = await form.trigger(stepFields[step], { shouldFocus: true });
    if (!isValid) return;

    if (!isLastStep) return setStep((p) => p + 1);

    await form.handleSubmit(onSubmit)();
  };

  const prev = () => {
    if (isInitStep) return;

    setStep((p) => p - 1);
  };

  return {
    form,
    CurrentStepComponet,
    isInitStep,
    isLastStep,
    next,
    prev,
  };
};
