import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Count from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import StyleSheet from './components/StyleSheet';
import InLine from './components/Inline';
import './appStyles.css';
import Styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefDemos from './components/RefDemos';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import RPCounter from './components/RPCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './UserContext';

function App() {
	return (
		<div className="App">
      <UserProvider  value = 'Nava'>
      <ComponentC />
			</UserProvider>
      {/*
      <RPCounter
				render={(count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount} />}
			/>
			<RPCounter
				render={(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount} />}
			/>
       <ClickCounter2/>
      <HoverCounter2/>
      <User render = {(isLoggedIn) => isLoggedIn ? 'Nava': 'guest'}/>
      		<ClickCounter name = 'Nava'/>
      <HoverCounter/>
      <ErrorBoundary>
				<Hero heroName="Batman" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Superman" />
			</ErrorBoundary>
			<ErrorBoundary>
				<Hero heroName="Joker" />
			</ErrorBoundary><
      <PortalDemo/>
      <FRParentInput/>
      <FocusInput/>
        <RefDemos/>
      <ParentComp/>
      <Table></Table>
      <FragmentDemo/>
       <LifeCycleA />
      <Form/>
      <h1 className = 'error'>Error</h1>
     <h1 className = {Styles.success}>Success</h1>
       <InLine />
      <StyleSheet primary= {true}/
      <PersonList/>
      <NameList/>
      <UserGreeting/>
       <ParentComponent/>
      <EventBind/>
      <FunctionClick/>
      <ClassClick/>
      <Count/>
      <Message/>
      <Greet name='Nava' heroName='CEO'>
        <p>This is Children props</p>
      </Greet>
      <Greet name='Bruce' heroName='BatMan'>
        <button>Action</button>
      </Greet>
      <Greet name='Kent' heroName='SuperMan'></Greet>

      <Welcome name='Nava' heroName='CEO'></Welcome>
      <Welcome name='Bruce' heroName='BatMan'></Welcome>
      <Welcome name='Kent' heroName='SuperMan'></Welcome>
      {/*<Hello/>*/}
		</div>
	);
}

export default App;
