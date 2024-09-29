<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListinig from "@/components/JobListinig.vue";
</script>


<template>
  <Hero title="Test Title " subTitle="Test Sub Title" />
  <HomeCards />
  <JobListinig limit="3" showButton="true" />
</template>
