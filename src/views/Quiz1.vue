<template>
    <v-parallax
   dark
   src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
 >
   <div id="app">
     <Quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
     <Modal
       v-show="showModal"
       header="Congratulations!"
       subheader="You've completed your Quiz!"
       v-bind:quizScore="quizScore"
       @reload="updateQuiz"
       @close="showModal = false"
     />
   </div>
</v-parallax>
 </template>
 
 <script>
 import Quiz from "@/views/Quiz.vue";
 import Modal from "@/views/Modal.vue";
 export default {
   name: "App",
   components: {
     Quiz,
     Modal,
   },
   data() {
     return {
       quizKey: 0,
       showModal: false,
       quizScore: {
         allQuestions: 0,
         answeredQuestions: 0,
         correctlyAnsweredQuestions: 0,
       },
     };
   },
   methods: {
     handleQuizCompleted(score) {
       this.quizScore = score;
       this.showModal = true;
     },
     updateQuiz() {
       this.showModal = false;
       this.quizKey++;
     },
   },
 };
 </script>
 