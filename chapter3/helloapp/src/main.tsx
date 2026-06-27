import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// <App /> 컴포넌트 임포트(기본적으로 상대 경로, p82 절대 경로로 변경하는 방법 참고)
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// id 속성이 'root'인 HTML 요소 내부에 임포트한 <App /> 컴포넌트를 렌더링함
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
