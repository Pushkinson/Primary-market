<template>
  <div class="main__header__content_view view">
      <div class="view__form_radio">
        <input id="view-radio-1" type="radio" name="radio" value="all" checked>
        <label for="view-radio-1">All</label>
      </div>
      <div class="view__form_radio">
        <input id="view-radio-2" type="radio" name="radio" value="open" :checked="filter.view === 'open'">
        <label for="view-radio-2">Open</label>
      </div>
      <div class="view__form_radio">
        <input id="view-radio-3" type="radio" name="radio" value="funded" :checked="filter.view === 'funded'">
        <label for="view-radio-3">Funded</label>
      </div>
      <div class="view__form_radio">
        <input id="view-radio-4" type="radio" name="radio" value="4">
        <label for="view-radio-4">Repaid</label>
      </div>
      <div class="view__form_radio">
        <input id="view-radio-5" type="radio" name="radio" value="5">
        <label for="view-radio-5">Coming soon</label>
      </div>
      <div class="search">
        <input
        type="text"
        id="search"
        class="search_input"
        placeholder="Search"
        v-model="filter.search"
        >
      </div>
  </div>
</template>

<script>

export default {
    name: "appView",

    data() {
      return {
        filter: {
          view: 'all',
          search: '',
        }
      }
    },

    computed: {
      filterSearch() {
        return this.filter.search;
      }
    },

    watch: {
      filter: {
        handler(nV, oV) {
          console.log(nV.search, oV.search);
        },
        deep: true,
      }
      // filterSearch(nV, oV) {
      //   console.log(nV, oV);
      // }
    },

    methods: {
      onInput(event) {
        this.filter.search = event.target.value;
      }
    }
}
</script>

<style lang="sass" scoped>
.view
  display: flex
  margin-top: $margin*8

  &__form_radio
    display: flex
    justify-content: space-between
    align-items: center
    font-size: 18px
    font-weight: 500
    line-height: 22px
    margin-right: $margin*6
    input
      display: none
      &:checked + label
        color: #FEFEFE
        opacity: 1
        border-bottom: 1px solid $main-green-color
      &:hover
        color: red

    label
      opacity: 0.4
      color: #EDEDED
      cursor: pointer
      padding-bottom: $padding

</style>>
