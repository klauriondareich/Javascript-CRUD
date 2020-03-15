<template>
  <div class="index container">
    <div class="card">
      <div class="card-content">
        <h2 class="indigo-text">{{total}} FCFA</h2> 
        <ul>
          <li v-for="(element, index) in depenses" :key="index">
              <i class="material-icons delete" @click="deleteSpend(index,element.id)">delete</i>
              <router-link :to="{name:'editsmoothie', params:{slug:element.slug}}">
                <i class="material-icons edit">edit</i>
              </router-link>
              <span class="chip">{{element.title}}</span><br>
              <span class="chip">{{element.price}} FCFA</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../firebase/init'
export default {
  name: 'Home',
  data(){
    return {
      modeldepense: db.collection("spends"),
      depenses:[],
      total: null
    }
  },
  methods:{
    // Delete spends item
    deleteSpend(index, id){
      this.modeldepense.doc(id).delete()
      .then(() =>{
        this.depenses.splice(index, 1)
      })
    },
    calculTotal(){
      this.total = this.depenses.reduce((acc, curr)=>{
        return acc + curr.price
      }, 0)
    }
  },
  created(){
    // Retrieving data from the database
    this.modeldepense.get().then(snapshot =>{
      if(!snapshot.empty){
        snapshot.forEach((doc) => {
          let obj = doc.data();
          obj.id = doc.id;
          this.depenses.push(obj);
        });
      }
    })
  },
  mounted(){
   this.calculTotal()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    display: inline-block;
    border: 1px solid;
    margin: 10px;
    padding: 10px;
    padding-top: 20px;
    border-radius: 0 0 2px 2px;
  }
  h2{font-size: 23px}
  i{
    font-size: 20px;
    color: #aaa;
    cursor: pointer;
  }
  i.delete{
    position: absolute;
    top: 0;
    right: 0px;
  }
  i.edit{
    position: absolute;
    top: 0;
    left: 0px;
  }
  li{
    position: relative;
    top: 0;
    left: 0;
  }
</style>
