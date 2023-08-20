<template>
  <div id="faq" class="faq section-bg">
    <div class="container">
      <div class="section-title">
        <a href="/galeri">
          <h2>Galeri</h2>
        </a>
      </div>
    </div>
  </div>
  <section id="portfolio" class="portfolio">
    <div class="container">
      <div class="row portfolio-container" data-aos-delay="200">
        <div
          class="col-lg-4 col-md-6 portfolio-item ml-3"
          v-for="(galeri, index) in data"
          :key="index"
        >
          <div class="portfolio-img">
            <img :src="galeri.fotoPath" class="img-fluid" alt="foto" />
          </div>
          <div class="portfolio-info align-item-stretch">
            <h4>{{ galeri.keterangan }}</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-else class="d-flex justify-content-center align-items-center">
      <h3 class="text-center p-5">Galeri Kosong</h3>
    </div> -->
    <div class="pagination">
      <button
        @click="onClickPrev"
        :disabled="page === 1"
        class="btn btn-primary"
      >
        Prev
      </button>
      <span class="page-info">{{ page }} / {{ totalPage }}</span>
      <button
        @click="onClickNext"
        :disabled="page === totalPage"
        class="btn btn-primary"
      >
        Next
      </button>
    </div>
  </section>
</template>
<script>
import { mounted } from "vue";

export default {
  data() {
    return {
      data: {},
      foto_path: "",
      keterangan: "",
      tanggal_unggah: "",
      page: 1,
      totalPage: 10,
    };
  },

  methods: {
    getDataGaleri() {
      console.log("dataGaleri");
      const self = this;
      self.$store.dispatch("getData", ["gallery", []]).then((response) => {
        console.log(response.data);
        this.data = response.data;
      });
    },

    onClickPrev() {
      if (this.page > 1) {
        this.page--;
      }
    },
    onClickNext() {
      if (this.page < this.totalPage) {
        this.page++;
      }
    },
  },
  mounted() {
    this.getDataGaleri();
  },
};
</script>
<style>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.page-info {
  margin: 0 10px;
}
</style>
