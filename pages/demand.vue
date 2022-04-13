<template>
<section class="m-24 text-white">
    <Title>
        TALK
    </Title>
    <Title>
        AANVRAGEN
    </Title>
    <Title size="2" class="mx-40">
        JOUW GEGEVENS
    </Title>

    <div class="container px-24 text-black">
        <div class="grid grid-cols-2 gap-4 place-items-center h-48 ...">
            <div>
                <input class="m-3 p-3 px-24" v-model="name" placeholder="Naam">
            </div>
            <div>
                <input class="m-3 p-3 px-24" v-model="phone_number" placeholder="Telefoon">
            </div>
            <div>
                <input class="m-3 p-3 px-24" v-model="email" placeholder="Email">
            </div>
            <div>
                <input class="m-3 p-3 px-24" v-model="business" placeholder="Bedrijf">
            </div>
        </div>
        <div class="grid place-items-center ...">
            <input class="m-3 p-3 px-96" v-model="subject" placeholder="Onderwerp">
        </div>
    </div>
    <Title size="2" class="mx-40">
        DATUM
    </Title>
    <br><br><br>
    <div class="grid grid-cols-2 gap-4 place-items-center h-48 ...">
        <div class="Calendar">
            <vc-calendar v-model="date" :min-date="new Date()" />
        </div>

        <div>
            <div>
                <input class="m-3 p-3 px-12 text-black" v-model="time" placeholder="Tijd">
            </div>
            <br>
            <div class="m-3">
                <input type="radio" id="locatie" value="locatie" v-model="picked">
                <label for="locatie">Op Locatie</label>
                <br>
                <input type="radio" id="digitaal" value="digitaal" v-model="picked">
                <label for="digitaal">Digitaal</label>
            </div>
            <div>
                <Button>
                    Verzenden
                </Button>
            </div>
        </div>
    </div>

</section>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            email: null,
            phone_number: null,
            date: new Date(),
            subject: null

        }
    }
}
</script>

<style lang="scss">
@import "assets/css/variables";
</style>
