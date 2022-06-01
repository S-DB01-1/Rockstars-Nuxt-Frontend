<template>
  <div class="container">
    <form v-on:submit.prevent="submitForm()">
      <div class="mb-4">
        <p :class="{
          'px-4': true,
          'text-red-600': statusType === 'error',
          'text-green-400': statusType === 'correct'
        }" v-show="statusText">
          {{ statusText }}
        </p>
        <Title size="2" class="mb-4" style="color: white">
          Jouw Gegevens
        </Title>
        <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
          <div class="mt-5">
            <FormInput v-model="name" placeholder="Naam" />
          </div>
          <div class="mt-5">
            <FormInput v-model="datetime" :min="setMinDate()" type="datetime-local"/>
          </div>
          <div class="mt-5">
            <FormInput v-model="phone_number" type="tel" placeholder="Telefoon" />
          </div>
        </div>

        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="mt-5">
            <FormInput v-model="email" type="email" placeholder="Email" />
          </div>
          <div class="mt-5 flex items-center flex-wrap gap-4 text-white">
            <RadioButton name="location" value="opLocatie" text="Op locatie"/>
            <RadioButton name="location" value="digitaal" text="Digitaal"/>
          </div>
        </div>



        <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="mt-5">
            <FormInput v-model="company" placeholder="Bedrijf" />
          </div>
          <div class="mt-5">
            <FormInput v-model="subject" placeholder="Onderwerp" />
          </div>
        </div>

        <recaptcha class="m-2"/>

          <Button theme="default" @click="submitForm()" :status="btnStatus">
            VERZENDEN
          </Button>

      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Button from "~/components/Dumb/Atoms/Button"
import Title from "~/components/Dumb/Atoms/Title"
import RadioButton from "~/components/Dumb/Atoms/RadioButton"
import FormGroup from "~/components/Dumb/Atoms/FormGroup"

export default {
  name: "redesign-demand",
  components: { FormGroup, RadioButton, Title, Button },
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
      statusType: null,
      btnStatus: 'default'
    }
  },
  methods: {
    submitForm: async function () {
      this.btnStatus = 'loading'
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
            this.btnStatus = 'default';
            this.clearForm();

            if (response.status === 201){

              this.$router.push({path: '/success'});
            }
          }
        ).catch(error => {
          this.btnStatus = 'default';
          this.setModal('Er is een fout opgetreden.', 'error')
          console.log(error)
        });

        await this.$recaptcha.reset()
      } catch(error) {
        this.setModal('Er is een fout opgetreden.', 'error')
        console.log(error);
      }
    },
    setModal(text, type='error') {
      this.statusType = type;
      this.statusText = text;
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
      return today;

    },
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
