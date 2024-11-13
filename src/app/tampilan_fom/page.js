import Navbar from "../global/navbar";
import Sidebar from "../global/sidebar";
import Fom from "./componen/fom"; 
import styles from "../styles/global.module.css";

export default function WisataBanyuwangi() {
    return (
        <>
            <div className={styles.pageContainer}>
                <Navbar />
                <div className={styles.mainContent}>
                    <Sidebar />
                    <div className={styles.contentArea} >
                    <div className={styles.contentWrapper}>

                        <Fom name="pantaiBoom">
                            <h2 className={styles.formTitle}>Pemesanan Tiket</h2>
                            <form className={styles.formContainer}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="nameBoom">Nama:</label>
                                    <input type="text" id="nameBoom" name="nameBoom" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="emailBoom">Email:</label>
                                    <input type="email" id="emailBoom" name="emailBoom" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="ticketQuantityBoom">Jumlah Tiket:</label>
                                    <input type="number" id="ticketQuantityBoom" name="ticketQuantityBoom" min="1" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="dateBoom">Tanggal Pemesanan:</label>
                                    <input type="date" id="dateBoom" name="dateBoom" required />
                                </div>
                                <button type="submit" className={styles.submitButton}>Pesan Tiket</button>
                            </form>
                        </Fom>

                        <Fom name="kawahIjen">
                            <h2 className={styles.formTitle}>Pemesanan Tiket</h2>
                            <form className={styles.formContainer}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="nameIjen">Nama:</label>
                                    <input type="text" id="nameIjen" name="nameIjen" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="emailIjen">Email:</label>
                                    <input type="email" id="emailIjen" name="emailIjen" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="ticketQuantityIjen">Jumlah Tiket:</label>
                                    <input type="number" id="ticketQuantityIjen" name="ticketQuantityIjen" min="1" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="dateIjen">Tanggal Pemesanan:</label>
                                    <input type="date" id="dateIjen" name="dateIjen" required />
                                </div>
                                <button type="submit" className={styles.submitButton}>Pesan Tiket</button>
                            </form>
                        </Fom>

                        <Fom name="airTerjunJagir">
                            <h2 className={styles.formTitle}>Pemesanan Tiket</h2>
                            <form className={styles.formContainer}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="nameJagir">Nama:</label>
                                    <input type="text" id="nameJagir" name="nameJagir" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="emailJagir">Email:</label>
                                    <input type="email" id="emailJagir" name="emailJagir" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="ticketQuantityJagir">Jumlah Tiket:</label>
                                    <input type="number" id="ticketQuantityJagir" name="ticketQuantityJagir" min="1" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="dateJagir">Tanggal Pemesanan:</label>
                                    <input type="date" id="dateJagir" name="dateJagir" required />
                                </div>
                                <button type="submit" className={styles.submitButton}>Pesan Tiket</button>
                            </form>
                        </Fom>

                        <Fom name="telukIjo">
                            <h2 className={styles.formTitle}>Pemesanan Tiket </h2>
                            <form className={styles.formContainer}>
                                <div className={styles.formGroup}>
                                    <input type="text" placeholder="Nama:" id="nameIjo" name="nameIjo" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="email" placeholder="E-mail:" id="emailIjo" name="emailIjo" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="number" placeholder="Jumlah Tiket:" id="ticketQuantityIjo" name="ticketQuantityIjo" min="1" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="dateIjo">Tanggal Pemesanan:</label>
                                    <input type="date" id="dateIjo" name="dateIjo" required />
                                </div>
                                <button type="submit" className={styles.submitButton}>Pesan Tiket</button>
                            </form>
                        </Fom>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
