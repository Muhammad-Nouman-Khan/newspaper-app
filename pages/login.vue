<template>
  <div class="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
    <div
      class="border-2 border-primary flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-xl overflow-hidden"
    >
      <div class="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
        <div class="w-full">
          <form @submit.prevent="handleLogin">
            <div class="space-y-4">
              <div class="text-center lg:text-left mb-6">
                <h1 class="text-5xl !font-bold heading mb-2">NuxtNews</h1>
                <p class="text-sm opacity-70 italic">
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
                    required
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
                    <span to="/" class="text-primary hover:underline cursor-pointer">
                      Create one
                    </span>
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
