import React from "react";
import {
  Day,
  Week,
  WorkWeek,  
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";


import { scheduleData } from "../../assets/dummy";

import { Header } from "../../components";
import PageWrapper from "../PageWrapper";

const Calendar = () => {
  return (
    <PageWrapper title="Calendar" categorie="App">
      <ScheduleComponent className="dark:bg-main-dark-bg" enableAdaptiveUI={true} width='100%' height={"70vh"} >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
      </ScheduleComponent>
      </PageWrapper>

  );
};

export default Calendar;
