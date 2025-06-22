<template>
  <div class="min-h-screen flex items-center justify-center py-24 bg-base-100">
    <div
      class="max-w-md w-full space-y-8 p-10 bg-base-200 rounded-xl shadow-lg border border-base-300"
    >
      <div>
        <h2
          class="mt-6 text-center text-3xl font-bold text-base-content heading"
        >
          Sign In
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm space-y-4">
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="input input-bordered w-full"
            placeholder="Email address"
          />

          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="input input-bordered w-full"
            placeholder="Password"
          />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="checkbox checkbox-primary"
            />
            <label
              for="remember-me"
              class="ml-2 block text-sm text-base-content/80"
            >
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-primary hover:text-primary-focus"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit" class="btn btn-primary w-full">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const handleLogin = () => {
  alert("Login functionality not implemented yet.");
};
</script>
