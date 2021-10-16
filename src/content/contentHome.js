import React from 'react'
import { Route, Switch } from 'react-router-dom';
import ContentColors from './ContentColors';
import CSSVars from './CSSVars';
import Fonts from './Fonts';
import Typography from './Typography';

export default function contentHome() {
    return (
        <div>
            <Switch>
                <Route path='/content/colors' component={ContentColors} exact />
                <Route path='/content/css-variables' component={CSSVars} exact />
                <Route path='/content/fonts' component={Fonts} exact />
                <Route path='/content/typography' component={Typography} exact />
            </Switch>
        </div>
    )
}
