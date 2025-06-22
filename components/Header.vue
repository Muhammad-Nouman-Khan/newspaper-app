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
          <div
            class="flex items-center gap-2 border border-gray-300 rounded-lg p-2 cursor-pointer hover:bg-base-300"
          >
            <img
              src="../assets/user.png"
              alt="logo"
              class="w-5 cursor-pointer"
            />
            <span class="hidden lg:block text-sm font-semibold">Login</span>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden md:flex border-b border-base-300 h-10">
      <div class="container mx-auto flex items-center justify-center">
        <nav class="flex items-center space-x-8">
          <a
            v-for="item in navigationItems"
            :key="item"
            :href="getNavLink(item)"
            :class="[
              'text-sm font-medium transition-colors duration-200',
              isActive(item)
                ? 'text-primary border-b-2 border-primary'
                : 'text-base-content hover:text-primary',
            ]"
          >
            {{ item }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
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
</script>
