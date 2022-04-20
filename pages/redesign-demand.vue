<template>
  <section>
    <div class="container">
      <form  v-on:submit.prevent="submitForm()">
        <div class="mb-4">
          <Title size="2" class="mb-4" style="color: white">
            Jouw Gegevens
          </Title>
          <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="mt-5">
              <input type="text" name="naam" id="naam" v-model="name"
                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                     placeholder="Naam">
              <p class="mt-2 hidden peer-required:block text-red-500 text-sm">Vul alstublieft een naam in.</p>
            </div>
            <div class="mt-5">
              <input type="datetime-local" name="datetime" id="datetime" v-model="datetime"
                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none">
              <p class="mt-2 hidden peer-required:block text-red-500 text-sm">Vul alstublieft een bedrijf naam in.</p>
            </div>
          </div>

          <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="mt-5">
              <input type="email" name="email" id="email" v-model="email"
                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                     placeholder="Email">
              <p class="mt-2 hidden peer-invalid:block text-red-500 text-sm">Geef alstublieft een geldig email adres.</p>
            </div>
            <div class="mt-5">
              <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="telephone" id="telephone" v-model="phone_number"
                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                     placeholder="Telefoonnummer">
              <p class="mt-2 hidden peer-invalid:block text-red-500 text-sm">Geef alstublieft een geldig
                telefoonnummer.</p>
            </div>
<!--            <div class="mt-1 lg:mt-5">-->
<!--              <input type="text" name="bedrijf" id="bedrijf" v-model="business"-->
<!--                     class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"-->
<!--                     placeholder="Bedrijf">-->
<!--              <p class="mt-2 hidden peer-required:block text-red-500 text-sm">Vul alstublieft een bedrijf naam in.</p>-->
<!--            </div>-->
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

          <Button theme="default">
            VERZENDEN
          </Button>


        </div>
      </form>
    </div>
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
    }
  },
  methods: {
    submitForm: async function () {
     const res = await axios.post('https://s8ifzokvp35u68fi.azurewebsites.net/api/v1/ondemand/', {
       name: this.name,
       email: this.email,
       phone_number: "test",
       date: this.datetime,
       subject: this.subject
     });
     alert(res.status);
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
