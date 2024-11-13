"use client"

import styles from "../styles/global.module.css";

export default function Sidebar () {
    return(
        <>
        <div className={styles.sidebar}>
        <ul>
          <li><a href="/budaya_adat_banyuwangi">Budaya Adat</a></li>
          <li><a href='/makanan_khas_banyuwangi'>Makanan Khas</a></li>
          <li><a href="/wisata_banyuwangi">Wisata</a></li>
          <li><a href="/sejarah_banyuwangi">Sejarah</a></li>
        </ul>
      </div>
        </>
    )
}