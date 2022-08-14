import Target from "../images/target.svg";

const Goal = () => {
  const styles = {
    font: {
      fontSize: "19px",
    },
    icon: {
      height: "auto",
      width: "45px",
      margin: "10px",
    },
    wrapper: {
      transform: 'skewY(-3deg)'
    },
    wrapper_inner: {
      transform: 'skewY(3deg)',
    }
  };

  return (
    <div className="pt-4" style={styles.wrapper}>
      <div style={styles.wrapper_inner}>
        <div className="row d-flex p-md-5 px-2 py-4 align-items-center justify-content-center mx-0">
          <div className="col-12 text-center d-flex align-items-center justify-content-center">
            <img src={Target} style={styles.icon} alt="goal_img" />
            <h3>
              <strong>
                <u>Motive</u>
              </strong>
            </h3>
          </div>
          <div className="col-md-10 col-12" style={styles.font}>
            <div className="row">
              <div className="col-12 p-md-5 p-3">
                <div className="text-center">
                  <span>
                  Students can opt all the competitive programming contest at one place.An extension that keeps users updated about Coding or Competitive Programming contests.Never miss a coding contest again! CP Calendar helps you get the schedule of all Competitive Programming contests, hosted by various well-known platforms, listed in a single place.
Shows a list of live and upcoming coding contests hosted by various popular competitive programming websites.
                  </span>
                  <br />
                  <br />
                  <span>
                  The Ultimate Competitve Coding contest tracker. Never miss another coding contest from now.This app will track and present the Past, Live and Future contests on the most popular sport programming sites
                  </span>
                  <br />
                  <br />
                  <span>
                    Please give it a star if you like it and contribute to the
                    upcoming features by just forking and raising PRs or by
                    creating issues{" "}
                    <a
                      href="https://github.com/ahampriyanshu/napoleyn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here
                    </a>{" "}
                    or use the shortcuts given below.{" "}
                  </span>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;