<template>
  <div class="grid gap-y-6 my-16 h-full w-full place-items-center md:grid-container">
    <Card :cardContent="cardContent[0]" class="md:item1"></Card>
    <Card :cardContent="cardContent[1]" class="md:item2"></Card>
    <Card :cardContent="cardContent[2]" class="md:item3"></Card>
    <Card :cardContent="cardContent[3]" class="md:item5"></Card>
    <Card :cardContent="cardContent[4]" class="md:item4"></Card>
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
              bgColor: 'bg-purplest',
              photo: '../src/assets/image-daniel.jpg',
              userName: 'Daniel Clifford',
              userDescribe: 'Verified Graduate',
              title:'I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.',
              content: '“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”'
            },
            {
              id: 2,
              bgColor: 'bg-dark',
              photo: '../src/assets/image-Jonathan.jpg',
              userName: 'Jonathan Walters',
              userDescribe: 'Verified Graduate',
              title: 'The team was very supportive and kept me motivated',
              content: '“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. “'
            },
            {
              id: 3,
              bgColor: 'bg-white',
              photo: '../src/assets/image-jeanette.jpg',
              userName: 'Jeanette Harmon',
              userDescribe: 'Verified Graduate',
              title: 'An overall wonderful and rewarding experience',
              content: '“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”'
            },
            {
              id: 4,
              bgColor: 'bg-darkest',
              photo: '../src/assets/image-patrick.jpg',
              userName: 'Patrick Abrams',
              userDescribe: 'Verified Graduate',
              title: 'Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.',
              content: '“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”'
            },
            {
              id: 5,
              bgColor: 'bg-white',
              photo: '../src/assets/image-kira.jpg',
              userName: 'Kira Whittle',
              userDescribe: 'Verified Graduate',
              title: 'Such a life-changing experience. Highly recommended!',
              content: '“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”'
            }
          ]
        };
    },
}
</script>
<style>
html, body {
  background-color: #ECF2F8;
}
.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }

.grid-container {
  display: grid;
  grid-template-areas:
  'header header header menu menu right'
  'main main footer footer footer right';
}
</style>