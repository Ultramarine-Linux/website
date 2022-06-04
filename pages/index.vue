<template>
  <div class="flex flex-col">
    <div>
      <section id="hero" class="md:pb-24 md:pt-24 flex flex-row justify-between items-start">
        <div id="hero-left" class="max-w-2xl mr-8">
          <div class="text-bg-container">
            <h1 class="hero-text font-bold text-4xl sm:text-6xl text-black dark:text-white leading-normal md:leading-relaxed">The OS that just works.</h1>
          </div>
          <span class="text-xl max-w-xs">Ultramarine Linux is a Fedora-based Linux distribution designed to stay out of your way and be easy to use. All editions come with several tweaks preapplied to make getting started and daily use easy and seamless.</span>
          <div id="button-row" class="flex flex-row gap-4 mt-8">
            <a href="/download">
              <PrimaryButton class="text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download</span>
              </PrimaryButton>
            </a>
            <a href="https://wiki.ultramarine-linux.org/installation/getting-started">
              <SecondaryButton class="text-xl">
                <span>Installation Guide</span>
              </SecondaryButton>
            </a>
          </div>
        </div>
        <div id="hero-right" class="lg:block hidden">
          <nuxt-img src="laptop-dark.png" width="800" height="auto" quality="30" class="rounded-md dark:block hidden"></nuxt-img>
          <nuxt-img src="laptop-dark.png" width="800" height="auto" quality="30" class="rounded-md dark:hidden block"></nuxt-img>
        </div>
      </section>
      <div id="scroll-animation" class="flex flex-col w-full pb-48 items-center justify-center">
        <div class="mouse"></div>
        <span class="tracking-wider text-gray-500 pb-4">scroll to learn more</span>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '~/components/PrimaryButton.vue';
import SecondaryButton from '~/components/SecondaryButton.vue';

export default {
    layout: "default",
    components: { PrimaryButton, SecondaryButton }
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
