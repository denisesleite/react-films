import { BrowserRouter, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Home } from './pages/Home';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={Home} path="/home" />
    </BrowserRouter>
  )
}