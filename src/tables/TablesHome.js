import React from 'react'
import { Route, Switch } from 'react-router-dom';
import BasicTable from './BasicTable';
import BasicTables2 from './BasicTables2';
import ColouredTables from './ColouredTables';

export default function TablesHome() {
    return (
        <div>
             <Switch>
                <Route path='/tables/basic' component={BasicTable} exact />
                <Route path='/tables/basic-two' component={BasicTables2} exact />
                <Route path='/tables/coloured' component={ColouredTables} exact />
            </Switch>
        </div>
    )
}
