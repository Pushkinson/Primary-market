<template>
  <div class="market">
    <div class="market__wrapper">
      <app-market-item
        v-for="item in marketItems"
        :key="item.article"
        :itemData="item"
      />
    </div>
  </div>
</template>

<script>
import AppMarketItem from './appMarketItem'
export default {
  name: 'appMarket',

  components: {
    AppMarketItem,
  },

  data() {
    return {
      marketItems: this.marketData,
    }
  },

  props: {
    marketData: {
      type: Array,
      default() {
        return [];
      },
    }
  },

  // methods: {
  //   sendDataToParent() {
  //     this.$emit( 'sendDataToParent', this.marketItems.available)
  //   }
  // }
}
</script>

<style lang="sass" scoped>
.market
  width: 100%
  margin-top: $margin*20
  &__wrapper
    margin: 0 auto
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
</style>