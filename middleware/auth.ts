export default defineNuxtRouteMiddleware((to) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn.value && to.path === "/admin") {
    return navigateTo("/login");
  }
});
