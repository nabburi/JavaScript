import React, { useReducer } from 'react';
import './App.css';
import DataFetchingOne from './Components/DataFetchingOne';
import DataFetchingTwo from './Components/DataFetchingTwo';
import Counter from './Components/Counter';
import FocusInput from './Components/FocusInput';
import HookTimer from './Components/HookTimer';
import DocTitle1 from './Components/DocTitle1';
import DocTitle2 from './Components/DocTitle2';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';

{/*
import ClassComponent from './Components/ClassComponent';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterFour from './Components/HookCounterFour';
import HookCounterFive from './Components/HookCounterFive';
import HookMouse from './Components/HookMouse';
import MosueContainer from './Components/MosueContainer';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC'
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import ComponentFA from './Components/ComponentFA';
import ComponentFB from './Components/ComponentFB';
import ComponentFC from './Components/ComponentFC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state +1
        case 'decrement':
            return state -1 
        case 'reset':
            return initialState
        default:
            return state
    }
}
*/}

function App() {
    
  {/*const [count, dispatch] = useReducer(reducer, initialState)*/}
    return (
      <div className="App">
        <Counter1/>
        <Counter2/>
        {/*
         <DocTitle1/>
        <DocTitle2/>
        <HookTimer/>
        <FocusInput/>
        <Counter/>
        <DataFetchingTwo/>
          <DataFetchingOne/>
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Count = {count}
          <ComponentFA/>
          <ComponentFB/>
          <ComponentFC/>
        </CountContext.Provider>
        <CounterThree/>
        <CounterTwo/>
        <CounterOne/>
        <UserContext.Provider value = {'Nava'}>
          <ChannelContext.Provider value = {'React-H00ks'}>
            <ComponentC/>
          </ChannelContext.Provider>
        </UserContext.Provider>
         <DataFetching/>
        <IntervalHookCounter/>
        <MosueContainer/>
        <HookMouse/>
        <HookCounterFive/>
        <HookCounterFour/>
         <HookCounterThree/>
        <HookCounterTwo/>
        <HookCounter/>
        <ClassComponent/>
      */}
      </div>
    );
  }

export default App;
