<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel magnam accusantium non cum! Sit, natus?
            Cupiditate culpa rem enim quod nobis quas minus maxime sint voluptatum velit, dolorum aut.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa expedita aliquid vero quidem vitae, dolore
            sequi quam nemo distinctio nesciunt odio cum recusandae fugit delectus quod aliquam vel aperiam totam?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/IDR')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>