// SejarahBanyuwangi.js
import Navbar from "../global/navbar";
import Sidebar from "../global/sidebar";
import styles from "../styles/global.module.css";   
import Table from "./component/table";
// import UserTable from "./component/tabellagi";


export default function SejarahBanyuwangi() {
    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <div className={styles.mainContent}>
                <Sidebar />

                <div className={styles.pageContainer}>
                    <h2 className={styles.title}>Sejarah Banyuwangi</h2>
                    <Table 
                        imageSrc="https://banyuwangikab.go.id/uploads/wallpaper/gb-gesibu.jpg"
                        text="Merujuk data sejarah yang ada, sepanjang sejarah Blambangan kiranya tanggal 18 Desember 1771 merupakan peristiwa sejarah yang paling tua yang patut diangkat sebagai hari jadi Banyuwangi. Sebelum peristiwa puncak perang Puputan Bayu tersebut sebenarnya ada peristiwa lain yang mendahuluinya, yang juga heroik-patriotik, yaitu peristiwa penyerangan para pejuang Blambangan di bawah pimpinan Pangeran Puger ke benteng VOC di Banyualit pada tahun 1768."
                        fullText="Namun sayang peristiwa tersebut tidak tercatat secara lengkap pertanggalannya, dan selain itu terkesan bahwa dalam penyerangan tersebut kita kalah total, sedang pihak musuh hampir tidak menderita kerugian apapun. Pada peristiwa ini Pangeran Puger gugur, sedang Wong Agung Wilis, setelah Lateng dihancurkan, terluka, tertangkap dan kemudian dibuang ke Pulau Banda (Lekkerkerker, 1923). Berdasarkan data sejarah nama Banyuwangi tidak dapat terlepas dengan keajayaan Blambangan. Sejak jaman Pangeran Tawang Alun (1655-1691) dan Pangeran Danuningrat (1736-1763), bahkan juga sampai ketika Blambangan berada di bawah perlindungan Bali (1763-1767), VOC belum pernah tertarik untuk memasuki dan mengelola Blambangan (Ibid. 1923:1045). Pada tahun 1743 Jawa Bagian Timur (termasuk Blambangan) diserahkan oleh Pakubuwono II kepada VOC, VOC merasa Blambangan memang sudah menjadi miliknya. Namun untuk sementara masih dibiarkan sebagai barang simpanan, yang baru akan dikelola sewaktu-waktu, kalau sudah diperlukan. Bahkan ketika Danuningrat memina bantuan VOC untuk melepaskan diri dari Bali, VOC masih belum tertarik untuk melihat ke Blambangan (Ibid 1923:1046). Namun barulah setelah Inggris menjalin hubungan dagang dengan Blambangan dan mendirikan kantor dagangnya (komplek Inggrisan sekarang) pada tahun 1766 di bandar kecil Banyuwangi ( yang pada waktu itu juga disebut Tirtaganda, Tirtaarum atau Toyaarum), maka VOC langsung bergerak untuk segera merebut Banyuwangi dan mengamankan seluruh Blambangan. Secara umum dalam peprangan yang terjadi pada tahun 1767-1772 ( 5 tahun ) itu, VOC memang berusaha untuk merebut seluruh Blambangan. Namun secara khusus sebenarnya VOC terdorong untuk segera merebut Banyuwangi, yang pada waktu itu sudah mulai berkembang menjadi pusat perdagangan di Blambangan, yang telah dikuasai Inggris. Dengan demikian jelas, bahwa lahirnya sebuah tempat yag kemudian menjadi terkenal dengan nama Banyuwangi, telah menjadi kasus-beli terjadinya peperangan dahsyat, perang Puputan Bayu. Kalau sekiranya Inggris tidak bercokol di Banyuwangi pada tahun 1766, 
                        mungkin VOC tidak akan buru-buru melakukan ekspansinya ke Blambangan pada tahun 1767. Dan karena itu mungkin perang Puputan Bayu tidak akan terjadi ( puncaknya ) pada tanggal 18 Desember 1771."
                    />
                    <h2 className={styles.title}>Sejarah Berdirinya Banyuwangi</h2>
                    <Table 
                        imageSrc="https://koropak.co.id/wp-content/uploads/artikel/sejarah-meletusnya-perang-puputan-bayu-cikal-bakal-lahirnya-banyuwangi_1671267439.jpg"
                        text="Asal-usul Kota Banyuwangi tidak terlepas dari sejarah Kerajaan Blambangan, yang dipimpin oleh Pangeran Tawang Alun. Pada masa itu, secara administratif VOC menganggap bahwa Blambangan adalah bagian dari wilayah kekuasaannya. Hal ini atas dasar penyerahan kekuasaan Jawa bagian Timur oleh Pakubuwono II kepada VOC."
                        fullText="Kendati demikian, VOC tidak pernah benar-benar menunjukkan kekuasaannya akan Blambangan sampai akhir abad ke-17. Ketika pemerintah Inggris mulai menjalin hubungan dagang dengan Blambangan, VOC pun segera bergerak untuk mengamankan kekuasaannya. Hal ini lantas memicu terjadinya pertempuran antara pasukan Blambangan dengan VOC, yang kemudian dikenal sebagai peristiwa Puputan Bayu. Badan Permanen Masyarakat Adat Artikel Kompas.id Dalam Puputan Bayu yang terjadi pada 18 Desember 1771, Blambangan berusaha keras untuk melepaskan diri dari VOC. Namun, pada akhirnya Kerajaan Blambangan runtuh setelah VOC meraih kemenangannya. VOC kemudian mengangkat R Wiroguno I (Mas Alit) sebagai bupati Banyuwangi pertama. Setelah itu, 18 Desember 1771 ditetapkan sebagai hari jadi Banyuwangi. Baca juga: Puputan Bayu: Latar Belakang, Kronologi, dan Dampak Julukan Banyuwangi Berikut ini beberapa julukan yang disandang Kota Banyuwangi."
                    />
                    {/* <UserTable /> */}
                </div>
            </div>
        </div>
    );
}

