<template>
  <div>
    <div class="card horizontal indigo darken-3">
      <div class="card-stacked">
        <div class="card-content">
          <p>{{ AppJoke.value }}</p>
            </div>
            <div class="card-action">
              <a id="button"
                @click="removeJoke(AppJoke.id)"
                class="waves-effect indigo darken-4 btn"> REMOVE JOKE
              </a>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppJoke',
  props: {
    Joke: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeJoke(jokeId) {
      this.$store.getters.dispatch('removeJoke', jokeId);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-content{
  color: #9e9e9e;
  font-weight: bolder;
}
.btn{
  color: #9e9e9e;
}
.card-action{
  border-color: #212121!important;
}
</style>
