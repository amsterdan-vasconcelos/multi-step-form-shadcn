import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { MultistepFormType } from "../multistep-form-config";

function EmailStep() {
  const { control } = useFormContext<MultistepFormType>();

  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input autoFocus type="email" placeholder="Email" {...field} />
          </FormControl>
          <FormDescription>This is your email adress.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default EmailStep;
