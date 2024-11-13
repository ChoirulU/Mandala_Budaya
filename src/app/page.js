"use client";

import { useState } from 'react';
import "./styles/global.css";
import styles from "./styles/global.module.css";
import Navbar from './global/navbar';
import Sidebar from './global/sidebar';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <Navbar/>
      <Sidebar/>
      <div className={styles.konten}>
        {/* Ganti tulisan "Konten" dengan gambar logo */}
        <img 
          src="https://res.cloudinary.com/dp5fubzft/image/upload/v1728825545/image_home_fix_etz1im.png" 
          alt="Logo Mandala Budaya"
        />
        {/* Deskripsi singkat tentang Mandala Budaya */}
        <p>
          Mandala Budaya adalah sebuah website yang dirancang untuk memperkenalkan keindahan dan kekayaan budaya, kesenian, serta tradisi yang ada di Banyuwangi. 
          Mengusung nama "Mandala Budaya", yang dalam bahasa sansekerta berarti "lingkaran budaya", situs ini mencerminkan sinergi antara berbagai elemen budaya yang 
          saling terkait dan melengkapi satu sama lain. Di dalamnya, Anda akan menemukan informasi mendalam mengenai berbagai aspek kehidupan masyarakat Banyuwangi, 
          mulai dari kesenian yang beragam, hingga tradisi yang telah berlangsung turun-temurun. Website ini juga menampilkan artikel dan foto yang menggambarkan 
          keunikan dan keindahan setiap unsur budaya. Temukan dan nikmati warisan budaya yang unik ini serta pahami lebih dalam tentang keanekaragaman yang menjadikan Banyuwangi 
          sebagai daerah yang kaya akan tradisi dan seni. Mari jelajahi Mandala Budaya dan rasakan pengalaman yang memukau dari kekayaan budaya yang ada di daerah ini.
        </p>
      </div>

      <div className={styles.footer}>
        Footer
      </div>
    </div>
  );
}
