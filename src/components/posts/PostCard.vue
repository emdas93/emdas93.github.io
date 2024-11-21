<template>
  <div class="flex flex-1 flex-row m-3 p-5 border border-black rounded-xl">
    <div class="flex items-center justify-center w-40 h-40 card-image border border-black rounded-2xl">
      TEST
      <!-- <img src="/src/assets/t1.png" class="border border-black rounded-2xl" alt="Load Failed"> -->
    </div>

    <router-link :to="props.to">
      <div class="flex-1 flex flex-col mx-5 card-content">
        <div class="flex-1">
          <h3 class="text-lg">카드 헤더</h3>
          <p class="text-base">본문내용</p>
        </div>

        <div>
          <span class="px-2.5 py-0.5 me-2 text-xs font-medium text-blue-800 bg-blue-100 rounded">Tag1</span>
          <span class="px-2.5 py-0.5 me-2 text-xs font-medium text-blue-800 bg-blue-100 rounded">Tag2</span>
          <span class="px-2.5 py-0.5 me-2 text-xs font-medium text-blue-800 bg-blue-100 rounded">Tag3</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>

const props = defineProps({
  to: {
    type: String,
    required: false
  }
})

</script>