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

function PasswordStep() {
  const { control } = useFormContext<MultistepFormType>();

  return (
    <>
      <FormField
        control={control}
        name="password.value"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input autoFocus placeholder="Password" {...field} />
            </FormControl>
            <FormDescription>This is your secret password.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="password.confirmValue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input placeholder="Confirm Password" {...field} />
            </FormControl>
            <FormDescription>Confirm your secret password.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

export default PasswordStep;
