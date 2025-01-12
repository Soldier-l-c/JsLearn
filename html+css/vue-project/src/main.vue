
<template>
 <div>
            <div class="min_box">
                <div class="title">Todo App</div>
                <div class="todo-form">
                    <input 
                        v-model="input_value" 
                        class="todo-input" 
                        type="text"
                        placeholder="add todo..."
                    />
                    <button @click="input_button_click" class="todo-button">Add Todo</button>
                </div>

                <div v-for="(item,index) in list" 
                :class="[item.isCompleted ? 'completed' : 'item']"
                >
                    <div class="cn">
                        <input v-model="item.isCompleted" type="checkbox">
                        <div class="name">{{item.name}}</div>
                    </div>
                    <button @click="item_del(index)" class="del">DEL</button>
                </div>
            </div>
</div>
</template>

<script setup>
import {ref} from 'vue'

const input_value = ref('')
const list = ref([
])

function input_button_click() {
    if(input_value.value.length >0){
        list.value.push({isCompleted: false, name: input_value.value})
    }
}

function item_del(index) {
    list.value.splice(index,1)
}

</script>

<style>
            .completed{
                text-decoration: line-through;
                opacity: 0.4;
                display: flex;
                box-sizing: border-box;
                width: 80%;
                height: 50px;
                margin:  8px auto;
                padding: 16px;
                border-radius: 20px;
                box-shadow: rgb(140, 157, 165, 0.2) 0px 8px 20px;
                align-items: center;
                justify-content: space-between;
            }
            .del{
                color: red;
                cursor: pointer;
                border: none;
                background-color: white;
            }
            .item{
                display: flex;
                box-sizing: border-box;
                width: 80%;
                height: 50px;
                margin:  8px auto;
                padding: 16px;
                border-radius: 20px;
                box-shadow: rgb(140, 157, 165, 0.2) 0px 8px 20px;
                align-items: center;
                justify-content: space-between;
            }
            .cn{
                display: flex;
            }
            .todo-input{
                width: 60%;
                height: 50px;
                border-radius: 20px 0 0 20px;
                padding-left: 15px;
                font-size: 20px;
                border: 1px solid #dfe1e5;
                outline: none;
            }
            .todo-button{
                width: 100px;
                height: 54px;
                border-radius: 0 20px 20px 0;
                color: white;
                text-align: center;
                cursor: pointer;
                border: none;
                background: linear-gradient(to right, rgb(113, 65, 168),rgb(44, 114, 251, 1));
            }
            .todo-form{
                display: flex;
                padding-left: 70px;
                padding-right: auto;
                padding-top: 20px;
            } 
            .min_box{
                width: 98%;
                height: auto;
                background-color: rgb(255, 255, 255);
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, .5);
                margin-top: 40px;
                margin-left: 1%;
                margin-right: 1%;
            }
            body{
                background: linear-gradient(to right, rgb(113, 65, 168),rgb(44, 114, 251, 1));
            }
            .title{
                font-size: 30px;
                font-weight: 700;
                text-align: center;
                color: rgb(159, 58, 58);
                padding-top: 20px;
            }
            .name{
                text-align: center;
            }
        </style>
</style>