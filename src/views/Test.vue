<template>
  <div id="test">
      {{ leftTime }}
      <button v-on:click="countDownTimer">count start</button>
      <button v-on:click="countFoodVote">count vote</button>
      <div v-for="food in listOfFood">
          {{ food }}
        <button class="green" v-on:click="addToGood(food)">Good</button>
        <button v-on:click="addToBad(food)">Bad</button>
      </div>
      <div>forst man good is {{ tinderPersonal.person1.good }}</div>
      <div>second man is {{ tinderPersonal.person2.good }}</div>
      <div>now turn is {{ NumOfPeople }}</div>
      <div>all good vote is{{ listOfAllVote.good }}</div>
      <div>result is => {{ foodNameArray }}</div>
      <div>{{ foodVoteArray }}</div>
  </div>
</template>

<script>

export default {
  name: 'test',
  data () {
    return {
        NumOfPeople: 2, //let
        NumOfPeopleAvoid: 2, //const
        listOfFood: ['牛丼', 'お好み焼き', 'うどん', 'そば', 'カレー', '焼肉', '海鮮'],
        listOfAllVote: {
            good: [],
            bad: []
        },
        tinderPersonal: {
            person1: {
                good: [],
                bad: []
            },
            person2: {
                good: [],
                bad: []
            },
            person3: {
                good: [],
                bad: []
            },
            person4: {
                good: [],
                bad: []
            },
            person5: {
                good: [],
                bad: []
            },
            person6: {
                good: [],
                bad: []
            },
        },
        leftTime: 10,
        foodNameArray: [],
        foodVoteArray: []
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
          switch(this.NumOfPeople) {
              case 1:
                  this.tinderPersonal.person1.good.push(foodName);
                  break;

              case 2:
                  this.tinderPersonal.person2.good.push(foodName);
                  break;

              case 3:
                  this.tinderPersonal.person3.good.push(foodName);
                  break;

              case 4:
                  this.tinderPersonal.person4.good.push(foodName);
                  break;

              case 5:
                  this.tinderPersonal.person5.good.push(foodName);
                  break;

              case 6:
                  this.tinderPersonal.person6.good.push(foodName);
                  break;
          }
          this.listOfAllVote.good.push(foodName);
      },
      addToBad: function(foodName) {
          switch(this.NumOfPeople) {
              case 1:
                  this.tinderPersonal.person1.bad.push(foodName);
                  break;

              case 2:
                  this.tinderPersonal.person2.bad.push(foodName);
                  break;

              case 3:
                  this.tinderPersonal.person3.bad.push(foodName);
                  break;

              case 4:
                  this.tinderPersonal.person4.bad.push(foodName);
                  break;

              case 5:
                  this.tinderPersonal.person5.bad.push(foodName);
                  break;

              case 6:
                  this.tinderPersonal.person6.bad.push(foodName);
                  break;
          }
          this.listOfAllVote.bad.push(foodName);
      },
      countDownTimer: function() {
          this.leftTime = 10; //変数の初期化
          let id = setInterval(() => {
              this.leftTime--;
              if(this.leftTime <= 0) {
                  this.NumOfPeople--;
                  console.log('now turn is ' + this.NumOfPeople);
                  if(this.NumOfPeople == 0) {
                      this.goToNextPage();
                  }
                  clearInterval(id);
              }
          }, 1000)
      },
      goToNextPage: function() {
          console.log("hello");
      },
      countFoodVote: function() {
          for(let i = 0; i < this.listOfAllVote.good.length; i++) {
              let foodCount = 0; //カウントの初期化
              if(this.isNotExist(this.listOfAllVote.good[i], i)) {
                  this.foodNameArray.push(this.listOfAllVote.good[i]); //料理名の追加
                  for(let j = 0; j < this.listOfAllVote.good.length; j++) {
                      if(this.listOfAllVote.good[i] == this.listOfAllVote.good[j]) {
                            foodCount++; //料理名が一致すればカウント増やす
                      }
                  }
                  this.foodVoteArray.push(foodCount);
              }
          }
          //配列の中で最大値を求める
          console.log(Math.max.apply(null, this.foodVoteArray));
      },
      isNotExist: function(foodName, position) {
          let flag = true;
          for(let i = 0; i < this.listOfAllVote.good.length; i++) {
              if(foodName == this.foodNameArray[i]) {
                  if(position != i) {
                      //自分自身と一致している場合を排除
                      flag = false;
                      return flag;
                  }
              }
          }
          return flag;
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
