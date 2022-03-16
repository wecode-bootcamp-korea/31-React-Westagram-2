import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginMinju from './pages/minju/Login/LoginMinju';
import MainMinju from './pages/minju/Main/MainMinju';
import LoginYonghyeon from './pages/yonghyeon/Login/LoginYonghyeon';
import MainYonghyeon from './pages/yonghyeon/Main/MainYonghyeon';
import LoginJihyeon from './pages/jihyeon/Login/LoginJihyeon';
import MainJihyeon from './pages/jihyeon/Main/MainJihyeon';
import LoginHyeseong from './pages/hyeseong/Login/LoginHyeseong';
import MainHyeseong from './pages/hyeseong/Main/MainHyeseong';

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
