<script setup lang="ts">

const {message} = useHello()

</script>

<template>
    <div>
        <h1>{{ message }}</h1>
        <Button class="bg-red-500">Test!</Button>
    </div>
</template>