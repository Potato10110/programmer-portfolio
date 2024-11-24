<template>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Portfolio</h1>
        <ul class="flex space-x-4">
          <li><router-link to="/" class="hover:underline">Home</router-link></li>
          <li><router-link to="/projects" class="hover:underline">Projects</router-link></li>
          <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>
  