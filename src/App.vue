<template>
  <div class="text-center bg-purplest">
    <Card :bgColor="'red-500'" :cardContent="cardContent[0]"></Card>
  </div>
</template>

<script>
import Card from './components/Card.vue'
export default {
  name: "App",
  components:{Card},
    data() {
        return {
          cardContent:[
            {
              id: 1,
              photo: '../src/assets/logo.png',
              userName: 'Daniel Clifford',
              userDescribe: 'Verified Graduate',
              title:'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
              content: '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”'
            }
          ]
        };
    },
}
</script>