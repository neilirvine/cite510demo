<script >
export default {
data(){
    return {
    fNumber:0,
   sNumber:0,
   sum:0,
   diff:0,
   pro:0,
   quo:0,
   ave:0
  }
}, methods: {
    compute:function(){
    this.sum = this.fNumber + this.sNumber;
   this.diff = this.fNumber - this.sNumber;
   this.pro = this.fNumber * this.sNumber;
    this.quo = this.fNumber / this.sNumber;
     this.ave = (this.fNumber + this.sNumber)/2;
    }
}
}

</script>

<template>
<v-card >

<v-container fluid>
 
  <v-card color="grey">
    <v-container>
      <v-card-title> Calculator </v-card-title>
     <v-col
          cols="24"
          sm="12"
        >
  
        
  <v-text-field class="centered-input text--darken-3 mt-3" label="First Input" v-model.number="fNumber" bg-color="black"></v-text-field>
   
  <v-text-field class="centered-input text--darken-3 mt-3" label="Second Input" v-model.number="sNumber" bg-color="black"></v-text-field>

  <v-btn @click="compute" class="fa fa-align-center" aria-hidden="true">Result</v-btn>

  <pre>


  Sum: {{sum}} Difference: {{diff}} Product: {{pro}} Quotient: {{quo}} Average: {{ave}}
  </pre>

  </v-col>
  </v-container>
  </v-card>

</v-container>
</v-card>

 </template>




