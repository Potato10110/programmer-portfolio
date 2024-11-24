<template>
  <section class="bg-black min-h-screen flex justify-center items-center">
    <form class="bg-white p-8 rounded shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4 text-black">Contact Me</h2>
      <input
        type="text"
        placeholder="Your Name"
        class="w-full border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        class="w-full border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <textarea
        placeholder="Your Message"
        class="w-full border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
        rows="4"
      ></textarea>
      <button
        type="submit"
        class="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
      >
        Send
      </button>
    </form>
  </section>
</template>

<script>
export default {};
</script>
