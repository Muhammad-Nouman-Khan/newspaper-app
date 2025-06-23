<template>
  <header>
    <div class="w-full bg-base-300 px-6 py-2 text-sm">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <Icon name="uil:calendar" class="mr-2" />
            <span>{{ currentDate }}</span>
          </div>
          <div class="flex items-center gap-3">
            <span>New York, NY • 72°F</span>
            <span>•</span>
            <span class="cursor-pointer font-bold hover:text-primary"
              >Subscribe</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-full px-6 py-6 border-b border-base-300">
      <div class="container mx-auto flex">
        <div class="flex md:hidden items-center justify-center">
          <button
            @click="toggleMobileMenu"
            class="border h-8 p-2 rounded-lg border-gray-300 cursor-pointer hover:bg-base-300"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="flex flex-col flex-1 items-center justify-center lg:items-start"
        >
          <NuxtLink to="/" class="text-2xl md:text-3xl lg:text-4xl font-bold heading">
            NuxtNews
          </NuxtLink>
          <p class="text-sm lg:text-lg text-base-content/80">
            TRUSTED NEWS • GLOBAL PERSPECTIVE
          </p>
        </div>
        <div class="hidden lg:flex mr-1 items-center">
          <div
            class="flex items-center gap-2 border border-gray-300 rounded-lg p-2"
          >
            <input
              type="text"
              placeholder="search"
              class="text-sm focus:outline-none"
            />
          </div>
        </div>
        <div class="hidden lg:flex mr-4 items-center">
          <div
            class="flex items-center border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-base-300"
          >
            <img
              src="../assets/search.png"
              alt="logo"
              class="w-5 cursor-pointer"
            />
          </div>
        </div>
        <div class="hidden md:flex items-center">
          <NuxtLink
            v-if="!isLoggedIn"
            to="/login"
            class="flex items-center gap-2 border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-base-300"
          >
            <img src="../assets/user.png" alt="logo" class="w-5" />
            <span class="hidden lg:block text-sm font-semibold">Login</span>
          </NuxtLink>
          <div v-else class="flex items-center gap-2">
            <div
              class="flex items-center gap-2 border border-gray-300 rounded-lg p-2 cursor-pointer"
            >
              <img src="../assets/user.png" alt="logo" class="w-5" />
              <span class="hidden lg:block text-sm font-semibold">{{
                user?.email
              }}</span>
            </div>
            <button
              @click="handleLogout"
              class="flex items-center gap-2 border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-base-300"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <span class="hidden lg:block text-sm font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-b border-base-300 bg-base-100 shadow-lg"
    >
      <div class="container mx-auto px-6 py-4">
        <!-- Navigation Links -->
        <nav class="mb-6">
          <ul class="space-y-3">
            <li
              v-for="item in navigationItems"
              :key="item"
              class="border-b border-base-300 pb-2"
            >
              <NuxtLink
                :to="getNavLink(item)"
                @click="closeMobileMenu"
                :class="[
                  'block text-base font-medium transition-colors duration-200 py-2',
                  isActive(item)
                    ? 'text-primary'
                    : 'text-base-content hover:text-primary',
                ]"
              >
                {{ item }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Search Bar -->
        <div class="mb-6">
          <div
            class="flex items-center gap-2 border border-gray-300 rounded-lg p-3"
          >
            <input
              type="text"
              placeholder="Search articles..."
              class="text-sm focus:outline-none flex-1"
            />
            <img
              src="../assets/search.png"
              alt="search"
              class="w-5 cursor-pointer"
            />
          </div>
        </div>

        <!-- Auth Section -->
        <div class="space-y-3">
          <div v-if="!isLoggedIn">
            <NuxtLink
              to="/login"
              @click="closeMobileMenu"
              class="flex items-center gap-3 w-full p-3 border border-gray-300 rounded-lg hover:bg-base-300 transition-colors"
            >
              <img src="../assets/user.png" alt="login" class="w-5" />
              <span class="font-semibold">Login</span>
            </NuxtLink>

            <!-- Admin Access Message -->
          </div>

          <div v-else class="space-y-3">
            <!-- User Info -->
            <div
              class="flex items-center gap-3 p-3 border border-gray-300 rounded-lg bg-base-200"
            >
              <img src="../assets/user.png" alt="user" class="w-5" />
              <span class="font-semibold text-sm">{{ user?.email }}</span>
            </div>

            <!-- Admin Link -->
            <NuxtLink
              to="/admin"
              @click="closeMobileMenu"
              class="flex items-center gap-3 w-full p-3 border border-gray-300 rounded-lg hover:bg-base-300 transition-colors"
            >
              <img src="../assets/settings.png" alt="admin" class="w-5" />
              <span class="font-semibold">Admin mode</span>
            </NuxtLink>

            <!-- Logout Button -->
            <button
              @click="handleMobileLogout"
              class="flex items-center gap-3 w-full p-3 border border-gray-300 rounded-lg hover:bg-base-300 transition-colors text-left"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                ></path>
              </svg>
              <span class="font-semibold">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden md:flex border-b border-base-300 py-4">
      <div class="container mx-auto flex items-center justify-center">
        <nav class="flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item"
            :to="getNavLink(item)"
            :class="[
              'text-sm font-medium transition-colors duration-200',
              isActive(item)
                ? 'text-primary border-b-2 border-primary'
                : 'text-base-content hover:text-primary',
            ]"
          >
            {{ item }}
          </NuxtLink>
        </nav>
      </div>
    </div>
    <div class="border-b border-base-300 px-6 py-2">
      <div class="container mx-auto flex items-center justify-end">
        <div
          v-if="!isLoggedIn"
          class="flex items-center gap-2 text-sm text-error bg-error/10 px-3 py-2 rounded-lg border border-error/20"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
          <span class="font-medium"
            >Login to enable admin: Add, Edit & Delete articles</span
          >
        </div>
        <NuxtLink
          v-else
          to="/admin"
          class="flex items-center gap-2 border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-base-300"
        >
          <img
            src="../assets/settings.png"
            alt="logo"
            class="w-5 cursor-pointer"
          />
          <span class="block text-sm font-semibold">Admin mode</span>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const { isLoggedIn, user, logout } = useAuth();

const route = useRoute();
const isMobileMenuOpen = ref(false);

const navigationItems = [
  "HOME",
  "POLITICS",
  "WORLD",
  "BUSINESS",
  "TECHNOLOGY",
  "SPORTS",
  "CULTURE",
  "OPINION",
];

const getNavLink = (item: string) => {
  return item === "HOME" ? "/" : `${item.toLocaleLowerCase()}`;
};

const isActive = (item: string) => {
  if (item === "HOME") {
    return route.path === "/";
  }
  return route.path === `/${item.toLocaleLowerCase()}`;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleLogout = () => {
  logout();
};

const handleMobileLogout = () => {
  logout();
  closeMobileMenu();
};

const currentDate = new Date().toLocaleDateString();
</script>
