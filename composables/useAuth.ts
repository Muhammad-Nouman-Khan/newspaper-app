import { useState } from "#app";
import { computed } from "vue";

interface User {
  email: string;
}

export const useAuth = () => {
  const user = useState<User | null>("user", () => null);

  const isLoggedIn = computed(() => !!user.value);

  const login = (email: string) => {
    user.value = { email };
  };

  const logout = () => {
    user.value = null;
  };

  return {
    user,
    isLoggedIn,
    login,
    logout,
  };
};
