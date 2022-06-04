<template>
  <div class="flex flex-col">
    <div>
      <section id="hero" class="md:py-12 lg:py-24 flex flex-row justify-between items-center">
        <div id="hero-left" class="max-w-2xl mr-8">
          <div class="text-bg-container">
            <h1 class="hero-text font-bold text-4xl sm:text-6xl text-black dark:text-white leading-normal md:leading-relaxed">The OS that just works.</h1>
          </div>
          <span class="text-xl max-w-xs">Ultramarine Linux is a Fedora-based Linux distribution designed to stay out of your way and be easy to use. All editions come with several tweaks preapplied to make initial setup and daily usage seamless.</span>
          <div id="button-row" class="flex flex-row gap-4 mt-8">
            <a href="/download">
              <PrimaryButton class="text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download</span>
              </PrimaryButton>
            </a>
            <a href="https://wiki.ultramarine-linux.org/installation/getting-started" class="mb-2">
              <SecondaryButton class="text-xl">
                <span>Installation Guide</span>
              </SecondaryButton>
            </a>
          </div>
          <a href="#migrate" class="text-gray-400">Already using Fedora? Click <span class="hover:underline text-blue-100">here</span> for a migration script.</a>
        </div>
        <div id="hero-right" class="lg:block hidden">
          <nuxt-img src="laptop-dark.png" width="800" height="auto" quality="20" class="rounded-md dark:block hidden"></nuxt-img>
          <nuxt-img src="laptop-dark.png" width="800" height="auto" quality="20" class="rounded-md dark:hidden block"></nuxt-img>
        </div>
      </section>
      <div id="scroll-animation" class="flex flex-col w-full pb-12 md:pt-24 items-center justify-center">
        <div class="mouse"></div>
        <span class="tracking-wider text-gray-500 pb-4">scroll to learn more</span>
      </div>
      <!-- WIP: Add more sections -->
      <!-- Add new license page with credits to laptop mockup: https://www.figma.com/community/file/839429886467621125
      , unsplash text gradient image https://unsplash.com/photos/OdnXv9hJOEI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink photo by SIMON LEE on Unsplash
       and trademarks + oss licenses -->
      <!-- Reference license page in footer instead of having long paragraphs -->
      <!-- Resize navbar after scroll: https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp -->
      <section id="migrate" class="flex flex-col items-center pb-12">
        <h2 class="text-2xl font-semibold">Already using Fedora? You can use our migration script!</h2>
        <div id="migration" class="hidden md:flex md:flex-col md:justify-center mt-2">
          <div class="p-2">
            <!-- code block for copying command -->
            <div class="inline-flex items-center bg-gray-600 rounded-xl">
              <div class="p-6 text-gray-400 bg-gray-700 rounded-xl">
                <!-- eslint-disable-next-line vue/no-parsing-error -->
                <p id="migrate-script" class="font-mono" >bash &lt;(curl -s https://ultramarine-linux.org/migrate.sh)</p>
              </div>
              <!-- add a button to copy the text next to the code block -->
              <div class="relative px-3 py-4 mx-1 text-gray-400 bg-gray-600 cursor-pointer rounded-xl dark:text-gray-200 hover:bg-gray-500 dark:hover:text-gray-100" @click="onCopy">
                <button type="button" class="copy-button fa fa-copy">
                  <span class="hidden">Copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </div>
</template>

<script>
import PrimaryButton from '~/components/PrimaryButton.vue';
import SecondaryButton from '~/components/SecondaryButton.vue';

export default {
  layout: "default",
  components: { PrimaryButton, SecondaryButton },
  methods: {
      onCopy (event) {
        // get the text from #migrate-script
        const text = document.getElementById('migrate-script').textContent
        this.$copyText(text)
      }
  }
}
</script>

<style>
.text-bg-container {
  background-image: url("@/static/texture.jpg");
}

.dark .text-bg-container {
  mix-blend-mode: lighten;
}

.dark .text-bg-container .hero-text {
  mix-blend-mode: darken;
  inset: 0;
  background-color: black;
}

.light .text-bg-container {
  mix-blend-mode: darken;
}

.light .text-bg-container .hero-text {
  mix-blend-mode: lighten;
  inset: 0;
  background-color: white;
}

.mouse {
	width: 30px;
	height: 50px;
	border: 3px solid #cccccc;
	border-radius: 60px;
	position: relative;
}

.mouse::before {
  content: '';
  width: 8px;
  height: 8px;
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #cccccc;
  border-radius: 50%;
  opacity: 1;
  animation: wheel 2s infinite;
  -webkit-animation: wheel 2s infinite;
}

@keyframes wheel {
	to {
		opacity: 0;
		top: 30px;
	}
}

@-webkit-keyframes wheel {
	to {
		opacity: 0;
		top: 30px;
	}
}
</style>
