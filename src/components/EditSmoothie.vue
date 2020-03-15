<template>
  <div class="container marg-t">
    <div class="row">
        <form class="col s12" @submit.prevent>
            <span class="feedback" v-if="feedback">Les champs ne doivent pas être vide</span>
            <div class="row" v-if='smoothie'>
                <div class="input-field col s6">
                <input id="title" name="title" type="text" class="validate" v-model="smoothie.title">
                </div>
            </div>
            <div class="row" v-if='smoothie'>
                <div class="input-field col s6">
                <input id="title" name="title" type="text" class="validate" v-model="smoothie.price">
                </div>
            </div>
            <div>
            <button class="btn bg-color-btn" @click="updateSmoothie()">Editer</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import db from '../firebase/init'
export default {
    name: "EditSmoothie",
    data(){
        return {
            modeldepense: db.collection("spends"),
            feedback: false,
            slug: this.$route.params.slug,
            smoothie: null
        }
    },
    methods:{
       updateSmoothie(){
           if(this.smoothie.title && this.smoothie.price){
               this.modeldepense.doc(this.smoothie.id).update(this.smoothie);
               this.$router.push("/")
           }
       }
    },
    created(){
       this.modeldepense.where("slug", '==', this.slug).get().then(snapshot =>{
           snapshot.forEach(doc => {
               let obj = doc.data();
               obj.id = doc.id;
               this.smoothie = obj;    
           });
       })
    }
}
</script>

<style>
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