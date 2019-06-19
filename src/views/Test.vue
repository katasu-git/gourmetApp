<template>
  <div id="test">
      {{ leftTime }}
      <button v-on:click="countDownTimer">count start</button>
      <div v-for="food in listOfFood">
          {{ food }}
        <button class="green" v-on:click="addToGood(food)">Good</button>
        <button v-on:click="addToBad(food)">Bad</button>
      </div>
      <div>good is{{ listOfTinder.good }}</div>
      <div>bad is{{ listOfTinder.bad }}</div>
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
        NumOfPeople: 3,
        listOfFood: ['牛丼', 'お好み焼き', 'うどん', 'そば', 'カレー', '焼肉', '海鮮'],
        listOfTinder: {
            good: [],
            bad: []
        },
        leftTime: 30,
    }
  },
  created: function() {
      this.shuffleArray(this.listOfFood);
  },
  methods: {
      shuffleArray: function(array) {
          for(let i = array.length - 1; i > 0; i--) {
              let r = Math.floor(Math.random() * (i + 1));
              let tmp = array[i];
              array[i] = array[r];
              array[r] = tmp;
          }
      },
      addToGood: function(foodName) {
          this.listOfTinder.good.push(foodName);
      },
      addToBad: function(foodName) {
          this.listOfTinder.bad.push(foodName);
      },
      countDownTimer: function() {
          this.leftTime = 30; //変数の初期化
          let id = setInterval(() => {
              this.leftTime--;
              if(this.leftTime <= 0) { //終了条件
                  clearInterval(id);
              }
          }, 1000)
      }
  }
 }
</script>

<style lang="scss" scoped>

#test {
  height: 100%;
  width: 100%;
  background-color: #FEFEFE;
}

.imgAndText {
  width: calc(100% - 16px * 2);
  position: absolute;
  top: calc(50% - 16px * 10);
  right: 0;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center; //中央
  justify-content: center; //たて
}

button {
    width: 100px;
    height: 50px;
}

.green {
    background-color: lightgreen;
}

</style>
