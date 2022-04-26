<template>
  <div class="list">
    <samp> {{ clickedRAM }} </samp>
    <div class="row">
      <ListComponent
        v-for="personaje in charactersBB"
        :key="personaje.name"
        @app-titulo-click="clickRAM($event)"
        :character="personaje"
      />
    </div>
    <samp> {{ clickedBB }} </samp>
    <div class="row">
      <ListComponent
        v-for="personaje in charactersRAM"
        :key="personaje.name"
        @app-titulo-click="clickBB($event)"
        :character="personaje"
      />
    </div>
  </div>
</template>

<script>
import ListComponent from "@/components/ListComponent.vue";

export default {
  name: "ListView",
  components: {
    ListComponent,
  },
  data() {
    return {
      charactersRAM: [],
      urlRAM: "https://rickandmortyapi.com/api/character",
      clickedRAM: "",
      charactersBB: [],
      urlBB: "https://www.breakingbadapi.com/api/characters?limit=5",
      clickedBB: "",
      num: 0,
    };
  },
  methods: {
    clickRAM(infoDelHijo) {
      this.clickedRAM = infoDelHijo;
    },
    clickBB(infoDelHijo) {
      this.clickedBB = infoDelHijo;
    },
  },
  async created() {
    const [response, responseBB] = await Promise.all([
      fetch(this.urlRAM),
      fetch(this.urlBB),
    ]);
    //const response = await fetch(this.urlRAM)
    const [{ results }, charactersBB] = await Promise.all([
      response.json(),
      responseBB.json(),
    ]);

    for (let index = 0; index < 5; index++) {
      this.charactersRAM.push({
        name: results[index].name,
        image: results[index].image,
      });
    }

    for (let index = 0; index < 5; index++) {
      this.charactersBB.push({
        name: charactersBB[index].name,
        image: charactersBB[index].img,
      });
    }
  },
};
</script>
