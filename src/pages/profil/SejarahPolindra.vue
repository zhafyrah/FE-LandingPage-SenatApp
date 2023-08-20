<template>
  <div id="faq" class="faq section-bg">
    <div class="container">
      <div class="section-title">
        <a href="/sejarah">
          <h2>Sejarah Polindra</h2>
        </a>
      </div>
      <div class="container">
        <section id="skills" class="skills">
          <div class="container aos-init aos-animate" data-aos="fade-up">
            <div
              class="col-lg-6 d-flex align-items-center aos-init aos-animate"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img :src="data.fotoUrl" class="img-fluid" alt="" />
            </div>
            <div class="row">
              <div
                class="col-lg-12 mt-4 content aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <p class="justify-content-center">
                  {{ data.isi }}
                </p>
              </div>
            </div>
            <!-- <div
              v-else
              class="d-flex justify-content-center align-items-center"
            >
              <h3 class="text-center p-5">Sejarah Polindra Tidak Tersedia</h3>
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
    };
  },
  methods: {
    getDataSejarah() {
      console.log("getDataSerjara");
      const self = this;
      self.$store.dispatch("getData", ["sejarah", []]).then((response) => {
        console.log(response.data);
        // self.dataSejarah = response.data;
        // const filters = this.filteredByIdSejarah();
        this.data = response.data[0];
      });
    },
  },
  mounted() {
    this.getDataSejarah();
  },
};
</script>
<style></style>
