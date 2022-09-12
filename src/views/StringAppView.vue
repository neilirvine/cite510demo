<template>
     <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
<v-container fluid>
<v-card
    color="grey">
     <v-container>
  <v-card-title> String Manipulator </v-card-title>

   <v-text-field label="Enter word" v-model="text" bg-color="black"></v-text-field>

   <v-btn @click="outcome" aria-hidden="true">
        Results
   </v-btn>
     <pre>

Vowels: {{ vowels }} Numbers: {{ num }} Consonants: {{ cons }}  Modified: {{ conv }} 
     </pre>            
     </v-container>

 </v-card>  
</v-container>
 
     </v-parallax>
</template>

<script setup>
import { ref } from 'vue'

const text = ref()
const vowels = ref(0)
const num = ref(0)
const cons = ref(0)
const conv = ref()

function outcome() {
     vowels.value = text.value.match(/[aeiou]/gi).length; // match to AEIOU
     num.value = text.value.match(/\d/g)?.length || 0; //match to digits otherwise 0
     cons.value = text.value.match(/[bcdfghjklmnpqrstvwxyz]/gi).length; //match to consonant
     conv.value = text.value.replace(/[aeiou]/gi, '*');
     return vowels.value, num.value, cons.value, conv.value
}


</script>