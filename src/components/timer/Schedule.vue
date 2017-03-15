<template>

  <div class="container-fluid">
    <article class="timeline">
      <main>
        <article class="completed">
          <section>
            <header>10 days</header>
            <main></main>
            <footer>Phase 01</footer>
          </section>
        </article>
        <article class="completed">
          <section>
            <header>10 days</header>
            <main></main>
            <footer>Phase 02</footer>
          </section>
        </article>
        <article class="">
          <section>
            <header>10 days</header>
            <main></main>
            <footer>Phase 03</footer>
          </section>
        </article>
        <article class="">
          <section>
            <header>10 days</header>
            <main></main>
            <footer>Phase 03</footer>
          </section>
        </article>
        <article class="">
          <section>
            <header>10 days</header>
            <main></main>
            <footer>Phase 03</footer>
          </section>
        </article>
        <article class="">
          <section>
            <header>10 days</header>
            <main></main>
            <footer>Phase 03</footer>
          </section>
        </article>
      </main>
    </article>
  </div>

</template>

<script>
import { schedule } from '../../service/airtable.js'
export default {
  name: 'schedule',
  data: function(){
    return {
      schedule: schedule,
    }
  },
}
</script>

<style lang="stylus" scoped>


@import url(https://fonts.googleapis.com/css?family=Lato:400,700)

$borderColor=#D5DBCD
$bulletSize=10
$borderColorCompleted=#AEE239
$textColor=#444
$textColorHeader=#999k
$counterBlackground=#40C0CB

article.timeline
  opacity 0.5
  margin-top 20px
  margin-bottom 10px
  width 100%
  text-align center
  font-family 'Lato', sans-serif
  font-size 1em
  transition all 1000ms cubic-bezier(0.175, 0.885, 0.320, 1.275)
  >header
    text-align left
    padding-bottom 20px
    span
      font-size 1.5em
      color $textColor
  >footer
    text-align left
    padding-top 20px
    span
      width auto
      font-size 1em
      color white
      font-weight bold
      background-color #40C0CB
      padding 5px
  >main
    display flex
    flex-direction column
    width 100%

    article
      position relative
      padding-left 0px
      padding-right 0px
      section
        min-height 60px
        cursor pointer
        header
          font-size 1em
        footer
          font-size 1.2em
        header,
        footer
          color $borderColor
          transition color 1s
          text-align left
          padding-left 10px
        main
          border-top 2px solid $borderColor
          text-align left
          height 0
          margin 0
          padding 0
          width 60px
          left auto
          top 0
          transform  translateX(-30px) rotate(90deg)
          &::after
            position absolute
            background $borderColor
            border-radius 50%
            content " "
            left 50%
            width ($bulletSize)px
            height ($bulletSize)px
            margin-left -($bulletSize/2)px
            margin-top -($bulletSize/2)px
            transition all 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275)
      &:hover
        section
          main
            &::after
              width ($bulletSize*2)px
              height ($bulletSize*2)px
              margin-top -($bulletSize)px
              margin-left -($bulletSize)px
      &.completed
        section
          main
            border-top 2px solid $borderColorCompleted
            &::after
              background-color $borderColorCompleted
        &:hover
          header
            color $borderColorCompleted
          footer
            color $textColor
  &:hover
    opacity 1

@media only screen and (min-width : 992px)
  article.timeline
    margin-top 10px
    margin-bottom 10px
    text-align center
    main
      flex-direction row
      article
        section
          min-height 0px
          header
            padding-bottom 20px
            font-weight bold
            text-transform lowercase
          footer
            padding-top 20px
          header,
          footer
            text-align center
            padding-left 10px
          main
            border-top 2px solid $borderColor
            padding-right 20px
            padding-left 20px
            width 100%
            min-width 100px
            transform rotate(0deg)
            &::after
              margin-left -($bulletSize/2)px

</style>
