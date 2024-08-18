<template>
    <div class="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <h1 class="text-2xl font-bold mb-6">Image Generator</h1>
        <div class="mb-4 w-full max-w-md">
            <label for="width" class="block mb-2 text-sm font-medium text-gray-700">Width</label>
            <input v-model="width" type="number" id="width" class="block w-full p-2.5 border border-gray-300 rounded-lg"
                placeholder="Enter width">
        </div>
        <div class="mb-4 w-full max-w-md">
            <label for="height" class="block mb-2 text-sm font-medium text-gray-700">Height</label>
            <input v-model="height" type="number" id="height"
                class="block w-full p-2.5 border border-gray-300 rounded-lg" placeholder="Enter height">
        </div>
        <div class="mb-4 w-full max-w-md">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-700">Text</label>
            <input v-model="text" type="text" id="text" class="block w-full p-2.5 border border-gray-300 rounded-lg"
                placeholder="Enter text">
        </div>
        <div class="mb-4 w-full max-w-md">
            <label for="textColor" class="block mb-2 text-sm font-medium text-gray-700">Text Color</label>
            <input v-model="textColor" type="color" id="textColor"
                class="block w-full p-2.5 border border-gray-300 rounded-lg">
        </div>
        <div class="mb-4 w-full max-w-md">
            <label for="bgColor" class="block mb-2 text-sm font-medium text-gray-700">Background Color</label>
            <input v-model="bgColor" type="color" id="bgColor"
                class="block w-full p-2.5 border border-gray-300 rounded-lg">
        </div>
        <div class="mb-4 w-full max-w-md">
            <label for="fontSize" class="block mb-2 text-sm font-medium text-gray-700">Font Size (optional)</label>
            <input v-model="fontSize" type="number" id="fontSize"
                class="block w-full p-2.5 border border-gray-300 rounded-lg" placeholder="Enter font size">
        </div>
        <button @click="generateImage"
            class="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Image</button>

        <!-- 미리보기 영역 -->
        <div class="mb-6">
            <h2 class="text-lg font-semibold mb-2">Preview</h2>
            <div class="border border-gray-400"
                :style="{ width: width + 'px', height: height + 'px', backgroundColor: bgColor }">
                <canvas ref="canvasPreview" :width="width" :height="height"></canvas>
            </div>
        </div>

        <!-- 다운로드 링크 -->
        <a ref="downloadLink" class="text-blue-500 underline">Download Image</a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            width: 400,
            height: 400,
            text: "Hello, Vue!",
            textColor: "#000000",
            bgColor: "#ffffff",
            fontSize: null,  // 사용자가 지정하는 글자 크기
        };
    },
    watch: {
        width() {
            this.updatePreview();
        },
        height() {
            this.updatePreview();
        },
        text() {
            this.updatePreview();
        },
        textColor() {
            this.updatePreview();
        },
        bgColor() {
            this.updatePreview();
        },
        fontSize() {
            this.updatePreview();
        },
    },
    mounted() {
        this.updatePreview();
    },
    methods: {
        updatePreview() {
            const canvas = this.$refs.canvasPreview;
            const ctx = canvas.getContext("2d");

            // 배경색 설정
            ctx.fillStyle = this.bgColor;
            ctx.fillRect(0, 0, this.width, this.height);

            // 글자 크기 계산 (사용자가 지정하지 않은 경우 캔버스 크기의 10%로 설정)
            const fontSize = this.fontSize || Math.min(this.width, this.height) * 0.1;
            ctx.font = `bold ${fontSize}px Arial`;

            // 글자 위치 설정 (중앙 정렬)
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // 캔버스 초기화
            ctx.clearRect(0, 0, this.width, this.height);

            // 글자색 설정 및 그리기
            ctx.fillStyle = this.textColor;
            ctx.fillText(this.text, this.width / 2, this.height / 2);
        },
        generateImage() {
            this.updatePreview();  // 미리보기와 같은 내용으로 이미지를 생성

            const canvas = this.$refs.canvasPreview;
            const image = canvas.toDataURL("image/png");
            const downloadLink = this.$refs.downloadLink;
            downloadLink.href = image;
            downloadLink.download = "generated-image.png";
        },
    },
};
</script>

<style scoped>
</style>