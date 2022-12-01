import { Component, lazy } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Nav from './features/Nav/Nav';
import { Route, Routes } from '@solidjs/router';

const Dashboard = lazy (() => import("./features/Dashboard/DashBoardView"));
const Customers = lazy (() => import("./features/Customers/CustomersView"));
const Assignments = lazy (() => import("./features/Assignments/AssignmentsView"));

const App: Component = () => {

  //'width': 'auto', 'margin-left' : '20rem', 'margin-right': '5rem', 'margin-top' : '5rem'
  return (
    <div class={styles.App}>
      <Nav />
      <div style={{}}>
      <Routes>
        <Route path="/" component={Dashboard}/>
        <Route path="/customers" component={Customers}/>
        <Route path="/assignments" component={Assignments}/>
      </Routes>
      </div>
    </div>
  );
};

export default App;
