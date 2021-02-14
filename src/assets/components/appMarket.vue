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
      marketItems: [
    {
      image: "item-image-blue.svg",
      name: "Renovation appartments in Town",
      city: "Riga, Latvia",
      percent: "48",
      leftToPay: "345,564",
      target: "500.000",
      month: 6,
      interest: "18",
      article: "T1",
      available: true
    },
    {
      image: "item-image-pink.svg",
      name: "Renovation appartments in Town",
      city: "Paris, France",
      percent: "78",
      leftToPay: "126,164",
      target: "800.000",
      month: 3,
      interest: "38",
      article: "T2",
      available: true
    },
    {
      image: "item-image-green.svg",
      name: "Renovation appartments in Town",
      city: "Berlin, Germany",
      percent: "52",
      leftToPay: "682,564",
      target: "300.000",
      month: 8,
      interest: "6",
      article: "T3",
      available: true
    },
    {
      image: "item-image-pink.svg",
      name: "Renovation appartments in Town",
      city: "Saint-Petersburg, Russia",
      percent: "89",
      leftToPay: "92,564",
      target: "100.000",
      month: 2,
      interest: "61",
      article: "T4",
      available: true
    },
    {
      image: "item-image-green.svg",
      name: "Renovation appartments in Town",
      city: "Chicago, USA",
      percent: "25",
      leftToPay: "822,564",
      target: "950.000",
      month: 9,
      interest: "22",
      article: "T5",
      available: true
    },
    {
      image: "item-image-blue.svg",
      name: "Renovation appartments in Town",
      city: "Venice, Italy",
      percent: "71",
      leftToPay: "275,564",
      target: "200.000",
      month: 5,
      interest: "47",
      article: "T6",
      available: true
    }
      ],
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