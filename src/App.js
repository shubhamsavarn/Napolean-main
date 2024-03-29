import React , {useState} from 'react'
import Header from './components/Header';
import TimeTable from './components/TimeTable';
import Aboutme from './components/Aboutme';
import Note from './components/Note';
import UpcomingFeatures from './components/UpcomingFeatures';
import Goal from './components/Goal';
import './App.css';

function App() {

  const [modal, setModal] = useState(false);

  const styles = {
    main_div: {
      backgroundImage: ' linear-gradient(to bottom, #edfafb, #f2fbfe, #f8fcff, #fcfdff, #ffffff)',
      margin: '0 !important',
      padding: '0 !important'
    }
  }


  return (
    <div className="container-fluid" style={styles.main_div}>
      <Header />
      <TimeTable />
      <Goal />
      <div className="d-flex row mx-0 flex-wrap align-items-center justify-content-around">
        <div className="col-12 col-xl-6">
          <UpcomingFeatures />
        </div>
        <div className="col-12 col-xl-6">
          <Note />
        </div>
      </div>
      <Aboutme />
    </div>
  );
}


export default App;

