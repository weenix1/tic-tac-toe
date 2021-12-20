import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'styles/App.scss';
import { routes } from 'routes';
import { RecoilRoot } from 'recoil';
import Toaster from 'components/Toaster';

function App() {
  return (
    <RecoilRoot>
      <Toaster />
      <Routes>
        {
          routes.map(([path, Element], i) =>
            <Route path={path} element={<Element />} key={i} />
          )
        }
      </Routes>
    </RecoilRoot>
  );
}

export default App;
