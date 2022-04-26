<template>
  <div class="card" style="width: 18rem;">
      <img :src=character.image class="card-img-top">
      <div class="card-body">
          <h5 class="card-title">{{character.name}}</h5>
      </div>
      <button @click="informar" class="btn btn-primary">Click!</button>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: ['character'] ,
  methods: {
      informar(){
          this.$emit('app-titulo-click',this.character)
      }
  },
}
</script>
