import React from "react";
import styles from './Contact.module.css'

export default function Contact() {
    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
            <h2>Send me a message.</h2>
            <div className={styles.myInfo}>
                <h3>My email</h3>
                    <p>d.regan@columbia.edu</p>
            </div>
            <div className={styles.formContainer}>
                <form>
                    <div className={styles.formTop}>
                        <div className={styles.formQuestion}>
                            <label for='yourName'>What's your name?</label>
                            <input type='text' id='yourName' placeholder="James Smith"></input>
                        </div>
                        <div className={styles.formQuestion}>
                            <label for='yourEmail'>What's your email?</label>
                            <input type='text' id='yourEmail' placeholder="jamessmith@gmail.com"></input>
                        </div>
                    </div>
                    <div className={styles.formMiddle}>
                        <div className={styles.formQuestion}>
                            <label for='yourMessage'>What's your message?</label>
                            <input type='text' id='yourMessage' placeholder="Hi Danny, I'd love to speak with you about..."></input>
                        </div>
                    </div>
                    <div className={styles.formBottom}>
                        <input type='submit' value='Send Message'></input>
                    </div>
                </form>
            </div>
            </div>
        </div>
        

    )
}