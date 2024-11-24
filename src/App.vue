<template>
    <!-- Header -->
    <header class="bg-black text-white py-4 shadow-md">
  <div class="container mx-auto flex justify-between items-center">
    <h1 class="text-3xl font-bold">My Portfolio</h1>
    <nav>
      <ul class="flex space-x-6">
        <li><router-link to="/" class="hover:text-gray-300">Home</router-link></li>
        <li><router-link to="/project" class="hover:text-gray-300">Projects</router-link></li>
        <li><router-link to="/contact" class="hover:text-gray-300">Contact</router-link></li>
      </ul>
    </nav>
  </div>
</header>



    <!-- Router View for the active component -->
    <router-view></router-view>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-6">
      <div class="container mx-auto text-center">
        <p>&copy; 2024 Your Name | All rights reserved</p>
      </div>
    </footer>
</template>

<script>
export default {};
</script>
