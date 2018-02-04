<template>
    <div>
        <h2>Book</h2>
        <h2>Book</h2>
        <h2>Book</h2>
        <h2>Book</h2>
    </div>
</template>

<script>
   
    export default {
         mounted:function(){
            this.$store.commit('change','rgb(149,84,73)');
            this.$store.commit('titleChange','Book');
        }
      
    }
</script>

<style scoped>

</style>