import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Dokumen from '../pages/Dokumen.vue'
import Home from '../pages/Home.vue'
import Berita from '../pages/berita/berita.vue'
import DetailBerita from '../pages/berita/DetailBerita.vue'
import Galeri from '../pages/Galeri.vue'
import FungsiKerja from '../pages/struktur-organisasi/FungsiKerja.vue'
import Keanggotaan from '../pages/struktur-organisasi/Keanggotaan.vue'
import SejarahPolindra from '../pages/profil/SejarahPolindra'
import SambutanKetua from '../pages/profil/SambutanKetua'


const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/dokumen',
        name: 'Dokumen',
        component: Dokumen
    },
    {
        path: '/keanggotaan',
        name: 'Keanggotaan',
        component: Keanggotaan
    },
    {
        path: '/fungsi-kerja',
        name: 'Fungsi Kerja',
        component: FungsiKerja
    },
    {
        path: '/sejarah-polindra',
        name: 'Sejarah Polindra',
        component: SejarahPolindra
    },
    {
        path: '/sambutan-ketua',
        name: 'Sambutan Ketua Senat',
        component: SambutanKetua
    },
    {
        path: '/berita',
        name: 'Berita',
        component: Berita
    },
    {
        path: '/detail-berita/:id',
        name: 'Detail Berita',
        component: DetailBerita,
        props: true
    },
    {
        path: '/galeri',
        name: 'Galeri',
        component: Galeri
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router