<template>
  <div class="drawer">
    <input
      id="my-drawer"
      type="checkbox"
      class="drawer-toggle"
      v-model="isDrawerOpen"
    />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-base-100">
        <div class="flex-none lg:hidden">
          <label
            for="my-drawer"
            aria-label="open sidebar"
            class="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2 font-bold">
          Daily Herald
          <p class="text-xs font-normal">TRUSTED NEWS • GLOBAL PERSPECTIVE</p>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li v-for="link in navLinks" :key="link.name">
              <a :href="link.path">{{ link.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Page content will go here -->
    </div>
    <div class="drawer-side" style="z-index: 1000">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200">
        <!-- Sidebar content here -->
        <li v-for="link in navLinks" :key="link.name">
          <a :href="link.path">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isDrawerOpen = ref(false);

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "POLITICS", path: "/politics" },
  { name: "WORLD", path: "/world" },
  { name: "BUSINESS", path: "/business" },
  { name: "TECHNOLOGY", path: "/technology" },
  { name: "SPORTS", path: "/sports" },
  { name: "CULTURE", path: "/culture" },
  { name: "OPINION", path: "/opinion" },
];
</script>
