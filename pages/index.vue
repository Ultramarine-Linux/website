<template>
  <div class="flex flex-col">
    <div>
      <section id="hero" class="mt-8 mb-4 flex flex-row justify-between items-center">
        <div id="hero-left" class="max-w-2xl mr-8">
          <div class="text-bg-container">
            <h1 class="hero-text font-bold text-4xl sm:text-6xl text-black dark:text-white leading-normal md:leading-relaxed">The OS that just works.</h1>
          </div>
          <span class="text-lg md:text-xl max-w-xs">Ultramarine Linux is a Fedora-based Linux distribution designed to stay out of your way and be easy to use. All editions come with several tweaks preapplied to make initial setup and daily usage seamless.</span>
          <div id="button-row" class="flex flex-row gap-4 mt-2 md:mt-8">
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
          <a href="#migrate" class="text-gray-700 dark:text-gray-400 hover:underline md:block hidden">Already using Fedora? Click here for a migration script.</a>
        </div>
        <div id="hero-right" class="lg:block hidden">
          <nuxt-img src="laptop-dark.png" width="800" height="auto" quality="20" class="rounded-md dark:block hidden"></nuxt-img>
          <nuxt-img src="laptop-dark.png" width="800" height="auto" quality="20" class="rounded-md dark:hidden block"></nuxt-img>
        </div>
      </section>
      <div id="scroll-animation" class="lg:flex flex-col w-full pb-12 items-center justify-center hidden">
        <div class="mouse"></div>
        <span class="tracking-wider text-gray-500 pb-4">scroll to learn more</span>
      </div>
      <!-- WIP: Add more sections -->
      <!-- Add new license page with credits to laptop mockup: https://www.figma.com/community/file/839429886467621125
      , unsplash text gradient image https://unsplash.com/photos/OdnXv9hJOEI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink photo by SIMON LEE on Unsplash
       and trademarks + oss licenses -->
      <!-- Reference license page in footer instead of having long paragraphs -->
      <!-- Resize navbar after scroll: https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp -->
      <section id="about" class="flex flex-col items-center mb-8">
        <h2 class="font-semibold tracking-tight text-4xl mb-8">What is Ultramarine?</h2>
        <div class="flex md:flex-row flex-col gap-8 items-center">
          <div class="flex flex-col items-start bg-gray-200 dark:bg-gray-800 p-4 rounded-xl h-80 shadow-lg">
            <div class="mb-2 text-blue-600 fab fa-fedora dark:text-blue-50 text-6xl" />
            <h3 class="mb-1 text-xl font-semibold tracking-wide">
              Based on Fedora®
            </h3>
            <p class="max-w-sm text-lg text-left">
              Designed to be 100% bug-for-bug compatible with Fedora, Ultramarine offers the latest and greatest in open-source software,
              yet maintaining rock-solid stability. Making sure things don't break is our top priority.
            </p>
          </div>
          <div class="flex flex-col items-start bg-gray-200 dark:bg-gray-800 p-4 rounded-xl h-80 shadow-lg">
            <div class="mb-2 text-blue-600 fas fa-lock-open dark:text-blue-50 text-5xl p-1 pb-1.5" />
            <h3 class="mb-1 text-xl font-semibold tracking-wide">
              Developer Friendly
            </h3>
            <p class="max-w-sm text-lg text-left">
              Ultramarine provides a developer-friendly (and friendly for the average user) tools to make sure you can get the most out of your system. We're making it as easy and accessible as possible for everyone to create and package their software for Ultramarine (and in extension, Fedora!).
            </p>
          </div>
          <div class="flex flex-col items-start bg-gray-200 dark:bg-gray-800 p-4 rounded-xl h-80 shadow-lg">
            <div class="mb-2 text-blue-600 far fa-check-circle dark:text-blue-50 text-5xl p-1 pb-1.5" />
            <h3 class="mb-1 text-xl font-semibold tracking-wide">
              Sane Defaults
            </h3>
            <p class="max-w-sm text-lg text-left">
              Ultramarine applies common tweaks and settings to make sure your out-of-the-box experience is as smooth as it can be. We've tried to make sure that you'll be able to get started as quickly as possible.
            </p>
          </div>
        </div>
        <div class="text-center text-lg max-w-4xl bg-gray-200 dark:bg-gray-800 rounded-lg p-4 mt-8 shadow-lg">
          Ultramarine Linux is a Linux-based operating system designed for your own personal workstation (or battlestation). It is designed to be as easy to use as possible, and stays out of your way. Ultramarine Linux keeps up with the latest and greatest software in the open-source community, while trying to be stable and secure. Ultramarine is for everyone, from the beginner to the tech enthusiast, and even Windows dropouts!
        </div>
      </section>

      <section id="reviews" class="flex flex-col items-center mb-12">
        <h2 class="text-4xl font-semibold">Reviews</h2>
        <h3 class="text-lg mb-4">The most notable reviews about Ultramarine Linux</h3>
        <div class="flex flex-col md:flex-row gap-8">
          <div class="flex flex-col items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
            <iframe loading="lazy" src="https://www.youtube.com/embed/YD77rBBkYck" title="Tyler's Tech review" frameborder="0"></iframe>
            <a href="https://www.youtube.com/c/TylersTechNow" class="font-medium text-xl hover:text-blue-200">Tyler's Tech</a>
          </div>
          <div class="flex flex-col items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
            <iframe loading="lazy" src="https://youtube.com/embed/y_vgOH_UQvg" title="eBuzz Central review" frameborder="0"></iframe>
            <a href="https://www.youtube.com/c/eBuzzCentral" class="font-medium text-xl hover:text-blue-200">eBuzz Central</a>
          </div>
          <div class="flex flex-col items-center gap-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg">
            <iframe loading="lazy" src="https://youtube.com/embed/-L6yuasSD1o" title="The Linux Cast review" frameborder="0"></iframe>
            <a href="https://www.youtube.com/c/TheLinuxCast" class="font-medium text-xl hover:text-blue-200">The Linux Cast</a>
          </div>
        </div>
        <a href="https://distrowatch.com/weekly.php?issue=20220207#ultramarine" class="mt-4 p-4 hover:text-blue-300 bg-gray-200 dark:bg-gray-800 rounded-md shadow-lg">DistroWatch Article</a>
      </section>

      <section id="migrate" class="md:flex flex-col items-center mb-12 hidden">
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
iframe {
  aspect-ratio: 16/9;
  width: 20rem;
}

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

.pb-1\.5 {
  padding-bottom: 8px;
}
</style>
