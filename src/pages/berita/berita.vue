<template>
  <div id="faq" class="faq section-bg">
    <div class="container">
      <div class="section-title">
        <a href="/berita">
          <h2>berita</h2>
        </a>
      </div>
    </div>
    <section id="services" class="services section-bg">
      <div class="container d-flex mt-4">
        <div class="row">
          <div
            class="col-md-8 d-flex align-items-stretch mt-3"
            style="width: 600px"
            data-aos-delay="100"
            v-for="(berita, index) in data"
            :key="index"
          >
            <div class="icon-box">
              <img
                :src="berita.fotoPath"
                class="card-img-top"
                alt="Foto berita"
                style="width: 200px"
              />
              <h4>{{ berita.judul }}</h4>
              <h5>
                {{ berita.isi ? berita.isi.substring(0, 50) + " ..." : "" }}
              </h5>
              <p>{{ formatDateTimeFromServer(berita.createdAt) }}</p>
              <router-link
                :to="{ name: 'Detail Berita', params: { id: berita.id } }"
              >
                <button class="btn btn-primary">Lihat Detail</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

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
  </div>
</template>
<script>
import { mounted } from "vue";

export default {
  data() {
    return {
      data: {},
      judul: "",
      isi: "",
      foto_path: "",
      nama_user: "",
      tanggal_unggah: "",
      page: 1,
      totalPage: 10,
    };
  },

  methods: {
    getDataBerita() {
      console.log("databerita");
      const self = this;
      self.$store.dispatch("getData", ["berita", []]).then((response) => {
        console.log(response.data);
        this.data = response.data;
      });
    },

    formatDateTimeFromServer(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hours = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours(),
        minutes = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return `${[day, month, year].join("/")} ${[hours, minutes].join(":")}`;
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
    this.getDataBerita();
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
