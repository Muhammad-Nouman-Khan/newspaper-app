<template>
  <div class="min-h-screen" data-theme="light">
    <Header />
    <main>
      <HeroSection />
      <div class="bg-base-200">
        <MoreStories />
      </div>
      <slot />
    </main>
  </div>
</template>
