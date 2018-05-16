import React from 'react';
import styled from 'styled-components';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Subscribe} from 'unstated';

import AppStore from '../stores/AppStore';

const Root = styled.div`
margin: 10px;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px;
`;

export default class Settings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      format: 1,
    }
  }

  handleChange = (event, index, value) => {
    this.setState({
      format: value
    });
  };

  render() {
    return (
      <Root>
        <div>Настройки</div>
        <div>
          <Subscribe to={[AppStore]}>
            {store => (
              <SelectField
                floatingLabelText="Форма таблицы"
                value={store.state.tableForm.id}
                onChange={(event, index, value) => store.setTableForm(value)}
              >
                {store.getAllForms().map(form => (
                  <MenuItem
                    value={form.id}
                    primaryText={form.title}
                    key={form.id}
                  />
                ))}
              </SelectField>
            )}
          </Subscribe>
        </div>
      </Root>
    )
  }
}
