<template>
    <div :class="[`md:w-20 w-4/5 ${cardContent.bgColor} rounded-lg p-8`]">
        <div class="grid grid-cols-6 gap-y-8">
            <img :src="cardContent.photo" 
            :class="['rounded-full col-span-1 w-7', 
                cardContent.id===1 && 'border-2 border-light-purple',
                cardContent.id===4 && 'border-2 border-light-purplest']">
            <div class="col-span-3 text-left">
                <h1 :class="['text-white text-13px font-medium', 
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
        <div :class="['text-white text-xl my-4 leading-6 font-semibold',
                cardContent.id===3 && 'text-dark',
                cardContent.id===4 && 'text-dark-white',
                cardContent.id===5 && 'text-dark']">
            {{cardContent.title}}
        </div>
        <div :class="['text-white text-13px my-4 leading-18 font-medium opacity-70',
                cardContent.id===1 && 'text-gray',
                cardContent.id===3 && 'text-dark',
                cardContent.id===5 && 'text-dark']">
            {{cardContent.content}}
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