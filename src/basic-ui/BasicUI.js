import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Alerts from './Alerts';
import Avatars from './Avatars';
import BadgesTags from './BadgesTags';
import BoxShadows from './BoxShadows';
import BreadCrumb from './BreadCrumb';
import Container from './Container';
import HelperClasses from './HelperClasses'
import ListGroup from './ListGroup';
import Pagination from './Pagination';
import Ribbons from './Ribbons';

export default function BasicUI() {
    console.log('inside basic UI :>> ');
    return (
        <div>
            <Switch>
                <Route path='/components/avatar' component={Avatars} exact />
                <Route path='/components/helper-classes' component={HelperClasses} exact />
                <Route path='/components/badges-pills' component={BadgesTags} exact />
                <Route path='/components/alerts' component={Alerts} exact />
                <Route path='/components/boxshadow' component={BoxShadows} exact />
                <Route path='/components/pagination' component={Pagination} exact />
                <Route path='/components/breadcrumb' component={BreadCrumb} exact />
                <Route path='/components/list-group' component={ListGroup} exact />
                <Route path='/components/ribbons' component={Ribbons} exact />
                <Route path='/components/container' component={Container} exact />
            </Switch>
        </div>
    )
}
