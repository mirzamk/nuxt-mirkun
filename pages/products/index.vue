<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

// fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt Dojo | Products', 
    meta: [
        { name: 'description', content : "Nuxt MirKun Products "}
    ]
})

</script>

<style scoped></style>