<template>
    <section class="bg-white min-h-screen p-8">
      <h2 class="text-3xl font-bold text-center mb-6">My Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          class="border p-4 rounded shadow hover:shadow-lg transition"
        >
          <h3 class="text-xl font-semibold">{{ project.title }}</h3>
          <p class="text-gray-600 mt-2">{{ project.description }}</p>
          <a
            :href="project.link"
            target="_blank"
            class="text-blue-500 hover:underline mt-4 block"
          >View Project</a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, title: 'Project One', description: 'Description of project one.', link: '#' },
          { id: 2, title: 'Project Two', description: 'Description of project two.', link: '#' },
          // Add more projects as needed
        ],
      };
    },
  };
  </script>
  