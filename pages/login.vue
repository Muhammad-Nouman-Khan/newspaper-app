<template>
  <!-- <div class="min-h-screen flex items-center justify-center py-24 bg-base-100">
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
  </div> -->
  <div class="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
    <div
      class="border-2 border-primary flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-xl overflow-hidden"
    >
      <div class="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
        <div class="w-full">
          <form @submit.prevent="handleLogin">
            <div class="space-y-4">
              <div class="text-center lg:text-left mb-6">
                <h1 class="text-3xl font-bold heading mb-2">NuxtNews</h1>
                <p class="text-sm opacity-70">
                  Sign in to your account to continue.
                </p>
              </div>
              <div class="flex flex-col gap-3">
                <div class="form-control w-full space-y-2">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    v-model="email"
                    type="email"
                    placeholder="hello@example.com"
                    class="input input-bordered w-full"
                  />
                </div>
                <div class="form-control w-full space-y-2">
                  <label class="label">
                    <span class="label-text">Password</span>
                  </label>
                  <input
                    v-model="password"
                    type="password"
                    placeholder="••••••••"
                    class="input input-bordered w-full"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary w-full mt-4">
                  Sign In
                </button>
                <div class="text-center mt-4">
                  <p class="text-sm">
                    Don't have an account?
                    <NuxtLink to="/signup" class="text-primary hover:underline">
                      Create one
                    </NuxtLink>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        class="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center p-8"
      >
        <div class="max-w-md text-center">
          <img
            src="../assets/signin.png"
            alt="sign in image"
            class="w-full h-full object-cover rounded-lg shadow-2xl"
          />
          <div class="space-y-3 mt-8">
            <h2 class="text-xl font-semibold">
              Stay Informed with In-Depth Reporting
            </h2>
            <p class="opacity-70">
              Get access to trusted news, analysis, and stories from around the
              globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

definePageMeta({
  layout: "blank",
});

const { login } = useAuth();
const router = useRouter();
const email = ref("");
const password = ref("");

const handleLogin = () => {
  if (email.value) {
    login(email.value);
    router.push("/");
  } else {
    alert("Please enter an email.");
  }
};
</script>
