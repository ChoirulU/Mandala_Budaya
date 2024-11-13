"use client"
import Navbar from "../global/navbar";
import Sidebar from "../global/sidebar";
import styles from "../styles/global.module.css";
import styled from 'styled-components';
import Container from '../budaya_adat_banyuwangi/container/container'

const Container2 = styled.div`
  max-width: ${props => {
    if (props.size === 'small') return '300px';
    if (props.size === 'medium') return '600px';
    return '900px'; 
  }};
    padding: 10px; 
    border: ${props => props.border ? "5px solid green" : "5px solid black"};
    border-radius: 20px; 
    background-color: ${props => props.primary ? "blue" : "red" };
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
    margin: 10px auto; 
    position: relative; 
    overflow: hidden;
    color: white;
    font-family:${props => props.font ? "sans-serif" : "Times New Roman"} ;
    font-weight: ${props => props.bold ? "bold" : "normal"}; 
}
`;

export default function BudayaAdat() {
    return (
        <>
            <div className={styles.pageContainer}>
                <Navbar />
                <div className={styles.mainContent}>
                    <Sidebar />
                    <div className={styles.contentArea}>
                        <Container2 font border primary size="small">
                            <h1>SEBLANG</h1>
                            <p>Ritual Seblang ini dilaksanakan untuk keperluan bersih desa dan tolak bala, agar desa tetap dalam keadaan aman dan tentram. 
                                Penyelenggaraan tari Seblang di dua desa tersebut juga berbeda waktunya, di desa Olihsari diselenggarakan satu minggu setelah Idul Fitri, 
                                sedangkan di desa Bakungan yang bersebelahan, diselenggarakan seminggu setelah Idul Adha. Para penarinya dipilih secara supranatural oleh dukun setempat, 
                                dan biasanya penari harus dipilih dari keturunan penari seblang sebelumnya. Di desa Olihsari, penarinya haruslah gadis yang belum akil baliq, 
                                sedangkan di Bakungan, penarinya haruslah wanita berusia 50 tahun ke atas yang telah mati haid (menopause).</p>
                        </Container2>
                        <Container  size="small">
                            <h1>SEBLANG</h1>
                            <p>Ritual Seblang ini dilaksanakan untuk keperluan bersih desa dan tolak bala, agar desa tetap dalam keadaan aman dan tentram. 
                                Penyelenggaraan tari Seblang di dua desa tersebut juga berbeda waktunya, di desa Olihsari diselenggarakan satu minggu setelah Idul Fitri, 
                                sedangkan di desa Bakungan yang bersebelahan, diselenggarakan seminggu setelah Idul Adha. Para penarinya dipilih secara supranatural oleh dukun setempat, 
                                dan biasanya penari harus dipilih dari keturunan penari seblang sebelumnya. Di desa Olihsari, penarinya haruslah gadis yang belum akil baliq, 
                                sedangkan di Bakungan, penarinya haruslah wanita berusia 50 tahun ke atas yang telah mati haid (menopause).</p>
                        </Container>


                        <Container2 size="medium">
                            <h1>GANDRUNG</h1>
                            <p>Gandrung, berarti tergila-gila atau cinta habis-habisan. Tarian ini masih satu genre dengan tarian seperti Ketuk Tilu di Jawa Barat, 
                                Tayub di Jawa Tengah dan Jawa Timur bagian barat, Lengger di Cilacap dan Banyumas dan Joged Bumbung di Bali, 
                                yakni melibatkan seorang wanita penari profesional yang menari bersama-sama tamu (terutama pria) dengan iringan musik atau gamelan. 
                                Tarian ini populer di wilayah Banyuwangi yang terletak di ujung timur Pulau Jawa, dan telah menjadi ciri khas dari wilayah tersebut, 
                                hingga tak salah jika Banyuwangi selalu diidentikkan dengan Gandrung, dan anda akan menjumpai patung penari Gandrung di berbagai sudut wilayah Banyuwangi, 
                                dan tak ayal lagi Banyuwangi sering dijuluki Kota Gandrung.</p>
                        </Container2>
                        <Container size="medium">
                            <h1>GANDRUNG</h1>
                            <p>Gandrung, berarti tergila-gila atau cinta habis-habisan. Tarian ini masih satu genre dengan tarian seperti Ketuk Tilu di Jawa Barat, 
                                Tayub di Jawa Tengah dan Jawa Timur bagian barat, Lengger di Cilacap dan Banyumas dan Joged Bumbung di Bali, 
                                yakni melibatkan seorang wanita penari profesional yang menari bersama-sama tamu (terutama pria) dengan iringan musik atau gamelan. 
                                Tarian ini populer di wilayah Banyuwangi yang terletak di ujung timur Pulau Jawa, dan telah menjadi ciri khas dari wilayah tersebut, 
                                hingga tak salah jika Banyuwangi selalu diidentikkan dengan Gandrung, dan anda akan menjumpai patung penari Gandrung di berbagai sudut wilayah Banyuwangi, 
                                dan tak ayal lagi Banyuwangi sering dijuluki Kota Gandrung.</p>
                        </Container>


                        <Container2 bold primary size="large">
                            <h1>KEBO-KEBOAN</h1>
                            <p>Masyarakat Banyuwangi yang mayoritas petani memiliki ritual sakral untuk meminta berkah keselamatan. 
                                Tradisi tersebut dikenal dengan nama kebo-keboan. Ritual ini menggunakan kerbau sebagai sarana upacara. 
                                Namun, kerbau yang digunakan binatang jadi-jadian yakni manusia berdandan mirip kerbau, lalu beraksi layaknya kerbau di sawah.</p>
                        </Container2>
                        <Container size="large">
                            <h1>KEBO-KEBOAN</h1>
                            <p>Masyarakat Banyuwangi yang mayoritas petani memiliki ritual sakral untuk meminta berkah keselamatan. 
                                Tradisi tersebut dikenal dengan nama kebo-keboan. Ritual ini menggunakan kerbau sebagai sarana upacara. 
                                Namun, kerbau yang digunakan binatang jadi-jadian yakni manusia berdandan mirip kerbau, lalu beraksi layaknya kerbau di sawah.</p>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}
