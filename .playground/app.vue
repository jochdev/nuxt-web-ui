<script setup lang="ts">

const {message} = useHello()

</script>

<template>
    <div>
        <h1>{{ message }}</h1>
        <Buttonjc>Test!</Buttonjc>
    </div>
</template>