<template>
    <div class="min-h-screen text-gray-900 dark:text-gray-200 bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <div class="flex p-12 flex-col margin min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <h1 class="text-4xl">
                Pick your flavor of Ultramarine
            </h1>
            <div class="pt-12">
                <a href="https://ultramarine.app" class="flex flex-row rounded-lg">
                    <button class="ml-2 px-4 py-2 rounded-lg bg-transparent text-gray-900 dark:text-gray-50 border-2 border-blue-500 hover:bg-blue-600 hover:text-gray-50">
                        Flagship Edition
                    </button>
                </a>
                <div class="p-3">
                    <p class="text-lg">
                        The flagship edition. Powered by Solus' Budgie Desktop.
                        <!-- maybe will add a wiki reference to what budgie is here, alongside a read further here, redirecting to wiki-->
                    </p>
                </div>
                <a href="https://ultramarine.app" class="flex flex-row rounded-lg">
                    <button class="ml-2 px-4 py-2 rounded-lg bg-transparent text-gray-900 dark:text-gray-50 border-2 border-blue-500 hover:bg-blue-600 hover:text-gray-50">
                        Cutefish Edition
                    </button>
                </a>
                <div class="p-3">
                    <p class="text-lg">
                        Simplicity, beauty, and practicality.
                      <!-- maybe will add a wiki reference to what cutefish is here, alongside a read further here, redirecting to wiki-->
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>
