import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Subscribe} from 'unstated';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import AppStore from '../stores/AppStore';
import CategoryList from "../categories/CategoryList";
import Navigation from "../components/Navigation";

export default class Settings extends React.Component {

  render() {
    return (
      <Card initiallyExpanded={true}>
        <CardHeader
          title="Настройки"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          <Navigation/>
          <Subscribe to={[AppStore]}>
            {store => (
              <div>
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
              </div>
            )}
          </Subscribe>
        </CardText>
      </Card>
    )
  }
}
