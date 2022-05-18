<template>
  <section class="p-4 lg:px-24">
    <form v-on:submit.prevent="submitForm()">
      <div class="mb-4">
        <Modal :type="statusType" v-show="statusText">
          {{ statusText }}
        </Modal>
        <Title size="2" class="mb-4" style="color: white">
          Jouw Gegevens
        </Title>
        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="mt-5">
            <FormInput v-model="name" placeholder="Naam" />
            <p class="mt-2 hidden peer-required:block text-red-500 text-sm">Vul alstublieft een naam in.</p>
          </div>
          <div class="mt-5">
            <FormInput v-model="datetime" type="datetime-local"/>
            <p class="mt-2 hidden peer-required:block text-red-500 text-sm">Vul alstublieft een bedrijf naam in.</p>
          </div>
        </div>

        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="mt-5">
            <FormInput v-model="email" type="email" placeholder="Email" />
            <p class="mt-2 hidden peer-invalid:block text-red-500 text-sm">Geef alstublieft een geldig email adres.</p>
          </div>
          <div class="mt-5">
            <FormInput v-model="phone_number" type="tel" placeholder="Telefoon" />
            <p class="mt-2 hidden peer-invalid:block text-red-500 text-sm">Geef alstublieft een geldig
              telefoonnummer.</p>
          </div>
        </div>
        <div class="mt-5">
          <FormTextArea v-model="subject" placeholder="Onderwerp" />
        </div>

        <div class="mt-5 flex flex-wrap gap-4 text-white">
          <label class=" form-radio">Op Locatie
            <input type="radio" name="location" value="opLocatie" v-model="picked">
            <span class="mt-1 checkmark"></span>
          </label>
          <label class=" form-radio">Digitaal
            <input type="radio" name="location" value="digitaal" v-model="picked">
            <span class="mt-1 checkmark"></span>
          </label>
        </div>
        <Button theme="default">
          VERZENDEN
        </Button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "redesign-demand",
  data() {
    return {
      name: null,
      email: null,
      phone_number: null,
      datetime: null,
      subject: null,
      picked: null,
      statusText: null
    }
  },
  methods: {
    submitForm: async function () {
     const res = await axios.post('https://s8ifzokvp35u68fi.azurewebsites.net/api/v1/ondemand/', {
       name: this.name,
       email: this.email,
       phone_number: this.phone_number,
       date: this.datetime,
       subject: this.subject
     }).then(response => {
          this.clearForm();
          if (response.status === 201) {
            this.setModal("Formulier is correct verzonden.", 'correct');
          } else {
            this.setModal("Er is een fout opgetreden.", 'error');
          }
       }
     ).catch(error => {
       console.log(error)
       this.setModal("Er is een fout opgetreden.", 'error');
     });
    },
    setModal(text, type=true, time=-1) {
      if (time !== -1) {
        setTimeout(() => {this.statusText = null}, time)
      }
      this.statusType = type;
      this.statusText = text;
    },
    clearForm() {
        this.name = null
        this.email = null
        this.phone_number = null
        this.datetime = null
        this.subject = null
        this.picked = null
    }
  }
}
</script>

<style lang="scss">
/* The container */
.form-radio {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.form-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.form-radio:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.form-radio input:checked ~ .checkmark {
  background-color: #FFE000;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.form-radio input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.form-radio .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
