import React from 'react';
import styled from 'styled-components';

import ElementTable from "../table/ElementTable";
import CategoryList from "../categories/CategoryList";


const TableHolder = styled.div`
display: flex;
justify-content: center;
`;

export default class TablePage extends React.Component {

  render() {
    return (
      <div>
        <CategoryList/>
        <TableHolder>
          <ElementTable/>
        </TableHolder>
      </div>
    )
  }
}
