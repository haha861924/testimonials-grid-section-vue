<template>
    <div :class="[`md:w-20 w-4/5 bg-${bgColor} rounded-lg`]">
        <img :src="cardContent.photo">
    </div>
</template>
<script>
export default {
    name: 'card',
    props:['bgColor', 'cardContent'],
    data(){
        return{

        }
    }
}
</script>