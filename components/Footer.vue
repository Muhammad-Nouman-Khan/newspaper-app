<template>
  <footer class="bg-gray-900 text-gray-200 pt-12 pb-4 px-4 md:px-16">
    <!-- Newsletter Signup -->
    <div class="max-w-4xl mx-auto text-center mb-10">
      <h2 class="text-2xl md:text-3xl font-bold mb-2 text-white heading">
        Stay Informed
      </h2>
      <p class="mb-4 text-gray-400">
        Get the latest news and exclusive stories delivered directly to your
        inbox.
      </p>
      <form
        class="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-xl mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          class="w-full sm:w-80 px-4 py-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          class="px-6 py-2 cursor-pointer rounded bg-red-500 hover:bg-red-600 text-white font-semibold transition"
          disabled
        >
          Subscribe
        </button>
      </form>
    </div>
    <hr class="border-gray-700 mb-8" />
    <!-- Footer Main -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <!-- About -->
      <div>
        <h3 class="text-xl font-bold text-white mb-2 heading">NuxtNews</h3>
        <p class="text-gray-400 mb-4">
          Your trusted source for breaking news, in-depth analysis, and premium
          journalism. Committed to delivering truth and transparency in every
          story.
        </p>
        <div class="flex space-x-4 text-gray-400">
          <a href="#" aria-label="Facebook" class="hover:text-white"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="#" aria-label="Twitter" class="hover:text-white"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="#" aria-label="Instagram" class="hover:text-white"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="#" aria-label="YouTube" class="hover:text-white"
            ><i class="fab fa-youtube"></i
          ></a>
        </div>
      </div>
      <!-- Sections -->
      <div>
        <h4 class="heading text-lg font-semibold text-white mb-2">Sections</h4>
        <ul class="space-y-1">
          <li><a href="#" class="hover:text-blue-400">Politics</a></li>
          <li><a href="#" class="hover:text-blue-400">World News</a></li>
          <li><a href="#" class="hover:text-blue-400">Business</a></li>
          <li><a href="#" class="hover:text-blue-400">Technology</a></li>
          <li><a href="#" class="hover:text-blue-400">Sports</a></li>
          <li><a href="#" class="hover:text-blue-400">Culture</a></li>
        </ul>
      </div>
      <!-- Services -->
      <div>
        <h4 class="text-lg font-semibold text-white mb-2 heading">Services</h4>
        <ul class="space-y-1">
          <li><a href="#" class="hover:text-blue-400">Newsletter</a></li>
          <li><a href="#" class="hover:text-blue-400">Mobile App</a></li>
          <li><a href="#" class="hover:text-blue-400">RSS Feeds</a></li>
          <li><a href="#" class="hover:text-blue-400">Archives</a></li>
          <li><a href="#" class="hover:text-blue-400">Corrections</a></li>
          <li><a href="#" class="hover:text-blue-400">Contact Us</a></li>
        </ul>
      </div>
      <!-- Contact -->
      <div>
        <h4 class="text-lg font-semibold text-white mb-2 heading">Contact</h4>
        <ul class="space-y-2 text-gray-400">
          <li class="flex items-center gap-2">
            <span class="material-icons text-base">location_on</span>123 News
            Street, New York, NY 10001
          </li>
          <li class="flex items-center gap-2">
            <span class="material-icons text-base">phone</span>+1 (555) 123-4567
          </li>
          <li class="flex items-center gap-2">
            <span class="material-icons text-base">email</span>news@nuxtnews.com
          </li>
        </ul>
      </div>
    </div>
    <hr class="border-gray-700 mb-4" />
    <!-- Bottom Bar -->
    <div
      class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
    >
      <div class="mb-2 md:mb-0">© 2024 NuxtNews. All rights reserved.</div>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-blue-400">Privacy Policy</a>
        <a href="#" class="hover:text-blue-400">Terms of Service</a>
        <a href="#" class="hover:text-blue-400">Cookie Policy</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
