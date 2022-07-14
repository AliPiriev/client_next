import React from 'react'
import styles from "../../courses/Star.module.css";
// import full from "../../../assets/img/tabImg/100.png";
// import half from "../../../assets/img/tabImg/50.png";
// import empty from "../../../assets/img/tabImg/0.png";

// function getStar(value) {
//     switch (value) {
//         case 0:
//             return {empty};
//         case 50:
//             return {half};
//         case 100:
//             return {full};
//     }
// }
function getStars(value) {

    const stars = [];
    const [whole, part] = parseFloat(value).toString().split(".");
    for(let i = 0; i < whole; i++) stars.push(100);
    if (part) stars.push(50);
    for(let i = whole; i < (part ? 4 : 5); i++) stars.push(0);

    return stars;

    // switch(parseFloat(value)) {
    //     case 0.0:
    //         return [0, 0, 0, 0, 0];
    //     case 0.5:
    //         return [50, 0, 0, 0, 0];
    //     case 1.0:
    //         return [100, 0, 0, 0, 0];
    //     case 1.5:
    //         return [100, 50, 0, 0, 0];
    //     case 2.0:
    //         return [100, 100, 0, 0, 0];
    //     case 1.5:
    //         return [100, 100, 50, 0, 0];
    //     case 3.0:
    //         return [100, 100, 100, 0, 0];
    //     case 3.5:
    //         return [100, 100, 100, 50, 0];
    //     case 4.0:
    //         return [100, 100, 100, 100, 0];
    //     case 4.5:
    //         return [100, 100, 100, 100, 50];
    //     case 5.0:
    //         return [100, 100, 100, 100, 100];
    // }
} 

export default function Rating({ value }) {
    return (
        <div className={styles.starsDiv}>
        <div>
            {getStars(value).map((value) => (
                // <img className={styles.stars} src={getStar(value)} alt="star" />
                <img src={require(`../../../assets/img/tabImg/${value}.png`)} alt="star"/>
            ))}
        </div>
      </div>
    );
}
