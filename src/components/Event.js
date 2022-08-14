import { React, useState } from 'react';
import Codechef from '../images/codechef.png'
import Codeforces from '../images/codeforces.png'
import Leetcode from '../images/leetcode.png';
import Atcoder from "../images/atcoder.png";
import Kickstart from "../images/google.png";
import Topcoder from "../images/topcoder.png";
import Sort from '../images/sort_btn.png';
import '../App.css';

const Events = (props) => {

    const styles = {
        events: {
            margin: '0'
        },
        icon: {
            height: 'auto',
            width: '150%'
        },
       
        titleBox: {
            paddingBottom: "8px",
            borderBottom: '1px solid white',
            borderRadius: '5%'
        },
        time: {
            fontSize: "1.05rem"
        },
        link: {
            textDecoration: 'underline',
         
        },
        Button: {
            boxShadow: 'rgba(0,0,0,0.2) 0px 0.5px 10px 2px inset'
        },
        sortIcon: {
            backgroundImage: 'url("https://cdn.codechef.com/sites/all/themes/abessive/images/sort_both.png")',
            width: '20px',
            height: '20px',
            backgroundSize: 'cover'
        }
    }

    const data = props.events;

    const [Events, setEvents] = useState(data);
    const [isSorted, setisSorted] = useState(true);

    const handleContestPage = (link) => {
        window.open(link, '_blank', 'noopener , noreferrer')
    }

    const handleGoogleCalendar = ({ title, start, end, start_time, end_time, link, platform }) => {

        var base_url = "https://calendar.google.com/calendar/u/0/r/eventedit?text=";
        var contest_name = title.trim();
        var details = `%5B${platform}%5D - ${title}`;
        var start_date = new Date(`${start} ${start_time}`);
        var end_date = new Date(`${end} ${end_time}`);

        start_date.setHours(start_date.getHours() + 5);
        start_date.setMinutes(start_date.getMinutes() + 30);
        end_date.setHours(end_date.getHours() + 5);
        end_date.setMinutes(end_date.getMinutes() + 30);
        start_date = start_date.toISOString();
        end_date = end_date.toISOString();

        start_date = start_date.slice(0, 10).replaceAll('-', '') + start_date.slice(10, 19).replaceAll(':', '')
        end_date = end_date.slice(0, 10).replaceAll('-', '') + end_date.slice(10, 19).replaceAll(':', '');

        contest_name = contest_name.replaceAll('#', '%23')
        details = details.replaceAll('#', '%23')

        var calendar_url = `${base_url}${contest_name}&location=${link}&details=${details}&dates=${start_date}/${end_date}&trp=false&sf=true`;

        window.open(calendar_url, '_blank', 'noopener , noreferrer');
    }

    const sortUp = (a, b) => {
        return new Date(`${a.start} ${a.start_time}`).getTime() - new Date(`${b.start} ${b.start_time}`).getTime();
    }

    const sortDown = (a, b) => {
        return new Date(`${b.start} ${b.start_time}`).getTime() - new Date(`${a.start} ${a.start_time}`).getTime();
    }

    const handleUpDownClick = () => {
        isSorted
            ? setEvents([...Events].sort(sortDown))
            : setEvents([...Events].sort(sortUp))

        setisSorted((prev) => !prev);
    }

    return (
        <div className="py-5" style={styles.wrapper}>
            <div style={styles.wrapper_skew}>
                <div className="d-flex align-items-center justify-content-center pb-4">
                    <div className="d-flex flex-row flex-wrap align-items-center justify-centent-center">
                        <span className="bg-transparent" onClick={() => { handleUpDownClick() }}>
                            <img src={Sort} className="sortbtn" width="20" height="30" alt="UpDown_img" />
                        </span>
                        <span className=" text-center" style={{ fontSize: '0.8em' }}>
                        Sort by dates
                        </span>
                    </div>
                </div>
                <div className="row align-items-center justify-content-around" style={styles.events}>
                    {Events.map((e) => {
                        return (
                            <div key={e._id} className="event_card col-md-5 col-11 p-3 m-md-2 m-1 rounded">
                                <div className="d-flex align-items-center justify-content-center row">
                                    <div className="col-2">
                                        <img src={e.platform === "Codechef" ? Codechef : e.platform === "Leetcode" ? Leetcode : e.platform === "AtCoder" ? Atcoder : e.platform === "TopCoder" ? Topcoder : Kickstart} style={styles.icon} alt="event" />
                                    </div>
                                    <div className={e.platform === "Leetcode" ? "col-10" : "col-10 "} style={e.platform === "Leetcode" ? { color: '#8B0000' } : {}}>
                                        <div className="d-flex flex-column">
                                            <div className="text-center" style={styles.titleBox}>
                                                <span style={{ fontWeight: 'bold', }}>{e.title}</span>
                                            </div>
                                            <div className="row">
                                                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                                                    <span style={{ margin: '4px' }}><u>Start</u></span>
                                                    <span>{e.start}</span>
                                                    <span style={styles.time}>{e.start_time}</span>
                                                </div>
                                                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                                                    <span style={{ margin: '4px' }}><u>End</u></span>
                                                    <span>{e.end}</span>
                                                    <span style={styles.time}>{e.end_time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-10 d-flex flex-row align-items-center justify-content-center" style={e.platform === "Leetcode" ? { color: '#8B0000' } : { color: 'white' }}>

                                        <button className="btn btn-danger m-2" onClick={() => handleContestPage(e.link)} style={styles.Button}>
                                            View Contest
                                        </button>

                                        <button className="btn btn-primary" style={styles.Button} onClick={() => handleGoogleCalendar(e)}>
                                            <i className="fas fa-calendar px-2"></i>
                                            Remind Me
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div >
    )
}

export default Events;