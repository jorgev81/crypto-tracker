import React, { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Rates from '../pages/Rates';
import RateDetails from '../pages/RateDetails';

export const Routes: FC<{}> = () => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold text-gray-600">Loading...</div>
      </div>
    }
  >
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/rates" component={Rates} />
        <Route path="/rates/:id" component={RateDetails} />
      </Switch>
    </MainLayout>
  </Suspense>
);
