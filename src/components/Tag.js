import React from "react";
import Codechef from "../images/codechef.png";
import Codeforces from "../images/codeforces.png";
import Leetcode from "../images/leetcode.png";
import Atcoder from "../images/atcoder.png";
import Kickstart from "../images/google.png";
import Topcoder from "../images/topcoder.png";

const Tags = ({ contest }) => {
  const styles = {
    icon: {
      width: "36px",
    },
    mm: {
      marginTop: "24px",
    }
  };

  const contest_count = {
    codechef: contest.filter((e) => {
      return e.platform === "Codechef";
    }).length,
    codeforces: contest.filter((e) => {
      return e.platform === "Codeforces";
    }).length,
    leetcode: contest.filter((e) => {
      return e.platform === "Leetcode";
    }).length,
    atcoder: contest.filter((e) => {
      return e.platform === "AtCoder";
    }).length,
    topcoder: contest.filter((e) => {
      return e.platform === "TopCoder";
    }).length,
    kickstart: contest.filter((e) => {
      return e.platform === "KickStart";
    }).length,
  };

  return (
    <div style={styles.mm}  className="d-flex align-items-center justify-content-center flex-wrap">
     
      <div
        className="d-flex align-items-center justify-content-center mx-1 px-1 rounded p-md-1 my-1"
       
      >
        <img src={Codechef} alt="" style={styles.icon} />
        <h6 className=" mt-2 px-1">Codechef</h6>
        <span className="">({contest_count.codechef})</span>
      </div>
      <div className="d-flex align-items-center justify-content-center mx-1 px-1 rounded p-md-1 my-1">
        <img src={Codeforces} alt="" />
        <h6 className=" mt-2 px-1">Codeforces</h6>
        <span className="">({contest_count.codeforces})</span>
      </div>
      <div
        className="d-flex align-items-center justify-content-center mx-1 px-1 rounded p-md-1 my-1"
      >
        <img src={Leetcode} alt="" style={styles.icon} />
        <h6 className=" mt-2 px-1">Leetcode</h6>
        <span className="">({contest_count.leetcode})</span>
      </div>

      <div
        className="d-flex align-items-center justify-content-center mx-1 px-1 rounded p-md-1 my-1"
       
      >
        <img src={Atcoder} alt="" style={styles.icon} />
        <h6 className=" mt-2 px-1">Atcoder</h6>
        <span className="">({contest_count.atcoder})</span>
      </div>

      <div
        className="d-flex align-items-center justify-content-center mx-1 px-1 rounded p-md-1 my-1"
       
      >
        <img src={Topcoder} alt="" style={styles.icon} />
        <h6 className=" mt-2 px-1">Topcoder</h6>
        <span className="">({contest_count.topcoder})</span>
      </div>

      <div
        className="d-flex align-items-center justify-content-center mx-1 px-1 rounded p-md-1 my-1"
       
      >
        <img src={Kickstart} alt="" style={styles.icon} />
        <h6 className=" mt-2 px-1">Kickstart</h6>
        <span className="">({contest_count.kickstart})</span>
      </div>
    </div>
  );
};

export default Tags;
