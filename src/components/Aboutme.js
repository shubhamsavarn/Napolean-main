import React from "react";
import logo from "../images/logo.png";


const Aboutme = () => {
  const styles = {
  
    footer: {
      marginBottom: `24px`,
    },
  };

  return (
    <div style={styles.footer} className="my-6 align-items-center text-center">
      <h5 className="text-center" >
              Made By  <a class="inline nav-link" target="_blank" href="https://github.com/ahampriyanshu/napoleyn">team napoleyn</a> 
            </h5>
    </div>
  );
};

export default Aboutme;
