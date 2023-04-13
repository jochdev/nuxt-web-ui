<script setup lang="ts">
const { message } = useHello();
const { clienteDesde } = useFormatDates();
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <Buttonjc>Test!</Buttonjc>

    <h1>Prueba Data</h1>
    <p>{{ clienteDesde(new Date()) }}</p>
  </div>
</template>
