<template>
  <div class="filters">
    <div class="filters__button">
      <button class="filters__button-hide button">Hide filter <img :src="require('../images/arrow-down.svg')"></button>
    </div>
    <div class="filters__container">
      <div class="filters__items_rate filters__item">
        <div class="filters__items_rate-name item__name">Interest rate</div>
        <div class="filters__items_rate-select item__select">
          <select name="rate">
            <option value="select">Select</option>
            <option value="rate">Rate</option>
          </select>
        </div>
      </div>
      <div class="filters__items_ltv filters__item">
        <div class="filters__items_ltv-name item__name">LTV</div>
        <div class="filters__items_ltv-select item__select">
          <select name="ltv">
            <option value="select">Select</option>
            <option value="ltv">LTV</option>
          </select>
        </div>
      </div>
      <div class="filters__items_country filters__item">
        <div class="filters__items_country-name item__name">Country</div>
        <div class="filters__items_country-select item__select">
          <select name="country">
            <option value="select">Select</option>
            <option value="latvia">Latvia</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
          </select>
        </div>
      </div>
      <div class="filters__items_project filters__item">
        <div class="filters__items_project-name item__name">Project</div>
        <div class="filters__items_project-select item__select">
          <select name="project">
            <option value="select">Select</option>
            <option value="project">Project</option>
          </select>
        </div>
      </div>
      <div class="filters__items_type filters__item">
        <div class="filters__items_type-name item__name">Loan type</div>
        <div class="filters__items_type-select item__select">
          <select name="type">
            <option value="select">Select</option>
            <option value="type">Type</option>
          </select>
        </div>
      </div>
    </div>
    <div class="filters__bottom">
      <div class="filters__bottom_hide">
        <input type="checkbox" name="hide" id="checkbox-show">
        <label class="filters__bottom_hide-label-1" for="checkbox-show"></label>
        <label class="filters__bottom_hide-label-2" for="checkbox-show">Hide my invested projects</label>
      </div>
      <div class="filters__bottom_show">
        <button class="filters__bottom-show button">Show</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'appFilters',

    data() {
      return {

      }
    },

    props: {
      filtersData: {
        type: Array,
        default() {
          return [];
        },
      }
    },
}
</script>

<style lang="sass" scoped>
.item__name
  font-size: 14px
  font-weight: 400
  line-height: 17px
  color: #999999
  margin-bottom: $margin

.item__select
  select
    width: 100%
    height: 44px
    font-size: 16px
    line-height: 19px
    font-weight: 500
    background-color: #24282C
    border: 1px solid rgba(254, 254, 254, 0.12)
    color: #999999
    cursor: pointer
    padding: $padding*2

.filters
  display: flex
  justify-content: flex-start
  flex-direction: column

  &__button
    display: flex

    &-hide
      border-radius: 38px
      img
        margin-left: $margin*3

  &__container
    display: flex
    justify-content: space-between
    align-items: center
    margin-top: $margin*6

  &__items
    display: flex
    flex-direction: column
    justify-content: flex-start

    &_rate
      flex-basis: 11%
    &_ltv
      flex-basis: 11%
    &_country
      flex-basis: 21%
    &_project
      flex-basis: 26%
    &_type
      flex-basis: 21%

  &__bottom
    display: flex
    justify-content: space-between
    align-items: center
    margin-top: $margin*4
    &_hide
      position: relative
      font-size: 16px
      font-weight: 400
      line-height: 20px
      color: #999999
      input
        visibility: hidden
        &:checked + .filters__bottom_hide-label-1:after
          opacity: 1
      &-label-1
        position: absolute
        cursor: pointer
        width: 27px
        height: 27px
        left: 0
        top: -2px
        background: #24282C
        border: 1px solid rgba(254, 254, 254, 0.12)
        border-radius: 2px
        &:after
          opacity: 0
          content: ''
          position: absolute
          top: 2px
          left: 2px
          width: 20px
          height: 20px
          background: $main-green-color
          border-radius: 2px
          transition: 0.5s
        &:hover::after
          opacity: 0.2
          background: $main-green-color
          border-radius: 2px

      &-label-2
        cursor: pointer
        margin-left: 20px

    &-show
      border-radius: 4px

</style>