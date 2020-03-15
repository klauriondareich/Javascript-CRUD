<template>
    <div class="container marg-t">
        <div class="row">
            <form class="col s12" @submit.prevent>
            <span class="feedback" v-if="feedback">Les champs ne doivent pas être vide</span>
            <div class="row">
                <div class="input-field col s6">
                <input id="title" name="title" type="text" class="validate" v-model="title">
                <label for="title">Dépense</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                <input id="amount" name="amount" type="text" class="validate" v-model="price">
                <label for="amount">Montant</label>
                </div>
            </div>
            <div>
            <button class="btn bg-color-btn" @click="addElement">Ajouter</button>
                <router-link :to="{name:'Home'}">
                    <button class="btn bg-color-btn">Terminer</button>
                </router-link>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
import db from '../firebase/init'
import Slugify from "slugify"
export default {
    name: "addSpend",
    data(){
        return {
          modeldepense: db.collection("spends"),
          title: null,
          price: null,
          feedback: false,
          slug: null
        }
    },
    methods:{
      // Add new elements
      addElement(){
        if(this.title && this.price){
            // Création du slug
            this.slug = Slugify(this.title, {
                replacement: '-',  
                remove: /[*+~.()'"!:@]/g,
                lower: true, 
            })

            this.modeldepense.add({title:this.title, price:this.price, slug:this.slug});
            this.title = null;
            this.price = null;
            this.feedback = false;
        }
        else{
           this.feedback = true
       }      
      }
    }
}

</script>

<style scoped>
.bg-color-btn{
    background-color: #0073b1!important;
    margin-right: 10px;
}
.marg-t{
    margin-top: 30px;
}
input{
   background-color: #F2F6FC!important; 
}
.feedback{
   color: red
}
</style>