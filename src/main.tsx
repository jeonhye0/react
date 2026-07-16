import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterApp from './06_router/RouterApp'
// import TimeApp_2 from './05_State/TimeApp_2'
// import { ToolbarApp } from './05_Toolbar/ToolbarApp'
// import TimeApp from './05_State/TimeApp'
// import FunctionStateApp from './05_State/FunctionStateApp'
// import BookEventApp from './04_Event/BookEventApp'
// import LangApp from './03_lang/LangApp'
// import { BookApp } from './02_book/BookApp'
// import { SimpleApp } from './01_simple/SimpleApp'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterApp />
    {/* <ToolbarApp /> */}
    {/* <TimeApp_2 /> */}
    {/* <TimeApp /> */}
    {/* <FunctionStateApp /> */}
    {/* <BookEventApp /> */}
    {/* <LangApp /> */}
    {/* <BookApp /> */}
    {/* <SimpleApp /> */}
    {/* <App /> */}
  </StrictMode>,
)
