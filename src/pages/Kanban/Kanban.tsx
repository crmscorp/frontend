import React from 'react'
import {KanbanComponent, ColumnDirective, ColumnsDirective} from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../../assets/dummy'

import { Header } from '../../components'
import PageWrapper from '../PageWrapper'
const Kanban = () => {
  return (
    <PageWrapper title='Kanban' categorie='App'>
      <KanbanComponent  keyField='Status'  cardSettings={{contentField: 'Summary', headerField: 'Id'}} id='kanban' dataSource={kanbanData} allowKeyboard={false}>
        <ColumnsDirective>
        {kanbanGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
      </KanbanComponent>
      </PageWrapper>
  )
}

export default Kanban