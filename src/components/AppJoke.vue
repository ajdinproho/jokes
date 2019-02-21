<template>
  <div class="row">
    <div class="col s12 m3 13">
      <div class="card horizontal green darken-4">
      <div class="card-stacked">
        <div class="card-content">
          <p>{{ AppJoke.value }}</p>
            </div>
            <div class="card-action">
              <a id="button"
                @click="removeJoke(AppJoke.id)"
                class="waves-effect grey darken-4 btn"> REMOVE JOKE
              </a>
            </div>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  name: 'AppJoke',
  props: {
    AppJoke: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeJoke(jokeId) {
      this.$store.dispatch('removeJoke', jokeId);
    },
  },
};
</script>

<style lang="scss" scoped>
.row .col .m3 {
  width: 50px;
}
.card-content {
  color: white;
  font-weight: bold;
}
.btn {
  border-radius: 10px;
  font-weight: bold;
  color: white;
}
.card-action {
  border-color: #212121!important;
}
</style>
