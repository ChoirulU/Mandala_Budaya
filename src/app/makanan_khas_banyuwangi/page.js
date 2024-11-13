"use client"

import Navbar from "../global/navbar";
import Sidebar from "../global/sidebar";
import styles from "../styles/global.module.css";
import Card from "./componen/card";
import styled from "styled-components";

const Card2 = styled.div`
  background-color: ${props => props.bg ? "green" : "red"};
    border-radius: 10px;
    border: ${props => props.border ? "5px solid yellow" : "5px solid black"};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: ${props => props.lebar ? "300px" : "1000px"};
    padding: 20px;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: ${props => props.wf ? "white" : "blue" }
}
`;

export default function MakananBanyuwangi() {
    return (
        <>
            <div className={styles.pageContainer}>
                <Navbar />
                <div className={styles.mainContent}>
                    <Sidebar />
                    <div className={styles.pageContainer}>                
                    <div className={styles.cardContainer}>
                        <Card2 bg lebar wf border>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKbMCkDbcskW4_XH4Klm0M6S_AFvdHMmi6A&s" alt="Gambar Card" />
                            <h3>Pecel Rawon</h3>
                            <p>hidangan pecel rawon sangatlah unik baik dari nama hingga rasanya yang pedas, manis, dan gurih berkat tambahan rempeyek di atasnya.</p>
                        </Card2>

                        <Card name="cardModel1">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKbMCkDbcskW4_XH4Klm0M6S_AFvdHMmi6A&s" alt="Gambar Card" />
                            <h3>Pecel Rawon</h3>
                            <p>hidangan pecel rawon sangatlah unik baik dari nama hingga rasanya yang pedas, manis, dan gurih berkat tambahan rempeyek di atasnya.</p>
                        </Card>

                        <Card name="cardModel2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBpOzCC6F5R8KP9kgtYGLywdn90Oe0lpZMg&s" alt="Gambar Card" />
                            <h3>Rujak Soto</h3>
                            <p>Dalam seporsi rujak soto, Sobat Pesona bisa menyantap rujak petis, potongan jeroan sapi dengan kuah soto dan juga potongan lontong sekaligus di satu piring.</p>
                        </Card>

                        <Card name="cardModel3">
                            <img src="https://asset.kompas.com/crops/NIJh-ec_4INXTYjUXickv1iK1Uo=/0x83:1000x750/750x500/data/photo/2023/11/20/655aa53b16af4.jpeg" alt="Gambar Card" />
                            <h3>Sego Tempong</h3>
                            <p>nasi tempong ini adalah menu kebanggaan warga Banyuwangi yang kelezatannya sudah tak perlu diragukan lagi.</p>
                        </Card>

                        <Card name="cardModel4" >
                            <img src="https://img-global.cpcdn.com/recipes/0816ebff9d954285/1200x630cq70/photo.jpg" alt="Gambar Card" />
                            <h3>Sego Cawuk</h3>
                            <p>Sego Cawuk Banyuwangi adalah nasi dengan kuah kelapa, telur, ikan dan bumbu pedas, bercitarasa segar dan gurih.</p>
                        </Card>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
