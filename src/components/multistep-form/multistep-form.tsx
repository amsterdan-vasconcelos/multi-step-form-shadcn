"use client";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import { useMultistepForm } from "./useMultistepForm";

function MultistepForm() {
  const { form, CurrentStepComponet, isInitStep, isLastStep, next, prev } =
    useMultistepForm();

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          next();
        }}
      >
        <CurrentStepComponet />

        <div className="flex items-center gap-2 mt-8">
          {!isInitStep && (
            <Button
              className="flex-1"
              variant={"outline"}
              type="button"
              onClick={prev}
            >
              Prev
            </Button>
          )}

          <Button className="flex-1" type="submit">
            {isLastStep ? "Submit" : "Next"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default MultistepForm;
