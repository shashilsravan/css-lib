import React from 'react'
import { Route, Switch } from 'react-router-dom';
import BasicButtons from './BasicButtons';
import ButtonGroups from './ButtonGroups';
import FlatButtons from './FlatButtons';
import OutlinedButtons from './OutlinedButtons';

export default function ButtonsHome() {
    return (
        <div>
            <Switch>
                <Route path='/buttons/basic' component={BasicButtons} exact />
                <Route path='/buttons/outlined' component={OutlinedButtons} exact />
                <Route path='/buttons/flat-styled' component={FlatButtons} exact />
                <Route path='/buttons/button-group' component={ButtonGroups} exact />
            </Switch>
        </div>
    )
}
