<template>
  <header>
    <div class="w-full bg-base-300 px-6 py-2 text-sm">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <Icon name="uil:calendar" class="mr-2" />
            <span>6/22/2025</span>
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
          <img
            src="../assets/icons8-menu.svg"
            alt="logo"
            class="border h-8 p-2 rounded-lg border-gray-300 cursor-pointer hover:bg-base-300"
          />
        </div>
        <div
          class="flex flex-col flex-1 items-center justify-center lg:items-start"
        >
          <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold heading">
            Daily Herald
          </h1>
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
import { useRoute } from "vue-router";

const { isLoggedIn, user, logout } = useAuth();

const route = useRoute();
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

const handleLogout = () => {
  logout();
};
</script>
