import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/zod/auth-schemas";
import { useSignIn } from "@/hooks/use-auth";
import { CircleX } from "lucide-react";
import { DropdownMenuSeparator } from "../../ui/dropdown-menu";

const LoginForm = ({ close }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { mutate: login, isError, error } = useSignIn();

  const onSubmit = (data) => {
    login(data, {
      onSuccess: () => {
        close();
      },
    });
  };

  return (
    <div className="flex flex-col gap-3 z-10 p-3">
      <div className="flex justify-between items-center">
        <h4 className="text-[16px]">Login to your account</h4>
        <CircleX
          className="h-6 w-6 cursor-pointer opacity-75 hover:opacity-100"
          onClick={() => close()}
        />
      </div>
      <DropdownMenuSeparator></DropdownMenuSeparator>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 space-y-2"
      >
        <Input
          {...register("emailOrUsername")}
          placeholder="Email or Username"
        />
        <Input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
        {isError && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
