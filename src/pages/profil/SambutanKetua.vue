<template>
  <div id="faq" class="faq section-bg">
    <div class="container">
      <div class="section-title">
        <a href="/sambutan-ketua">
          <h2>Sambutan Ketua Senat</h2>
        </a>
      </div>
      <div class="">
        <section id="skills">
          <div class="container aos-init aos-animate" data-aos="fade-up">
            <div class="row">
              <div
                class="content aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <p>
                  {{ data.isi }}
                </p>
              </div>
              <img
                :src="data.fotoUrl"
                class="img-fluid mt-2"
                alt=""
                style="width: 200px"
              />
              <p class="mt-2 text-left bold">{{ data.namaKetuaSenat }}</p>
              <p>{{ data.judul }}</p>
            </div>
            <!-- <div
              v-else
              class="d-flex justify-content-center align-items-center"
            >
              <h3 class="text-center p-5">
                Sambutan Ketua Senat Tidak Tersedia
              </h3>
            </div> -->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: {},
      Judul: "",
      Isi: "",
      namaKetuaSenat: "",
    };
  },
  methods: {
    getDataSambutan() {
      const self = this;
      self.$store.dispatch("getData", ["sambutan", []]).then((response) => {
        this.data = response.data[0];
      });
    },
  },
  mounted() {
    this.getDataSambutan();
  },
};
</script>
<style></style>
