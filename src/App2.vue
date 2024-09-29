<script setup>

import { ref ,onMounted } from 'vue';

    const name = ref('radwan');
    const status = ref('active');
    const tasks = ref(['taskOne','taskTwo','taskThree','taskFour']);
    const newTask =  ref('')

    const toggleStatus = () =>{
      if(status.value==='active'){
        status.value='pending';
      }
      else if (status.value==='pending')
      {
        status.value='inactive'
      }
      else if (status.value==='inactive')
      {
        status.value='active'
      }
    }
  const addTask =()=> {
    if(newTask.value.trim()!== ''){
      tasks.value.push(newTask.value);
      newTask.value='';
    }
  
  } 
  const deleteTask =(index) =>{
    tasks.value.splice(index,1);
     
  } ;
  onMounted(async()=>{
    try
    {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      tasks.value = data.map((task)=>task.title)

    }
    catch(error)
    {

    }
  })

</script>

<template>
   
  <!-- <h1>
    {{ name }}
  </h1> -->
  <br><br>
 
  
  
  <!-- <br><hr> -->


  <form @submit.prevent="addTask">
  <label for="newTask">Add Task  </label>
  <input type="text" id="newTask" name="newTask" v-model="newTask">
  <button type="submit">submit</button>
  </form>
  
  <h3>Tasks:</h3>
  <ui>
    <li v-for="(task ,index) in tasks" :key="task">
    <span>
    {{ task }}
    <button @click="deleteTask(index)">X</button>
    </span></li>
  </ui>
   
  <button v-on:click="toggleStatus"> Change Statues </button>
  <p v-if="status==='active'">User IS active...</p>
  <p v-if="status==='pending'">User IS pending...</p>
  <p v-if="status==='inactive'">User IS  inactive...</p>



</template>

<style>
h1 {
  color: red;
}
</style>
