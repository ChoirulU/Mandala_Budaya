"use client";

import React, { useState } from "react";
import styles from "./table.module.css";

export default function Table({ imageSrc, text, fullText }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const data = [
        { year: "1768", event: "Penyerangan Banyualit", description: "Pangeran Puger memimpin serangan melawan VOC." },
        { year: "1771", event: "Puputan Bayu", description: "Perang besar antara VOC dan Blambangan." },
        { year: "1766", event: "Kantor Dagang Inggris", description: "Inggris mendirikan kantor dagang di Banyuwangi." },
        { year: "1743", event: "Blambangan Diserahkan", description: "Pakubuwono II menyerahkan Blambangan kepada VOC." }
    ];

    return (
        <div>
            <div className={styles.tableContainer}>
                <div className={styles.tableImage}>
                    <img src={imageSrc} alt="Gambar Tabel" />
                </div>
                <div className={styles.tableText}>
                    <p>{text}</p>
                    {isExpanded && <p className={styles.expandedText}>{fullText}</p>}
                    <button onClick={handleToggle} className={styles.dropdownButton}>
                        {isExpanded ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>

            <div className={styles.tableContainer}>
                <h2>Data Peristiwa Sejarah Banyuwangi</h2>
                <table className={styles.customTable}>
                    <thead>
                        <tr>
                            <th>Tahun</th>
                            <th>Peristiwa</th>
                            <th>Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.year}</td>
                                <td>{item.event}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
