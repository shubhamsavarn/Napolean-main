import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import Events from "./Events";
import { ToastContainer, toast } from "react-toastify";
import Target from "../images/target.svg";
import "react-toastify/dist/ReactToastify.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Tags from "./Tags";
import '../App.css';

const TimeTable = () => {
  const [contests, setContest] = useState([]);
  const [fetchingprogress, setfetchingprogress] = useState(true);


  useEffect(() => {
    axios
      .get("https://napoleyn.herokuapp.com/contests")
      .then((res) => {
        const contests = res.data.contests;
        setContest(contests);
        setfetchingprogress(false);
      });
  }, []);


  const styles = {
    CalenderStyles: {
      height: '560px',
      width: "90%",
      margin: "5px auto",
    },
    icon: {
      width: "36px",
    },
    icon2: {
      width: "128px",
    },
    icon_email: {
      height: "auto",
      width: "35%",
    },
    button: {
      boxShadow: 'rgba(0,0,0,0.2) 0px 0.5px 10px 2px inset'
    },
    innerbox: {
      transform: 'skewY(3deg)'
    },
    description: {
      
      fontSize: '18px',
    },
    SMIcons: {
      fontSize: "25px",
      color: "white",
    }
  };

  const localizer = momentLocalizer(moment);

  const handleBgColor = (e) => {
    var style = {
      backgroundColor: e.hex_color,
    };
    return {
      style: style,
    };
  };

  const handleContestPage = (link) => {
    window.open(link, '_blank', 'noopener , noreferrer')
  }

  const Msg = ({ message }) => (
    <div className="d-flex flex-column">
      <div className="text-center d-flex align-items-center justify-content-center">
       
        <h5 className="px-2">{message.platform}</h5>
      </div>
      <div className="d-flex flex-column">
        <div className="text-center" style={styles.titleBox}>
          <span style={styles.title}>{message.title}</span>
        </div>
        <div className="row">
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <span style={{ margin: "4px" }}>
              <u>Start</u>
            </span>
            <span>{message.start}</span>
            <span style={styles.time}>{message.start_time}</span>
          </div>
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <span style={{ margin: "4px" }}>
              <u>End</u>
            </span>
            <span>{message.end}</span>
            <span style={styles.time}>{message.end_time}</span>
          </div>
        </div>
      </div>
      <div className="text-italic text-center my-2">
        <button className="btn btn-danger m-2" onClick={() => handleContestPage(message.link)} style={styles.button}>
          Visit Contest page
        </button>
      </div>
    </div>
  );

  const handleSelect = (e) => {
    toast.dark(<Msg message={e} />, {
      position: "bottom-center",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  };


  const Napoleyn = (props) => {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex row mx-0">
            
            <Calendar
              views={["month"]}
              defaultView={"month"}
              localizer={localizer}
              events={props.events}
              onSelectEvent={(e) => handleSelect(e)}
              style={styles.CalenderStyles}
              popup={true}
              eventPropGetter={(e) => handleBgColor(e)}
              className="my-4"
            />
            <ToastContainer
              position="bottom-center"
              autoClose={6000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              className="px-4 px-md-0 py-3 rounded-circle "
            />
          
        </div>
        <Tags contest={props.events} />
        <Events events={props.events} />
      </div>
    );
  };

  

  const Spinner = () => {
    return (
      <div className="container min-vh-100 d-flex align-items-center justify-content-center flex-column">
        <img src={logo} style={styles.icon2} preloader/>
      </div>
    );
  };

  return (
    <div>
      {fetchingprogress ?
        <Spinner /> :
        Napoleyn({ events: contests })}
    </div>
  );
};

export default TimeTable;