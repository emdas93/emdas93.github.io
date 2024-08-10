<template>
    <div class="container mx-auto px-5 my-2">
        <div class="grid grid-cols-4">
            <div class="col-span-3">
                <div class="mx-5 p-3">
                    <h1 class="text-3xl font-bold">자바스크립트 기초 문법 (1)</h1>
                    <h5 class="text-sm font-bold">자바스크립트 기초 문법을 정리한 글입니다.</h5>
                    <p class="text-xs">2024-08-10</p>
                    <hr class="my-5">
                    <p class="mt-2 text-base">자바스크립트의 사용률은 다른 언어에 비해 엄청나게 높습니다. 특히나 웹의 발전으로 인한 이유 뿐만아니라
                        NodeJS의 등장으로 서버사이드에서도 실행가능한 이유 덕분에 사용률이 상당히 높습니다.</p>
                        <p class="mt-2 text-base">사용자량이 많고 사용자가 많다는 것은 그만큼 중요성이 높다는 것을 의미한다고 생각합니다.</p>
                        <p class="mt-2 text-base">이번에 쓸 글은 자바스크립트를 공부하면서 정리한 글을 포스팅할 내용입니다.</p>
                </div>
            </div>
            <div class="">
                <nav>
                    <p class="text-sm">TOC 영역</p>
                    <ul class="ps-3">
                        <li class="text-xs p-1">Javascript</li>
                        <li class="text-xs p-1">Database</li>
                        <li class="text-xs p-1">PHP</li>
                        <li class="text-xs p-1">Github</li>
                        <li class="text-xs p-1">일상</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import useMainStore from '../store/main';

const mainStore = useMainStore();

mainStore.setTitle('BLOG');

</script>