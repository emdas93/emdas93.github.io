<template>
  <div class="wrap">
    <header class="relative w-full h-60 overflow-hidden bg-cover bg-center bg-slate-600 header">
      <div class="absolute inset-0 flex flex-row justify-between mx-10 py-5 h-60 text-slate-50">
        <div class="brand-logo">
          <h1 class="text-3xl">Blog</h1>
        </div>

        <nav>
          <span class="px-2">ITEM1</span>
          <span class="px-2">ITEM2</span>
          <span class="px-2">ITEM3</span>
          <span class="px-2">ITEM4</span>
        </nav>
      </div>
      <div class="relative mx-auto my-36 text-center text-slate-50">
        <h1 class="text-3xl">ALL</h1>
      </div>
    </header>

    <main>
      <div class="container mx-auto flex">
        <div class="flex flex-1 flex-row m-3 p-5 border border-black rounded-xl">
          <div class="flex items-center justify-center w-40 h-40 card-image border border-black rounded-2xl">
              TEST
            <!-- <img src="/src/assets/t1.png" class="border border-black rounded-2xl" alt="Load Failed"> -->
          </div>

          <a href="#">
            <div class="flex-1 flex flex-col mx-5 card-content">
              <div class="flex-1">
                <h3 class="text-lg">Card Header Text</h3>
                <p class="text-base">Hello World!!! This is the blog system you want.</p>
                <p class="text-base">This blog is created by Vue3</p>
                <p class="text-base">Contact to me plz...</p>
              </div>

              <div>
                <span class="px-2.5 py-0.5 me-2 text-xs font-medium text-blue-800 bg-blue-100 rounded">Tag1</span>
                <span class="px-2.5 py-0.5 me-2 text-xs font-medium text-blue-800 bg-blue-100 rounded">Tag2</span>
                <span class="px-2.5 py-0.5 me-2 text-xs font-medium text-blue-800 bg-blue-100 rounded">Tag3</span>
              </div>
            </div>
          </a>
          
        </div>

        <div class="w-40">
          RIGHT SIDE
        </div>
      </div>
    </main>

    <footer></footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
</style>
