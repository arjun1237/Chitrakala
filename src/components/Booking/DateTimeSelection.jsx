import React, {Component} from 'react'
import styles from './css/Booking.module.css'

export default class DateTimeSelection extends Component{
    render(){
        return(
            <div>
                <div className={styles.infobar}>
                    <div className={styles["data-handler"]}>
                        <div>
                            <p>10</p>
                            <p>TOM</p>
                        </div>
                        <div>
                            <p>11</p>
                            <p>SAT</p>
                        </div>
                        <div>
                            <p>12</p>
                            <p>SUN</p>
                        </div>
                        <div>
                            <p>13</p>
                            <p>MON</p>
                        </div>
                        <div>
                            <p>4</p>
                            <p>TUE</p>
                        </div>
                    </div>
                    <div className={styles.otherinfo}>
                        <div>English</div>
                        <div>Bangalore</div>
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.nametime}>
                        <div className={styles.theatre}>Theatre</div>
                        <div className={styles.time}>
                            <div>4 PM</div>
                            <div>6 PM</div>
                            <div>8 PM</div>
                        </div>
                    </div>
                    <div className={styles.nametime}>
                        <div className={styles.theatre}>Theatre</div>
                        <div className={styles.time}>
                            <div>4 PM</div>
                            <div>6 PM</div>
                            <div>8 PM</div>
                        </div>
                    </div>
                    <div className={styles.nametime}>
                        <div className={styles.theatre}>Theatre</div>
                        <div className={styles.time}>
                            <div>4 PM</div>
                            <div>6 PM</div>
                            <div>8 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


