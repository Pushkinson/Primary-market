<template>
  <div class="main__header__content_view view">
      <div class="view__form_radio">
        <input
          id="view-radio-1"
          type="radio"
          name="radio"
          value="all"
          v-model="filters.view"
        >
        <label for="view-radio-1">All</label>
      </div>
      <div class="view__form_radio">
        <input
          id="view-radio-2"
          type="radio"
          name="radio"
          value="open"
          v-model="filters.view"
        >
        <label for="view-radio-2">Open</label>
      </div>
      <div class="view__form_radio">
        <input
          id="view-radio-3"
          type="radio"
          name="radio"
          value="funded"
          v-model="filters.view"
        >
        <label for="view-radio-3">Funded</label>
      </div>
      <div class="view__form_radio">
        <input
          id="view-radio-4"
          type="radio"
          name="radio"
          value="repaid"
          v-model="filters.view"
        >
        <label for="view-radio-4">Repaid</label>
      </div>
      <div class="view__form_radio">
        <input
          id="view-radio-5"
          type="radio"
          name="radio"
          value="comming"
          v-model="filters.view"
        >
        <label for="view-radio-5">Coming soon</label>
      </div>
      <div class="view__search">
        <input
          type="text"
          id="search"
          class="search_input"
          placeholder="Search"
          v-model="filters.search"
        >
      </div>
  </div>
</template>

<script>

export default {
    name: "appView",

    data() {
      return {
      }
    },

    props: {
      viewFilters: {
        type: Object,
        default() {
          return {};
        },
      },
    },

    computed: {
      filters() {
        return this.viewFilters;
      },
    },
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

  &__search
    input
      font-size: 16px
      font-weight: 400
      line-height: 20px
      color: #999999
      outline: none
      height: 26px
      background: #24282C
      border: 1px solid rgba(254, 254, 254, 0.12)
      border-radius: 2px

</style>>
