<template>
  <section>
    <div class="container">
      <form v-on:submit.prevent="submitForm()">
        <div class="mb-4">
          <Title size="2" class="mb-4" style="color: white">
            Jouw Gegevens
          </Title>
          <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
            <div class="mt-1">
              <input type="text" name="naam" id="naam" v-model="name"
                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                     placeholder="Naam">
            </div>
            <div class="mt-1">
              <input type="datetime-local" name="datetime" id="datetime" v-model="datetime"
                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none">
            </div>
            <div class="mt-1">
              <input type="tel" name="telephone" id="telephone" v-model="phone_number"
                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                     placeholder="Telefoonnummer">
            </div>
          </div>

          <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="mt-5">
              <input type="email" name="email" id="email" v-model="email"
                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                     placeholder="Email">
            </div>
            <div class="mt-1 lg:mt-5">
              <input type="text" name="bedrijf" id="bedrijf" v-model="company"
                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                     placeholder="Bedrijf">
            </div>
          </div>
          <div class="mt-5">
            <textarea name="subject" id="subject" maxlength="254" v-model="subject"
                      class="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                      placeholder="Onderwerp"></textarea>
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

          <recaptcha
            @error="onError"
            @success="onSuccess"
            @expired="onExpired"
          />

          <div v-if="btnLoading === false">
            <Button status="normal" theme="default" id="submitButton">
              VERZENDEN
            </Button>
          </div>
          <div v-else-if="btnLoading === true">
            <Button  status="loading" theme="default" id="loadingButton" disabled>
              VERZENDEN
            </Button>
          </div>

        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Button from "~/components/Dumb/Atoms/Button"
import Title from "~/components/Dumb/Atoms/Title"
import Recaptcha from "@/components/Smart/Recaptcha";

import RadioButton from "../components/Dumb/Atoms/RadioButton"
import FormGroup from "../components/Dumb/Atoms/FormGroup"


export default {
  name: "redesign-demand",
  components: {
    Button,
    Title,
    Recaptcha,
    RadioButton,
    FormGroup
  },
  data() {
    return {
      name: null,
      email: null,
      phone_number: null,
      datetime: null,
      subject: null,
      picked: null,
      company: null,
      statusText: null,
      btnLoading: false
    }
  },
  methods: {
    submitForm: async function () {
      try {
        const token = await this.$recaptcha.getResponse()

        const res = await axios.post('https://s8ifzokvp35u68fi.azurewebsites.net/api/v1/ondemand/', {
          name: this.name,
          email: this.email,
          phone_number: this.phone_number,
          date: this.datetime,
          subject: this.subject,
          company: this.company
        }).then(response => {
            this.clearForm();
            this.btnLoading = true;

            if (response.status === 201){

              this.$router.push({path: '/success'});
            }
          }
        ).catch(error => {
          console.log(error)
        });

        await this.$recaptcha.reset()
      } catch(error) {
        console.log(error);
      }
    },
    onError (error) {
      console.log('Error happened:', error)
    },
    onSuccess() {
      console.log('success');
    },
    onExpired() {
      console.log('expired');
    },

    clearForm() {
      this.name = null
      this.email = null
      this.phone_number = null
      this.datetime = null
      this.subject = null
      this.picked = null
      this.company = null
    },
    setMinDate() {

      let today = new Date();
      let day = today.getDate();
      let month = today.getMonth()+1;
      let year = today.getFullYear();
      let hours = today.getHours();
      let min = today.getMinutes();

      //Makes is so that minutes between 1-10 get a 0 before it
      if (min<10){
        min='0'+min
      }
      //Makes is so that days between 1-10 get a 0 before it
      if(day<10){
        day='0'+day
      }
      //Makes is so that months between 1-10 get a 0 before it
      if(month<10){
        month='0'+month
      }

      today = year+'-'+month+'-'+day+'T'+hours+':'+min+':00';
      document.getElementById("datetime").setAttribute("min", today);

    }
  },
  mounted(){
    this.setMinDate()
  },
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
