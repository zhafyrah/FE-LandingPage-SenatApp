<template>
  <div id="faq" class="faq section-bg">
    <div class="container">
      <div class="section-title">
        <a href="/">
          <h2>Fungsi Kerja</h2>
        </a>
      </div>
      <section id="faq" class="faq section-bg">
        <div class="container">
          <div class="faq-list">
            <ul>
              <li
                data-aos-delay="400"
                v-for="(fungsi, index) in data"
                :key="index"
              >
                <i class="bx bxs-chevrons-right"></i>
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  class="collapsed"
                  >{{ fungsi.komisi }} {{ fungsi.namaKomisi }}
                  <i class="bx bx-chevron-down icon-show"></i
                  ><i class="bx bx-chevron-up icon-close"></i
                ></a>
                <div
                  id="faq-list-4"
                  class="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <ul>
                    <li>
                      <p>Ketua Komisi: {{ fungsi.ketuaKomisi }}</p>
                      <div
                        v-for="(anggota, index) in fungsi.anggota"
                        :key="anggota.id"
                      >
                        <span class="mb-2"
                          >Nama Anggota: {{ anggota.namaAnggota }}</span
                        >
                      </div>
                      <br />
                      <p>
                        Fungsi Kerja:
                        {{ fungsi.fungsiKerja }}
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.getDataFungsiKerja();
  },
  methods: {
    getDataFungsiKerja() {
      console.log("dataFungsi");
      const self = this;
      self.$store.dispatch("getData", ["fungsi-kerja", []]).then((response) => {
        console.log(response.data);
        this.data = response.data;
      });
    },
  },
};
</script>

<style></style>
