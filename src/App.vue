<script setup>
import AppHeader from '/src/components/AppHeader.vue';

</script>

<template>
	<AppHeader></AppHeader>
	
	<main>
		<Suspense>
			<router-view></router-view>
		</Suspense>
	</main>

</template>

<style></style>
