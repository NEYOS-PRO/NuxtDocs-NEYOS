<template>
  <div :class="{ dark: darkMode }" class="min-h-screen grid grid-cols-12 bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
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
            <!--Navigation dynamique-->
              <ContentNavigation v-slot="{ navigation }">
                <ul>
                  <li v-for="link of navigation" :key="link._path">
                    <NuxtLink
                      :to="link._path"
                      class="hover:text-white"
                      :class="{ 'text-green-500 font-semibold': $route.path === link._path }"
                    >
                    {{ link.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </ContentNavigation>
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
            <NuxtLink to="/" class="hover:underline">Documentation</NuxtLink>
            <NuxtLink to="/about" class="hover:underline">API</NuxtLink>
            <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
          </nav>

          <!-- Barre de recherche, mode sombre et menu burger -->
          <div class="flex items-center space-x-4">
            <!-- Icône de recherche -->
            <button
              @click="toggleSearchPopup"
              class="bg-neutral-800 text-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            <!-- Mode sombre -->
            <button
              @click="toggleDarkMode"
              class="bg-neutral-800 text-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Toggle dark mode"
            >
              <svg
                v-if="!darkMode"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
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
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>

            <!-- Menu hamburger pour mobile -->
            <button
              @click="toggleMenu"
              class="bg-neutral-800 text-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 lg:hidden"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <!-- Popup de recherche -->
      <div v-if="searchPopupOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div class="bg-white dark:bg-neutral-800 p-4 rounded-md w-4/5 max-w-lg">
          <div class="flex justify-between items-center mb-4 space-x-3">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Rechercher..."
              class="w-full p-2 text-sm border rounded-md focus:outline-green-500 dark:focus:outline-green-500"
            />
            <!-- <button  class="text-red-600">X</button> -->
            <svg @click="toggleSearchPopup" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-red-500 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </div>
          <ul>
            <li v-for="suggestion in filteredSuggestions" :key="suggestion">              
              <span class="text-sm">{{ suggestion }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Popup du menu hamburger -->
      <div v-if="menuOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div class="bg-white dark:bg-neutral-800 p-4 rounded-md w-4/5 max-w-lg focus:outline-green-500">
          <button @click="toggleMenu" class="text-red-600 mb-4">Fermer</button>
          <nav class="text-sm">
              <ContentNavigation v-slot="{ navigation }">
                  <ul>
                    <li v-for="link of navigation" :key="link._path">
                      <NuxtLink
                        :to="link._path"
                        class="hover:text-white"
                        :class="{ 'text-green-500 font-semibold': $route.path === link._path }"
                      >
                      {{ link.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </ContentNavigation>
          </nav>
        </div>
      </div>

      <!-- Bloc de contenu -->
      <main class="flex-grow p-6 text-sm md:text-md">
        <ContentDoc />
      </main>

      <!--Footer-->
    </div>
  </div>
</template>

<script>

import Card from '~/components/content/Card.vue';

export default {
  data() {
    return {
      darkMode: false,
      activeSection: "getStarted",
      menuOpen: false,
      searchPopupOpen: false,
      searchQuery: "",
      suggestions: ["Accueil", "À propos", "Contact", "Services", "Portfolio"],
    };
  },
  components: {
    Card,
  },
  computed: {
    filteredSuggestions() {
      return this.suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      const root = document.documentElement;
      root.classList.toggle("dark", this.darkMode);
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleSearchPopup() {
      this.searchPopupOpen = !this.searchPopupOpen;
    },
    toggleSection(section) {
      this.activeSection = this.activeSection === section ? null : section;
    },
  },
};
</script>
