import React from "react";
import classes from "./graph.module.scss";
// import graph from "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js";

// function Graph() {
//     return (
//       <a>
//         <div>ĐỒ THỊ</div>
//         <canvas id="canvas"></canvas>
//       </a>
//     );
//   }

//   export default Graph;

function Graph({ name }) {
  return (
    <div className={classes["btn-block"]}>
      <div className={classes.container__box}>
        <div>
          <h2 className={classes.update__content}>{name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Graph;
