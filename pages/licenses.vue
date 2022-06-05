<template>
  <div class="flex flex-col min-h-screen mt-8">
    <h1 class="text-4xl font-bold">Licenses & Credits</h1>
    <h2 class="mb-8">Credits to frameworks and artworks that have been used on this website. <br> (Please note: these are just the most notable licenses, others are either embedded in the source code or can be found in the build output)</h2>
    <h3 class="text-lg font-semibold mb-4">Our Sponsors:</h3>
    <ul class="flex flex-row gap-8 mb-4">
      <a href="https://webhorizon.in">
        <li class="flex flex-col items-center p-4 text-xl font-medium bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
          <nuxt-img
            src="webhorizon.png"
            alt="WebHorizon Logo"
            class="w-72 h-auto rounded-md bg-gray-700 p-1 mb-1"
            quality="50"
          />
          <span>WebHorizon</span>
        </li>
      </a>
      <a href="https://tensordock.com">
        <li class="flex flex-col items-center p-4 text-xl font-medium bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
          <img
            src="https://tensordock.com/assets/img/brand.png"
            alt="TensorDock Logo"
            class="w-72 h-auto rounded-md bg-gray-800 dark:bg-gray-200 p-1 mb-1"
          />
          <span>WebHorizon</span>
        </li>
      </a>
    </ul>
    <h3 class="text-lg font-semibold mb-4">Libraries:</h3>
    <ul class="flex flex-row flex-wrap gap-x-8 gap-y-4 mb-8">
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">Nuxt.js v2.15.8</h3>
        <p>(c) 2016-present Nuxt Team</p>
        <p>Released under the MIT License.</p>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">Vue.js v2.6.14</h3>
        <p>(c) 2013-present Yuxi (Evan) You</p>
        <p>Released under the MIT License.</p>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">Tailwind CSS v3.0.22</h3>
        <p>(c) Tailwind Labs, Inc.</p>
        <p>Released under the MIT License.</p>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">clipboard.js v2.0.11</h3>
        <p>(c) 2013-present Evan You</p>
        <p>Released under the MIT License.</p>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">vue-router v3.5.4</h3>
        <p>(c) 2013-present Evan You</p>
        <p>Released under the MIT License.</p>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">vuex v3.6.2</h3>
        <p>(c) 2013-present Evan You</p>
        <p>Released under the MIT License.</p>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">vue-no-ssr v1.1.1</h3>
        <p>(c) 2018-present egoist (0x142857@gmail.com)</p>
        <p>Released under the MIT License.</p>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">vue-client-only v0.0.0-semantic-release</h3>
        <p>(c) 2018-present egoist (0x142857@gmail.com)</p>
        <p>Released under the MIT License.</p>
      </li>
    </ul>
    <h3 class="text-lg font-semibold mb-4">Artwork:</h3>
    <ul class="flex flex-row flex-wrap gap-x-8 gap-y-4 mb-8">
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">Laptop Mockup</h3>
        <p>Created by Ernest Ojeh (ernestojeh.com)</p>
        <a href="https://www.figma.com/community/file/839429886467621125">Released in the Figma Community</a>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">CSS scrollwheel animation</h3>
        <p>Made by Tsukasa Aoki</p>
        <a href="https://codepen.io/TKS31/pen/gOaKaxx">Released on Codepen</a>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">Hero Text Background Image</h3>
        <p>Photo by SIMON LEE on Unsplash.</p>
        <a href="https://unsplash.com/photos/OdnXv9hJOEI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Released on Unsplash under the Unsplash License.</a>
      </li>
      <li class="p-4 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">
        <h3 class="text-lg font-bold">FontAwesome Icons</h3>
        <p>Icons licensed under the CC BY 4.0 License </p>
        <a href="https://fontawesome.com/license/free">Released under the FontAwesome Free License</a>
      </li>
    </ul>
    <h3 class="text-lg font-semibold mb-2">Trademarks:</h3>
    <ul class="mb-4">
      <li>Linux® is the registered trademark of Linus Torvalds in the U.S. and other countries.</li>
      <li>Fedora® and the Infinity design logo are trademarks of Red Hat, Inc. in the U.S. and elsewhere.</li>
    </ul>
  </div>
</template>
