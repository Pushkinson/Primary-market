<template>
  <div class="main">
    <div class="main__wrapper">
      <!-- <div class="main__plus_background" v-for="item in mainCount" :key="item"><span>+</span></div> -->
      <div class="main__header">
        <div class="main__header__content">
          <div class="main__header__content_text">Primary market</div>
          <app-view
            :viewFilters="filters"
            @onFilterChange="onFilterChange"
          />
        </div>
        <app-logo />
      </div>
      <app-filters
      :filtersData="filters"
      @onFilterChange="onFilterChange"
      @refreshFilters="refreshFiltersData"
      />
      <div class="market">
        <div class="market__wrapper">
          <app-market-item
            v-for="marketItem in marketItems"
            :key="marketItem.article"
            :itemData="marketItem"
          />
        </div>
        <!-- v-for="marketItem in marketItemsToRender" -->
      </div>
      <div class="main__button" :class="{ 'element-hide': DATA_LOADED}">
        <button class="main__button_show"
        @click="getData"
        >
          <span>See more</span>
          <img :src="require('../images/btn-arrow.svg')" alt="see more">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import AppFilters from '../components/appFilters';
import appLogo from "../components/appLogo";
import AppMarketItem from '../components/appMarketItem';
import appView from "../components/appView";

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
      filters: {
          view: 'all',
          search: '',
          rate: 'select',
          leftToPay: 'select',
          country: 'select',
          project: 'select',
          type: 'select',
          invested: false,
        },
    }
  },

  computed: {
    ...mapGetters([
      'ITEMS',
      'DATA_LOADED'
    ]),

    marketItems() {
      const filterView = this.filters;

      let resultItems = this.filteredDataItems.filter((marketItem) => {
        switch (filterView.view) {
          case 'all': return true;
          default: return marketItem.view === filterView.view;
        }
      });

      if (this.filters.search) {
        const concatMarketItem = (marketItem) =>
          [marketItem.name, marketItem.country, marketItem.leftToPay, marketItem.target].join(' ').toLowerCase();

        resultItems = resultItems.filter((marketItem) =>
          concatMarketItem(marketItem).includes(this.filters.search.toLowerCase()),
        );
      }

      // resultItems = resultItems.filter((marketItem) => {
      //   switch (filterView.rate) {
      //     case 'Select': return true;
      //     case 'high': if (marketItem.rate > 50) return marketItem;
      //     /* falls through */
      //     case 'low': if (marketItem.rate <= 50) return marketItem;
      //     /* falls through */
      //     default: return true;
      //   }
      // });



      return resultItems;
    },

    filteredDataItems() {
      let filteredDataItems = this.ITEMS;
      const filterView = this.filters;

      if (this.filters.view === "all") {
        filteredDataItems = filteredDataItems.filter((item) => item.view)
      } else if (this.filters.view === "open") {
        filteredDataItems = filteredDataItems.filter((item) => item.view)
      } else if (this.filters.view === "funded") {
        filteredDataItems = filteredDataItems.filter((item) => item.view)
      } else if (this.filters.view === "repaid") {
        filteredDataItems = filteredDataItems.filter((item) => item.view)
      } else if (this.filters.view === "comming") {
        filteredDataItems = filteredDataItems.filter((item) => item.view)
      }

      if (this.filters.search) {
        const concatMarketItem = (marketItem) =>
        [marketItem.article, marketItem.name, marketItem.city, marketItem.leftToPay, marketItem.target, marketItem.interest].join(' ').toLowerCase();
        filteredDataItems = filteredDataItems.filter((marketItem) =>
        concatMarketItem(marketItem).includes(this.filters.search.toLowerCase()),
        );
      }

      if (this.filters.rate == 'high') {
        filteredDataItems = filteredDataItems.filter(item => {
          if (item.interest > 50) return true;
          return false;
        });
      } else if (this.filters.rate == 'low') {
        filteredDataItems = filteredDataItems.filter(item => {
          if (item.interest <= 50) return true;
          return false;
        });
      }

      if (this.filters.leftToPay == 'high') {
        filteredDataItems = filteredDataItems.filter(item => {
          if (item.leftToPay >= '500000') return true;
          return false;
        });
      } else if (this.filters.leftToPay == 'low') {
        filteredDataItems = filteredDataItems.filter(item => {
          if (item.leftToPay <= '500000') return true;
          return false;
        });
      }

      if (this.filters.country == 'Riga, Latvia') {
        filteredDataItems = filteredDataItems.filter(item => {
          if (item.country == 'Riga, Latvia') return true;
          return false;
        });
      } else if (this.filters.country == 'Paris, France') {
        filteredDataItems = filteredDataItems.filter(item => {
          if (item.country == 'Paris, France') return true;
          return false;
        });
      }

      filteredDataItems = filteredDataItems.filter((marketItem) => {
        switch (filterView.country) {
          /* falls through */
          case 'Riga, Latvia':
            if (marketItem.country == 'Riga, Latvia') return true;
            else return false;
          /* falls through */
          case 'Paris, France':
            if (marketItem.country == 'Paris, France') return true;
            else return false;
          /* falls through */
          case 'Berlin, Germany':
            if (marketItem.country == 'Berlin, Germany') return true;
            else return false;
          /* falls through */
          case 'Saint-Petersburg, Russia':
            if (marketItem.country == 'Saint-Petersburg, Russia') return true;
            else return false;
          /* falls through */
          case 'Chicago, USA':
            if (marketItem.country == 'Chicago, USA') return true;
            else return false;
          /* falls through */
          case 'Venice, Italy':
            if (marketItem.country == 'Venice, Italy') return true;
            else return false;
          /* falls through */
          default: true;
        }
        return true;
      });

      filteredDataItems = filteredDataItems.filter((marketItem) => {
        switch (filterView.project) {
          /* falls through */
          case 'Renovation':
            if (marketItem.project == 'Renovation') return true;
            else return false;
          /* falls through */
          case 'New':
            if (marketItem.project == 'New') return true;
            else return false;
          /* falls through */
          case 'Best':
            if (marketItem.project == 'Best') return true;
            else return false;
          /* falls through */
          case 'Free':
            if (marketItem.project == 'Free') return true;
            else return false;
          /* falls through */
          case 'Amazing':
            if (marketItem.project == 'Amazing') return true;
            else return false;
          /* falls through */
          default: true;
        }
        return true;
      });

      if (this.filters.type == 'high') {
        filteredDataItems = filteredDataItems.filter(item => {
          if (item.target > '500000') return true;
          return false;
        });
      } else if (this.filters.type == 'low') {
        filteredDataItems = filteredDataItems.filter(item => {
          if (item.target <= '500000') return true;
          return false;
        });
      }

      if (this.filters.invested === true) {
        filteredDataItems = filteredDataItems.filter(item => {
          if (item.invested === true) return false;
          return true;
        });
      }


      return filteredDataItems;
    },
  },

  mutations: {
    refreshFiltersData(data) {
      this.filters.country = data;
      this.filters.leftToPay = data;
      this.filters.project = data;
      this.filters.rate = data;
      this.filters.type = data;
      this.filters.invested = false;
    },
  },

  methods: {
    ...mapActions([
      'GET_ITEMS_FROM_API'
    ]),

    onFilterChange(filter) {
      this.filters = {...filter};
    },

    refreshFiltersData(data) {
      this.filters.country = data;
      this.filters.leftToPay = data;
      this.filters.project = data;
      this.filters.rate = data;
      this.filters.type = data;
      this.filters.invested = false;

      const rate = document.querySelectorAll('.option-selected');
      rate.forEach((option) => {
        option.selected = true;
      });
    },

    getData() {
      this.GET_ITEMS_FROM_API();
    },

  },

  mounted() {
    this.GET_ITEMS_FROM_API();
  },

}
</script>

<style lang="sass" scoped>
.main
  width: 100%
  transition: 0.5s
  background: linear-gradient(50deg, $main-back-color 80%, rgba(31, 34, 37, 0.985) 20%) no-repeat
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
