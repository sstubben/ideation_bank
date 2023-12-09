<template>
  <div class="create-idea">
    <h1>Create Idea</h1>
    <form @submit.prevent="submitIdea">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" required>

      <label for="description">Description:</label>
      <textarea id="description" v-model="description" required></textarea>

      <label for="fun_factor">Fun Factor (1-10):</label>
      <input type="number" id="fun_factor" min="1" max="10" v-model="funFactor" required>

      <label for="complexity_factor">Complexity Factor (1-10):</label>
      <input type="number" id="complexity_factor" min="1" max="10" v-model="complexityFactor" required>

      <button type="submit" id="submit">Submit Idea</button>
    </form>
  </div>
  <div v-if="successMessage" id="success-message">
    {{ successMessage }}
  </div>

</template>

<script>
  import axios from 'axios'; // Import axios library

  export default {
    data() {
      return {
        title: '',
        description: '',
        funFactor: 0,
        complexityFactor: 0,
        successMessage: null,
      };
    },
    methods: {
      submitIdea() {
        const ideaData = {
          title: this.title,
          description: this.description,
          fun_factor: this.funFactor,
          complexity_factor: this.complexityFactor
        };

        axios.post('http://localhost:8000/ideas/', {
            title: this.title,
            description: this.description,
            fun_factor: this.funFactor,
            complexity_factor: this.complexityFactor,
        })
        .then(response => {
            this.successMessage = response.data.message;
            console.log(response.data);
            // Handle success as needed
        })
        .catch(error => {
            console.error(error);
            // Handle error as needed
        });
      }
    }
  };
</script>