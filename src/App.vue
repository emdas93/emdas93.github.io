<script setup>
import { ref } from 'vue';
const isSidebarVisible = ref(false);
const toggleSidebar = (event) => {
	isSidebarVisible.value = !isSidebarVisible.value;
}
</script>

<template>
	<div class="wrap bg-slate-100 w-full h-screen">
		<header class="relative w-full h-72 bg-cover bg-center bg-no-repeat"
			style="background-image: url('/src/assets/images/banner.webp');">
			<div class="absolute inset-0 bg-black opacity-50"></div>
			<div class="relative flex flex-row justify-between container mx-auto py-6 ">
				<h1 class="text-3xl font-bold text-white">EMDAS93</h1>
				<nav class="">
					<a href="#open-sidebar" @click="toggleSidebar($event)" v-show="!isSidebarVisible"
						class="text-2xl font-bold text-white sm:hidden">
						<i class="bi bi-list"></i>
					</a>
					<div :class="(isSidebarVisible ? 'flex ' : 'hidden ') + 'absolute top-0 right-0 h-screen bg-black bg-opacity-70 w-1/3 text-xs flex-col sm:bg-none sm:bg-opacity-0 sm:h-auto sm:flex sm:flex-row'">
						<a href="#close-sidebar" @click="toggleSidebar($event)" class="text-sm mx-3 md:text-xl font-bold text-white sm:hidden">
							<i class="bi bi-list"></i>
						</a>
						<span class="text-sm mx-3 md:text-xl font-bold text-white">Index</span>
						<span class="text-sm mx-3 md:text-xl font-bold text-white">Blog</span>
						<span class="text-sm mx-3 md:text-xl font-bold text-white">Info</span>
					</div>
				</nav>
			</div>
			<div class="relative flex flex-row justify-center max-w-7xl mx-auto py-16">
				<h1 class="text-3xl font-bold text-white">Title</h1>
			</div>
		</header>
		<main>
			<div class="container mx-auto">
				<div class="w-full">
					<div class="grid grid-cols-4">
						<div class="order-2 sm:order-1 col-span-4 sm:col-span-3">
							<div class="m-3 border-b border-t p-5">
								<h3 class="text-lg">첫 글 작성</h3>
								<p class="text-base">안녕하세요 새로운 글이 등록되었습니다.</p>
								<p class="mt-2 text-sm text-slate-500">글의 본문 내용을 간략하게 앞부분만 잘라서 현재 영역에 적어서 정리를 합니다... 길면
									자동으로 잘리도록</p>
							</div>
						</div>
						<div class="order-1 sm:order-2">
							<div class="ms-3 mt-2">
								<span class="text-sm">Posts</span>
								<ul class="ps-3">
									<li class="text-xs py-0.5">IT & Computer</li>
									<li class="text-xs py-0.5">데이터베이스</li>
									<li class="text-xs py-0.5">여행</li>
									<li class="text-xs py-0.5">일상</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>

</template>

<style></style>
