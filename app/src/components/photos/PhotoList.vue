<template>
    <div>
        <h2>Photo</h2>
        <h2>Photo</h2>
        <h2>Photo</h2>
        <h2>Photo</h2>
    </div>
</template>

<script>
   
    export default {
         mounted:function(){
            this.$store.commit('change','rgb(61,68,90)');
            this.$store.commit('titleChange','Photo');
        }
      
    }
</script>

<style scoped>

</style>