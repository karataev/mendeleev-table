import React, {Fragment} from 'react';
import styled from 'styled-components';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Subscribe} from 'unstated';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import AppStore from '../stores/AppStore';
import CategoryList from "../categories/CategoryList";

const Root = styled.div`
margin: 10px;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px;
`;

export default class Settings extends React.Component {

  render() {
    return (
      <Card initiallyExpanded={true}>
        <CardHeader
          title="Настройки"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <Subscribe to={[AppStore]}>
          {store => (
            <Fragment>
              <CardText expandable={true}>
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
              </CardText>
              <CardText expandable={true}>
                <SelectField
                  value={store.getColorGroup().id}
                  onChange={(event, index, value) => store.setColorGroup(value)}
                  floatingLabelText="Группировка"
                >
                  {store.getColorGroups().map(group => (
                    <MenuItem
                      value={group.id}
                      primaryText={group.title}
                      key={group.id}
                    />
                  ))}
                </SelectField>
                <CategoryList items={store.getColorGroup().data}/>
              </CardText>
            </Fragment>
          )}
        </Subscribe>
      </Card>
    )
  }
}
