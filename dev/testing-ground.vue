<template>
<div class="testing-ground">
  <!-- Import components here to test -->
  <v-flex-container schema="customClass" tag="a" href="/test">
    <template slot="testing123">
      <h1 class="test1">Hello World</h1>
      <h1 class="test2">Foo, Bar</h1>
    </template>
    
    <h1 class="testing2" slot="level-2">Foo Bar</h1>
  </v-flex-container>
  
  <v-steps tag="v-flex-container"
           @stepChange="(step) => stepTest = step"
           :activeStep="stepTest"
           :bind="{ fill: true }">
    <transition-group name="fadeIn" mode="out-in" slot-scope="{ steps }" class="fill">
      <div class="green" @click="steps.incrementStep" :key="0" v-if="steps.step === 0"></div>
      <div class="red" @click="steps.decrementStep" :key="1" v-if="steps.step === 1"></div>
    </transition-group>
  </v-steps>
</div>
</template>

<script>
export default {
  data () {
    return {
      stepTest: 1
    }
  },
  mounted () {
    window.setTimeout(() => {
      this.stepTest = 0;
    }, 10000)
  }
}
</script>

<style lang="less">
* {
  box-sizing: border-box;
}

.fill {
  display: flex;
  flex-flow: column;
  flex: 1;
}

body {
  display: flex;
  min-height: 100vh;
  background-color: pink;
  margin: 0;
}


.testing-ground {
  display: flex;
  flex-flow: column;
  flex: 1;
}

.fadeIn {
  &-leave-to,
  &-enter {
    opacity: 0;
    max-height: 0;
  }
  
  &-enter-to,
  &-leave {
    opacity: 1;
    max-height: 10000px;
  }

  &-leave-active,
  &-enter-active {
    transition: opacity 1s ease;
  }
}

.red,
.green,
.blue,
.orange {
  display: flex;
  flex-flow: column;
  flex: 1;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.orange {
  background-color: orange;
}

.customClass {
    background-color: darken(white, 10%);

    &__wrapper {
        display: flex;
        flex-flow: row wrap;
        background-color: darken(white, 20%);
        margin: 0.5em;
    }
    &__column {
        background-color: darken(white, 30%);
        padding: 0.25em;
        margin: 0.5em;
    }
}

.test1, .test2 {
    background-color: red;
    margin: 0;
}
.testing2 {
    background-color: blue;
    margin: 0;
}
</style>
