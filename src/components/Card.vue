<template>
    <div :class="[`md:w-20 w-4/5 ${cardContent.bgColor} rounded-lg p-8`]">
        <div class="grid grid-cols-6 gap-y-8">
            <img :src="cardContent.photo" 
            :class="['rounded-full col-span-1 w-7', 
                cardContent.id===1 && 'border-2 border-light-purple',
                cardContent.id===4 && 'border-2 border-light-purplest']">
            <div class="col-span-3 text-left">
                <h1 :class="['text-white text-13px', 
                    cardContent.id===3 && 'text-dark',
                    cardContent.id===5 && 'text-dark']">
                        {{cardContent.userName}}
                </h1>
                <h4 :class="['text-white text-11px opacity-50 ',
                    cardContent.id===3 && 'text-dark',
                    cardContent.id===5 && 'text-dark']">
                        {{cardContent.userDescribe}}
                </h4>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'card',
    props:['cardContent'],
    data(){
        return{

        }
    }
}
</script>