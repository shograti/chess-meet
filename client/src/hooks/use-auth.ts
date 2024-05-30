import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../api/auth-api";

export function useSignUp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.signUp,
    onSuccess: () => {
      // Invalidate and refetch any queries as needed
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
}

export function useSignIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.signIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });
}

export function useAuth() {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: authApi.getMe,
  });
}

export function useLogOut() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.logOut,
    onSuccess: () => {
      // Here you could also clear any user data stored in your application's state or cache
      queryClient.removeQueries({ queryKey: ["userProfile"], exact: true });
    },
  });
}
