<template>
    <div @click="onClick" class="button">{{text}}</div>
</template>

<script>
    import { ref } from 'vue'
    const text = ref('tttt')
    const button_index = ref(0);

    export default {
        name: 'Button',
        props: {
            text: String,
            button_index: Number
        },
        setup(props) {
            console.log('props', props);
        },
        methods:{
            onClick() {
                console.log('button_index', button_index.value);
                this.$emit('button-click', button_index.value);
            }
        }
    }

</script>

<style scoped>
    .button{
        color: red;
        cursor: pointer;
        border: none;
        background-color: white;
    }
</style>