<template>
  <div class="min-h-screen flex flex-col lg:flex-row">
    <!-- 왼쪽 채널 리스트 -->
    <div class="lg:w-1/6 w-full bg-white shadow-md p-4 flex flex-col order-1">
      <h2 class="text-lg font-bold mb-4">Channels</h2>
      <ul class="space-y-2 flex-grow">
        <li class="text-red-500">● STS제강</li>
        <li class="text-yellow-500">● STS연주</li>
        <li class="text-green-500">● 제강</li>
        <li class="text-blue-500">● 연주</li>
        <li class="text-purple-500">● 열연</li>
        <li class="text-blue-500">● 냉연</li>
        <li class="text-blue-500">● STS냉연</li>
      </ul>
    </div>

    <!-- 중앙 컨텐츠 -->
    <div
      class="lg:w-4/6 w-full bg-white shadow-md flex flex-col items-center justify-end relative bg-center bg-no-repeat bg-opacity-20 p-4 order-3 lg:order-2">
      <div class="absolute inset-0 flex items-center justify-center -z-10">
        <img src="../assets/images/posco.png" alt="POSCO" class="opacity-20">
      </div>
      <!-- 채팅 메시지 영역 -->
      <div ref="chatContainer"
        class="flex-grow w-full md:w-full rounded-lg p-4 overflow-y-scroll space-y-2 h-64 scrollbar-hide"
        @scroll="handleScroll">
        <div v-for="(msg, index) in chatMessages" :key="index" class="flex"
          :class="{ 'justify-end': msg.isMine, 'justify-start': !msg.isMine }">
          <div :class="{
            'bg-blue-500 text-white': msg.isMine,
            'bg-gray-200 text-black': !msg.isMine
          }" class="px-4 py-2 rounded-lg max-w-xs">
            {{ msg.text }}
          </div>
        </div>
      </div>
      <!-- 입력 영역 -->
      <div class="w-full md:w-3/4 bg-white flex flex-col sm:flex-row mt-4 pt-4">
        <textarea v-model="message" @keydown="handleKeydown" placeholder="무엇이든 물어보세요!"
          class="border rounded-lg p-2 flex-grow resize-none h-16"></textarea>
        <button @click="sendMessage"
          class="bg-blue-500 text-white font-semibold rounded-lg shadow-md sm:ms-2 mt-2 sm:mt-0 px-6 py-3 w-full sm:w-auto hover:bg-blue-600 hover:shadow-lg active:bg-blue-700 transition duration-200">
          전송
        </button>
      </div>
    </div>

    <!-- 오른쪽 컨텐츠 -->
    <div class="lg:w-1/6 w-full bg-white shadow-md p-4 flex flex-col space-y-8 order-2 lg:order-3">
      <div>
        <h2 class="text-lg font-bold mb-4">검색기간 변경</h2>
        <form class="space-y-2">
          <label class="flex items-center space-x-2">
            <input type="radio" name="period" value="7" class="text-blue-500">
            <span>7일</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="period" value="15" class="text-blue-500">
            <span>15일</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="period" value="30" class="text-blue-500" checked>
            <span>30일</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="period" value="90" class="text-blue-500">
            <span>90일</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="period" value="180" class="text-blue-500">
            <span>180일</span>
          </label>
        </form>
      </div>
      <div>
        <h2 class="text-lg font-bold mb-4">검색기간 변경</h2>
        <form class="space-y-2">
          <label class="flex items-center space-x-2">
            <input type="radio" name="period2" value="7" class="text-blue-500">
            <span>7일</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="period2" value="15" class="text-blue-500">
            <span>15일</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="period2" value="30" class="text-blue-500" checked>
            <span>30일</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="period2" value="90" class="text-blue-500">
            <span>90일</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="radio" name="period2" value="180" class="text-blue-500">
            <span>180일</span>
          </label>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      chatMessages: [],
    };
  },
  methods: {
    handleKeydown(event) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        this.sendMessage();
      }
    },
    sendMessage() {
      if (this.message.trim() !== "") {
        this.chatMessages.push({ text: this.message, isMine: true });
        this.message = "";
        this.$nextTick(() => {
          const container = this.$refs.chatContainer;
          container.scrollTop = container.scrollHeight;
        });
        // 상대방 메시지 추가 (예제용)
        setTimeout(() => {
          this.chatMessages.push({ text: "이 메시지는 상대방의 답장입니다.", isMine: false });
        }, 1000);
      }
    },
  },
};
</script>

<style>
/* 스크롤바 숨기기 */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  scrollbar-width: none;
  /* Firefox */
}
</style>
