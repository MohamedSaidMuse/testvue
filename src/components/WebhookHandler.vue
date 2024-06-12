<template>
    <div>
      <h1>Webhook Data</h1>
      <div v-if="webhookData">
        <pre>{{ webhookData }}</pre>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        webhookData: null,
      };
    },
    created() {
      this.fetchWebhookData();
    },
    methods: {
      fetchWebhookData() {
        const webhookEndpoint = 'http://localhost:3000/webhook';
  
        axios
          .post(webhookEndpoint, {
            data: {
              message: 'Hello from Zapier!',
            },
          })
          .then((response) => {
            this.webhookData = response.data;
          })
          .catch((error) => {
            console.error('Error fetching webhook data:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  