import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import EnseignantDashboard from './components/EnseignantDashboard';
import StudentDashboard from './components/StudentDashboard';
import AdminDashbord from './components/AdminDashbord';
import Login from './components/Login';
import AdminMessages from './components/admin/message.jsx/AdminMessages';
import ForgetPassword from './components/admin/ForgetPassword';
import Side from './components/admin/Side';
import SideStudent from './components/student/Side';

function App() {
  return ( 
    <BrowserRouter>
      <div>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/EnseignantDashboard' component={EnseignantDashboard}/>
            <Route path='/StudentDashboard/:username' component={StudentDashboard}/>
            <Route path='/AdminDashboard' component={AdminDashbord}/>
            <Route path='/login' component={Login}/>
            <Route path='/AdminMessages/:username' component={AdminMessages}/>
            <Route path='/ForgetPassword' component={ForgetPassword}/>
            <Route path='/SideAdmin' component={Side}/>
            <Route path='/SideStudent/:username' component={SideStudent}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
