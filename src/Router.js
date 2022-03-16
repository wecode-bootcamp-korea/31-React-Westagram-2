import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginMinju from './pages/minju/Login/Login';
import MainMinju from './pages/minju/Main/Main';
import LoginYonghyeon from './pages/yonghyeon/Login/Login';
import MainYonghyeon from './pages/yonghyeon/Main/Main';
import LoginJihyeon from './pages/jihyeon/Login/Login';
import MainJihyeon from './pages/jihyeon/Main/Main';
import LoginHyeseong from './pages/hyeseong/Login/Login';
import MainHyeseong from './pages/hyeseong/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-minju" element={<LoginMinju />} />
        <Route path="/main-minju" element={<MainMinju />} />
        <Route path="/login-yonghyeon" element={<LoginYonghyeon />} />
        <Route path="/main-yonghyeon" element={<MainYonghyeon />} />
        <Route path="/login-jihyeon" element={<LoginJihyeon />} />
        <Route path="/main-jihyeon" element={<MainJihyeon />} />
        <Route path="/login-hyeseong" element={<LoginHyeseong />} />
        <Route path="/main-hyeseong" element={<MainHyeseong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
