<script setup lang="ts">

const {message} = useHello()

</script>

<template>
    <div>
        <h1>{{ message }}</h1>
        <Button>Test!</Button>
    </div>
</template>