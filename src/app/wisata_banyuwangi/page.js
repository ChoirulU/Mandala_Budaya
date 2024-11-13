"use client"

import Navbar from "../global/navbar";
import Sidebar from "../global/sidebar";
import styles from "../styles/global.module.css";
import Link from "next/link"; // Import Link dari Next.js
import styled from "styled-components";

const Button = styled.div`
  background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

}
`;
const Button1 = styled.div`
  background-color: ${props => props.bg ? "black" : "white"};
  color: red;
}
`;
const Button2 = styled.div`
  border-radius: ${props => props.border ? "0px" : "50px"};
  color: white;
}
`;
const Button3 = styled.div`
  color: ${props => props.wf ? "red" : "yellow"};
}
`;
const Button4 = styled.div`
  font-size: ${props => props.size ? "0,8rem" : "2rem"};
}
`;


export default function WisataBanyuwangi() {
    return (
        <>
            <div className={styles.pageContainer}>
                <Navbar />
                <div className={styles.mainContent}>
                    <Sidebar />
                    <div className={styles.pageContainer}>                
                        <div className={styles.ButtonContainer}>
                            <Button>
                                <Button1 bg className={styles.pantaiReadMoreButton}>Baca Selengkapnya</Button1>
                                <Button2 className={styles.pantaiReadMoreButton}>Baca Selengkapnya</Button2>
                                <Button3 className={styles.pantaiReadMoreButton}>Baca Selengkapnya</Button3>
                                <Button4 className={styles.pantaiReadMoreButton}>Baca Selengkapnya</Button4>
                            </Button>
                            <div className={styles.alatbutton}>
                                <h3>Pantai Boom</h3>
                                <p>Berbagai aktivitas menyenangkan bisa kamu lakukan di Pantai Boom. Paling utama adalah bersantai di pantai.</p>
                                <Link href="/tampilan_fom">
                                    <button className={styles.pantaiInfoButton}>Info Tiket</button>
                                </Link>
                                <button className={styles.pantaiReadMoreButton}>Baca Selengkapnya</button>
                            </div>

                            <div className={styles.alatbutton}>
                                <h3>Kawah Ijen</h3>
                                <p>Kawah Ijen adalah sebuah danau kawah yang bersifat asam yang berada di puncak Gunung Ijen dengan kedalaman danau 200 meter dan luas kawah mencapai 5.466 Hektar.</p>
                                <Link href="/tampilan_fom">
                                    <button className={styles.kawahInfoButton}>Info Tiket</button>
                                </Link>
                                <button className={styles.kawahReadMoreButton}>Baca Selengkapnya</button>
                            </div>

                            <div className={styles.alatbutton}>
                                <h3>Air Terjun Jagir</h3>
                                <p>Jika biasanya air terjun tidak bisa diakses dengan mudah, berbeda dengan air terjun Jagir yang terletak dekat dengan pusat kota Banyuwangi.</p>
                                <Link href="/tampilan_fom">
                                    <button className={styles.airTerjunInfoButton}>Info Tiket</button>
                                </Link>
                                <button className={styles.airTerjunReadMoreButton}>Baca Selengkapnya</button>
                            </div>

                            <div className={styles.alatbutton}>
                                <h3>Teluk Ijo</h3>
                                <p>Teluk Ijo adalah surga tersembunyi yang ada diwilayah banyuwangi, pantai dengan keindahan terumbu karang yang memukau.</p>
                                <Link href="/tampilan_fom">
                                    <button className={styles.telukIjoInfoButton}>Info Tiket</button>
                                </Link>
                                <button className={styles.telukIjoReadMoreButton}>Baca Selengkapnya</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
