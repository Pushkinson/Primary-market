<template>
  <div class="main">
    <div class="main__wrapper">
      <!-- <div class="main__plus_background" v-for="item in mainCount" :key="item"><span>+</span></div> -->
      <div class="main__header">
        <div class="main__header__content">
          <div class="main__header__content_text">Primary market</div>
          <app-view
            :viewData="rawData"
            :viewFilters="filters"
          />
        </div>
        <app-logo />
      </div>
      <app-filters
      :filtersData="rawData"
      />
      <div class="market">
        <div class="market__wrapper">
          <app-market-item
            v-for="marketItem in filteredDataItems"
            :key="marketItem.article"
            :itemData="marketItem"
          />
        </div>
      </div>
      <div class="main__button" :class="{ 'element-hide': itemsCount === rawData.length}">
        <button class="main__button_show"
        @click="changeItemsCount"
        >
          <span>See more</span>
          <img :src="require('../images/btn-arrow.svg')" alt="see more">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AppFilters from '../components/appFilters';
import appLogo from "../components/appLogo";
import AppMarketItem from '../components/appMarketItem';
import appView from "../components/appView";

const rawData = [
    {
      image: "item-image-blue.svg",
      name: "Renovation appartments in Town",
      city: "Riga, Latvia",
      percent: "48",
      leftToPay: "345,564",
      target: "500.000",
      month: 6,
      interest: "18",
      article: "I1",
      available: true,
      view: "open"
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
      article: "I2",
      available: true,
      view: "funded"
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
      article: "I3",
      available: true,
      view: "repaid"
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
      article: "I4",
      available: true,
      view: "comming"
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
      article: "I5",
      available: true,
      view: "open"
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
      article: "I6",
      available: true,
      view: "repaid"
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
      article: "I7",
      available: true,
      view: "repaid"
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
      article: "I8",
      available: true,
      view: "comming"
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
      article: "I9",
      available: true,
      view: "open"
    }
      ];

export default {
  name: "MainPage",

  components: {
    appLogo,
    appView,
    AppFilters,
    AppMarketItem,
  },

  data() {
    return {
      rawData,
      dataItems: [],
      itemsCount: 3,
      filters: {
          view: 'all',
          search: '',
        },
    }
  },

  computed: {
    // marketItems() {
    //   return this.rawData.map((item) => ({
    //     ...item,
    //   }));
    // },

    addMarketItems() {
      return this.itemsCount;
    },

    filteredDataItems() {
      let filteredDataItems = this.rawData;

      if (this.filters.search) {
        const concatMarketItem = (marketItem) =>
        [marketItem.article, marketItem.name, marketItem.city].join(' ').toLowerCase();
        filteredDataItems = filteredDataItems.filter((marketItem) =>
        concatMarketItem(marketItem).includes(this.filters.search.toLowerCase()),
        );
      }

      return filteredDataItems;
    },
  },

  mounted() {
      for (let i = 0; i < this.itemsCount; i++) {
        this.dataItems.push(rawData[i]);
      }
    },

    methods: {
      changeItemsCount(event) {
        if (this.itemsCount === rawData.length) {
          event.target.classList.add = 'main__button-hide';
          return;
        } else if (this.itemsCount < rawData.length) {
          this.itemsCount += 3;
        }
      },
    },

    watch: {
      addMarketItems(newCount, oldCount) {
        for (let i = oldCount; i < newCount; i++) {
        this.dataItems.push(rawData[i]);
        }
      },
    }

}
</script>

<style lang="sass" scoped>
.main
  width: 100%
  background: linear-gradient(50deg, $main-back-color 80%, rgba(31, 34, 37, 0.985) 20%)
  font-family: $family
  color: #fff
  font-size: 18px
  z-index: -2

  &__wrapper
    width: 90%
    margin: 0 auto
    padding: $padding*4 0

  &__plus_background
    span
      color: #fff
      font-size: 17px
      font-weight: 900
      opacity: 1
      border-radius: 5px
      box-shadow: 0 0 6px rgba(0,0,0,.8)

  &__header
    display: flex
    justify-content: space-between
    align-items: center
    &__content
      display: flex
      flex-direction: column
      justify-content: flex-start
      align-items: center
      &_text
        width: 100%
        font-size: 34px
        font-weight: 600
        display: flex
        justify-content: flex-start
        align-items: center
      &_view
        width: 100%
        display: flex
        justify-content: flex-start
        align-items: center

  &__button
    display: flex
    justify-content: space-around
    align-items: center
    &_show
      display: flex
      justify-content: center
      align-items: center
      width: 160px
      height: 36px
      color: #FEFEFE
      font-size: 14px
      font-weight: 500
      background-color: rgba(0, 0, 0, 0)
      cursor: pointer
      border: none
      border-top: 1px solid #F5A623
      border-bottom: 1px solid #F5A623
      outline: none
      margin: $margin*4
      &:hover > span + img, &:hover > span
        transform: scale(1.1)
      span
        transition: 0.5s
      img
        transition: 0.5s
        margin-left: $margin*3

.market
  width: 100%
  margin-top: $margin*20
  &__wrapper
    margin: 0 auto
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap

.element-hide
  display: none

</style>
