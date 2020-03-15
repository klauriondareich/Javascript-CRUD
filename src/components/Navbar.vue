<template>
  <div class="navbar">
     <nav class="nav-extended bg-color darken-2">
         <div class="nav-content">
             <router-link to="">
                 <span class="nav-title">Ninja Smoothies</span>
             </router-link>
             <button class="btn-floating btn-large halfway-fab bg-color-btn">
                 <router-link :to="{name: 'addSpend'}">
                    <i class="material-icons">add</i>
                 </router-link>
             </button>
         </div>
     </nav>
  </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>
.nav-title{
  margin-left: 70px;
}
.bg-color{
    background-color: #0073b1!important;
}
.bg-color-btn{
    background-color: #2f7b15!important;
}
</style>