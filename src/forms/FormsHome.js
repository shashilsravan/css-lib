import React from 'react'
import { Route, Switch } from 'react-router-dom';
import BasicForm from './BasicForm';
import CheckRadio from './CheckRadio';
import InputGroup from './InputGroup';
import OtherForms from './OtherForms';

export default function FormsHome() {
    return (
        <div>
            <Switch>
                <Route path='/forms/basic' component={BasicForm} exact />
                <Route path='/forms/checks-radios' component={CheckRadio} exact />
                <Route path='/forms/input-group' component={InputGroup} exact />
                <Route path='/forms/others' component={OtherForms} exact />
            </Switch>
        </div>
    )
}
