import React from 'react'
import { Route, Switch } from 'react-router-dom';
import BasicCards from './BasicCards';
import ColouredCards from './ColouredCards';
import ImageCards from './ImageCards';
import SkeltonCards from './SkeltonCards';

export default function CardsHome() {
    return (
        <div>
            <Switch>
                <Route path='/cards/basic' component={BasicCards} exact />
                <Route path='/cards/coloured' component={ColouredCards} exact />
                <Route path='/cards/image-cards' component={ImageCards} exact />
                <Route path='/cards/skeleton-cards' component={SkeltonCards} exact />
            </Switch>
        </div>
    )
}
