<template>
  <div class="min-h-screen grid grid-cols-12 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
    <!-- Sidebar gauche (sticky, toute la hauteur) -->
    <aside
      class="col-span-2 bg-neutral-800 text-white sticky top-0 h-screen overflow-y-auto hidden lg:block"
    >
      <div class="flex flex-col h-full">
        <!-- Logo de la société -->
        <div class="p-4 flex items-center space-x-3 border-b border-neutral-800">
          <img src="/logo/logo_white.png" alt="Logo" class="w-12 h-12 mb-2" />
          <span class="text-lg font-bold">Neyos</span>
        </div>

        <!-- Liens de navigation -->
        <nav class="flex-1 overflow-y-auto p-4">
          <div class="mb-4">
            <button
              @click="toggleSection('getStarted')"
              class="flex justify-between items-center w-full text-left text-sm font-semibold text-gray-300 hover:text-white"
            >
              <span class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
                <span>Get Started</span>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform"
                :class="{'rotate-90': activeSection === 'getStarted'}"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>

            <ul
              v-if="activeSection === 'getStarted'"
              class="mt-2 pl-4 space-y-2 text-sm text-gray-400"
            >
              <li><NuxtLink to="/" class="hover:text-white">Installation</NuxtLink></li>
              <li><NuxtLink to="/about" class="hover:text-white">Configuration</NuxtLink></li>
              <li><NuxtLink to="/edge-channel" class="hover:text-white">Edge Channel</NuxtLink></li>
              <li><NuxtLink to="/migration" class="hover:text-white">Migration</NuxtLink></li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>

    <!-- Contenu principal -->
    <div class="col-span-12 lg:col-span-10 bg-inherit flex flex-col min-h-screen">
      <!-- Header -->
      <header class="bg-neutral-900 text-white dark:bg-gray-800 py-4 px-6 w-full">
        <div class="flex justify-between items-center">
          <!-- Logo mobile -->
          <div class="lg:hidden flex items-center space-x-2">
            <img src="/logo/logo_white.png" alt="Logo" class="w-8 h-8" />
            <span class="text-lg font-bold">Neyos</span>
          </div>

          <!-- Navigation Links (centrés) pour grand écran -->
          <nav class="hidden lg:flex space-x-4">
            <NuxtLink to="/" class="hover:underline">Accueil</NuxtLink>
            <NuxtLink to="/about" class="hover:underline">À propos</NuxtLink>
            <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
          </nav>

          <!-- Barre de recherche et mode sombre -->
          <div class="flex items-center space-x-4">
            <!-- Barre de recherche -->
            <div class="relative hidden lg:block">
              <input
                id="search"
                type="text"
                placeholder="Search..."
                class="w-full bg-neutral-800 text-sm text-gray-300 rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div class="absolute top-2 left-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </div>

            <!-- Mode sombre -->
            <button
              @click="toggleDarkMode"
              class="bg-neutral-800 text-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle dark mode"
            >
              <svg
                v-if="!darkMode"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Bloc de contenu -->
      <main class="flex-grow p-6">
        <ContentDoc />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false, // État du mode sombre
      activeSection: null, // Section active dans la sidebar gauche
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    toggleSection(section) {
      this.activeSection = this.activeSection === section ? null : section;
    },
  },
};
</script>
