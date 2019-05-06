import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
  <Header />
    <div>
      <Switch>
        <Route path="/" component= {ExpenseDashboardPage} exact={true} />
        <Route path="/create" component= {AddExpense} /> 
        <Route path="/edit/:id" component= {EditExpensePage} />
        <Route path="/help" component= {HelpPage} />
        <Route component= {NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;