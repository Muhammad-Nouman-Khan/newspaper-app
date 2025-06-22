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
    <div class="w-full px-6 py-2">
      <div class="container mx-auto flex">
        <div class="flex md:hidden items-center justify-center">
          <img
            src="../assets/icons8-menu.svg"
            alt="logo"
            class="border h-8 p-2 rounded-lg border-gray-300 cursor-pointer hover:bg-base-300"
          />
        </div>
        <div class="flex flex-col flex-1 items-center justify-center">
          <h1 class="text-2xl md:text-3xl font-bold heading">Daily Herald</h1>
          <p class="text-sm text-base-content/80">
            TRUSTED NEWS • GLOBAL PERSPECTIVE
          </p>
        </div>
        <div class="hidden md:flex items-center justify-center">
          <img
            src="../assets/user.png"
            alt="logo"
            class="border h-10 p-2 rounded-lg border-gray-300 cursor-pointer hover:bg-base-300"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
