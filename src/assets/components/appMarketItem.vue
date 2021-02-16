<template>
  <div class="market__item">
    <div class="market__item__header">
      <div class="market__item__header_image"><img :src=" require('../images/' + item.image) " alt="blue"></div>
      <div class="market__item__header_content">
        <div class="market__item__header_content-name">{{ item.name }}</div>
        <div class="market__item__header_content-city">{{ item.country }}</div>
      </div>
    </div>
    <div class="market__item__content">
      <div class="market__item__content_percent">
        <div class="market__item__content_percent-number">
          <span>{{ item.percent + '%' }}</span>
          <div class="market__item__content_percent-number--border"></div>
        </div>
        <div class="market__item__content_percent-left">{{ '€' + item.leftToPay + ' ' + 'left' }}</div>
      </div>
      <div class="market__item__content_stats">
        <div class="market__item__content_stats_targt">
          <div class="market__item__content_stats_target-name">Target</div>
          <div class="market__item__content_stats_target-price">{{ '€' + item.target }}</div>
        </div>
        <div class="market__item__content_stats_period">
          <div class="market__item__content_stats_period-name">Period</div>
          <div class="market__item__content_stats_period-month">{{ item.month + ' ' + 'months' }}</div>
        </div>
        <div class="market__item__content_stats_rate">
          <div class="market__item__content_stats_rate-name">Rate</div>
          <div class="market__item__content_stats_rate-percent">{{ item.interest + '%' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'appMarketItem',

    data() {
      return {
        item: this.itemData,
      }
    },

    props: {
      itemData: {
        type: Object,
        default() {
          return {}
        },
      },
    },
}
</script>

<style lang="sass" scoped>
.market__item
  flex-basis: 30%
  display: flex
  flex-direction: column
  justify-content: stretch
  font-size: 16px
  line-height: 19px
  box-shadow: 0 0 8px rgba(0,0,0,.1)
  min-width: 290px
  margin: $margin*4 0

  &__header
    display: flex
    flex-direction: column
    justify-content: flex-start
    background: linear-gradient(179.92deg, #25292c 0.07%, #141517 109.79%)
    padding: $padding*2
    &_image
      height: 50px
    &_content
      margin-top: 140px
      display: flex
      flex-direction: column
      justify-content: flex-start
      &-name
        font-weight: 600
      &-city
        color: $main-green-color
        font-size: 14px
        line-height: 17px
        margin-top: $margin

  &__content
    background-color: #262a2d
    display: flex
    flex-direction: row
    justify-content: space-between
    padding: $padding*4 $padding*5
    &_percent
      flex-basis: 55%
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      &-number
        position: relative
        display: flex
        font-weight: 600
        font-size: 24px
        line-height: 29px
        &--border
          position: absolute
          top: -145%
          left: -85%
          flex-basis: 50%
          width: 130px
          height: 130px
          border-radius: 50%
          border: 12px solid $main-green-color
          // background: radial-gradient(ellipse at center, rgba(255,113,12,0) 60%, rgba(255,113,12,1) 51.5%, #fff 51.5%)
      &-left
        font-weight: 500
        font-size: 13px
        line-height: 16px
        color: #999999
    &_stats
      flex-basis: 32%
      display: flex
      flex-direction: column
      justify-content: space-around
      // padding-top: $padding*5
      // padding-right: $padding*5
      &_target
        display: flex
        flex-direction: column
        justify-content: space-around
        &-name
          display: flex
          flex-direction: column
          justify-content: space-around
          color: #636363
          font-weight: 400
          line-height: 120%
          margin: $margin
        &-price
          display: flex
          flex-direction: column
          justify-content: space-around
          font-weight: 600
          color: #FEFEFE
          margin: $margin
          padding-bottom: $padding*2
          border-bottom: 1px solid $main-green-color
      &_period
        @extend .market__item__content_stats_target
        &-name
          @extend .market__item__content_stats_target-name
        &-month
          @extend .market__item__content_stats_target-price
      &_rate
        @extend .market__item__content_stats_target
        &-name
          @extend .market__item__content_stats_target-name
        &-percent
          @extend .market__item__content_stats_target-price
          border-bottom: none

</style>