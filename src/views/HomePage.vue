<template>
  <div>
    <section class="bg-black text-white py-32">
      <div class="container mx-lg text-center px-4">
  <h1 class="text-5xl font-bold leading-tight">Hi, I'm Micko</h1>
  <p class="mt-4 text-lg max-w-xl mx-auto font-light text-gray-300">
    A passionate front-end developer, constantly learning and growing in the world of web development. Let's build something amazing together.
  </p>
  <router-link 
    to="/project" 
    class="mt-8 inline-block bg-white text-black py-3 px-8 rounded-full text-xl font-semibold shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
  >
    See My Work
  </router-link>
</div>

</section>

    <!-- About Me Section -->
    <section class="py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold">About Me</h2>
        <p class="mt-4 max-w-xl mx-auto text-lg">
          Hi there! I'm a Front-End Developer with a passion for web development. I specialize in HTML, CSS, and Bootstrap, and have a foundational understanding of JavaScript and Python. As a beginner, I’m constantly eager to learn and grow my skills in front-end technologies and expand my knowledge of web development.
        </p>
      </div>
    </section>
    <!-- Projects Section -->
    <section class="bg-gray-200 py-20">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold">Featured Projects</h2>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold">Project 1</h3>
            <p class="mt-4 text-sm">A description of your project goes here.</p>
            <router-link to="/project" class="mt-4 inline-block text-blue-600 hover:underline">View Project</router-link>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold">Project 2</h3>
            <p class="mt-4 text-sm">Another cool project description goes here.</p>
            <router-link to="/project" class="mt-4 inline-block text-blue-600 hover:underline">View Project</router-link>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-semibold">Project 3</h3>
            <p class="mt-4 text-sm">Here is yet another awesome project description.</p>
            <router-link to="/project" class="mt-4 inline-block text-blue-600 hover:underline">View Project</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
