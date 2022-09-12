<template>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col>
            <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="src/assets/pic1.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Math App
    </v-card-title>

    <v-card-subtitle>
        This application consists of input generated <br>
        calculator that converts 2 inputed number into <br>its Sum / Difference / Quotient / Product <br> / Average
    </v-card-subtitle>

    <v-card-actions>
        <v-btn
      text
      color="primary" @click="relocate"
    >
      Primary
    </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
        </v-col>
        <v-col order="12">
            <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="src/assets/pic3.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Quiz App
    </v-card-title>

    <v-card-subtitle>
<pre>
This app is a random generated
Quiz Application Made entirely
Via VUE.JS Green marks as correct
Red is Wrong and it Counts your score
and Percentage.
</pre>
    </v-card-subtitle>

    <v-card-actions>
        <v-btn
      text
      color="primary" @click="relocate2"
    >
      Primary
    </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
        </v-col>
        <v-col order="1">
            <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="src/assets/pic2.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      String App
    </v-card-title>

    <v-card-subtitle>
    <pre>
This app automatically counts every 
Vowel/Number/Consonants and even 
Modify a certain letters into Asterisk 
(*)
    </pre>
    </v-card-subtitle>

    <v-card-actions>
        <v-btn
      text
      color="primary" @click="relocate1"
    >
      Primary
    </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  <script>
  export default {
    methods: {
    relocate:function(){
        this.$router.push('/basicMath'); 
        
    },
    relocate1:function(){
        this.$router.push('/stringApp'); 
        
    },
    relocate2:function(){
        this.$router.push('/quiz1'); 
        
    }

  }
}
  </script>
  