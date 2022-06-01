<template>
  <label class="form-radio m-2">
    <input type="radio" :name="name" :value="value" :id="value">
    <label :for="value">
      {{ text }}
    </label>
    <span class="mt-1 checkmark"></span>
  </label>
<!--  <div class="form-check">-->
<!--    <input type="radio" :name="name" :value="value" :id="value">-->
<!--    <label class="form-check-label inline-block text-gray-800" :for="value">-->
<!--      {{ text }}-->
<!--    </label>-->
<!--  </div>-->
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    text: String,
    name: String,
    value: String,
  }
}
</script>

<style scoped>
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

/* When the radio button is checked, add a yellow background */
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
