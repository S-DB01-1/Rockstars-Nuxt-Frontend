<template>
  <section>
    <div class="container">
      <form>
        <div class="mb-4">
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-7 2xl:gap-20">
            <div>
              <Title size="2" class="mb-4" style="color: white">
                Jouw Gegevens
              </Title>
              <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="mt-1">
                  <input type="text" name="naam" id="naam" v-model="name"
                         class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                         placeholder="Naam">
                  <p class="mt-2 hidden peer-required:block text-red-500 text-sm">Vul alstublieft een naam in.</p>
                </div>
                <div class="mt-1">
                  <input type="email" name="email" id="email" v-model="email"
                         class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                         placeholder="Email">
                  <p class="mt-2 hidden peer-invalid:block text-red-500 text-sm">Geef alstublieft een geldig email adres.</p>
                </div>

                <div class="mt-1">
                  <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" name="telephone" id="telephone" v-model="phone_number"
                         class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                         placeholder="Telefoonnummer">
                  <p class="mt-2 hidden peer-invalid:block text-red-500 text-sm">Geef alstublieft een geldig
                    telefoonnummer.</p>
                </div>

                <div class="mt-1">
                  <input type="text" name="bedrijf" id="bedrijf" v-model="business"
                         class="peer max-h-11 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                         placeholder="Bedrijf">
                  <p class="mt-2 hidden peer-required:block text-red-500 text-sm">Vul alstublieft een bedrijf naam in.</p>
                </div>

              </div>
              <div class="mt-5">
                <textarea name="subject" id="subject" maxlength="254" v-model="subject"
                      class="peer px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                      placeholder="Onderwerp"></textarea>
              </div>
            </div>

            <div>

              <Title size="2" class="mb-4" style="color: white">
                Datum
              </Title>

              <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4">

                <div class="mt-1">
                  <vc-calendar trim-weeks v-model="date" :min-date="new Date()" />
                </div>

                <div class="flex 2xl:justify-end">
                  <div class="grid ">
                    <div class="mt-1">
                      <vc-date-picker mode="time" v-model="date" :timezone="timezone" />
                    </div>
                    <div class="mt-5 text-white">
                      <label class="form-radio">Op Locatie
                        <input type="radio" name="location" value="opLocatie" v-model="picked">
                        <span class="mt-1 checkmark"></span>
                      </label>
                      <label class="form-radio">Digitaal
                        <input type="radio" name="location" value="digitaal" v-model="picked">
                        <span class="mt-1 checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid place-items-end ">
            <Button theme="default">
              VERZENDEN
            </Button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "redesign-demand",
  data() {
    return {
      name: null,
      email: null,
      phone_number: null,
      date: new Date(),
      time: null,
      subject: null,
      picked: null,
      timezone: '',

    }
  }
}
</script>

<style lang="scss">
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

.form-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

.form-radio:hover input ~ .checkmark {
  background-color: #ccc;
}

.form-radio input:checked ~ .checkmark {
  background-color: #FFE000;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.form-radio input:checked ~ .checkmark:after {
  display: block;
}

.form-radio .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

textarea {
  height: 6.625rem;
}

</style>
