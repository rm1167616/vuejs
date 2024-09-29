<script>
export default {
  setup(){
    const name = 'radwan';
    const status = 'active';
    const tasks = ['taskOne','taskTwo','taskThree','taskFour'];
    const toggleStatus = () =>{
      if(this.status==='active'){
          this.status='pending';
      }
      else if (this.status==='pending')
      {
          this.status='inactive'
      }
      else if (this.status==='inactive')
      {
          this.status='active'
      }
    }
    return{
      name,
      tasks,
      status,
      toggleStatus
    }
  }
};
</script>

<template>
  <h1>
    {{ name }}
  </h1>
  <p v-if="status==='active'">User IS active...</p>
  <p v-if="status==='pending'">User IS pending...</p>
  <p v-if="status==='inactive'">User IS  inactive...</p>
  <h3>Tasks:</h3>
  <ui>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ui>
  <!-- <br><hr> -->
  <button v-on:click="toggleStatus"> Change Statues </button>
</template>

<style>
h1 {
  color: red;
}
</style>
