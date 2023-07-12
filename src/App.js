import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Greet from './components/props/Greet'
import GreetClass from './components/props/GreetClass';
import Message from './components/state/Message';
// import Counter from './components/setState/Counter';
import FunctionClick from './components/event/FunctionClick';
import ClassClick from './components/event/ClassClick';
import EventBind from './components/event/EventBind';
import ParentComponent from './components/methodAsProps/ParentComponent';
import UserGreeting from './components/conditionalRender/UserGreeting';
import NameList from './components/ListRendering/NameList';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/purecompdiff/ParentComp';
import RefsDemo from './components/Ref/RefsDemo';
import FocusInput from './components/Ref/FocusInput';
import FRParentInput from './components/Ref/FRParentInput';
import Hero from './components/ErrorBoundary/Hero';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
// import Counter from './components/RenderProps/Counter';
import ComponentA from './components/Context/ComponentA';
import { UserProvider } from './components/Context/userContext';
import PostList from './components/HTTP/PostList';
import PostForm from './components/HTTP/PostForm';
import UseState from './components/Hooks/UseState';
import UseStateCountertwo from './components/Hooks/UseStateCountertwo';
import Effect from './components/Hooks/Effect';
import ConditionalRunEffect from './components/Hooks/ConditionalRunEffect';
import DataFetching from './components/DataFetching';
import GetById from './components/HTTP/GetById';
import Reducer from './components/Hooks/Reducer';
import CallBack from './components/Hooks/CallBack/CallBack';
import Counter from './components/Hooks/Memo';
import Ref from './components/Hooks/Ref';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
       <Router>
          <div className="App">
            <ul className="App-header">
              <Home />
            </ul>
            <div className="App-content">
              <li>
                <Link to="/useState">UseState Hook</Link>
              </li>
              <li>
                <Link to="/effect">UseEffect Hook</Link>
              </li>
              <li>
                <Link to="/reducer">UseReducer Hook</Link>
              </li>
              <li>
                <Link to="/ref">UseRef Hook</Link>
              </li>
              <li>
                <Link to="/memo">useMemo Hook</Link>
              </li>
            </div>  
            <div className="Content">
              <Routes>
                <Route exact path='/reducer' element={<Reducer />}></Route>
                <Route exact path='/useState' element={< UseState />}></Route>
                <Route exact path='/memo' element={< Counter />}></Route>
                <Route exact path='/ref' element={< Ref />}></Route>
                <Route exact path='/effect' element={< Effect />}></Route>


              </Routes>
            </div>         
          </div>
       </Router>
   );
  }
}


// function App() {
//   return (
//     <div className="App">
      
      
//       {/* //Props are immutable, their values cant be changed 
//       <Greet fname='Nidhi' lname='Singh' />
//       <Greet fname='Neha' lname='Verma' />
//       <Greet fname='Vidhi' lname='Sharma' />
//       <GreetClass fname = 'Nidhi' lname='Singh' />  */}
      
//       {/* <Message />
//       <Counter /> */}
     
//       {/* <FunctionClick />
//       <ClassClick /> 
//       <EventBind /> */}

//       {/* <ParentComponent /> */}
//       {/* <UserGreeting /> */}
//       {/* <NameList /> */}
//       {/* <Form /> */}
      
//       {/* <FragmentDemo /> */}
//       {/* <ParentComp /> */}
//       {/* <RefsDemo /> */}
//       {/* <FocusInput /> */}
//       {/* <FRParentInput /> */}
//       {/* <ErrorBoundary>
//         <Hero heroname={'SalmanKhan'} />
//       </ErrorBoundary>
//       <ErrorBoundary >
//         <Hero heroname={'MSDhoni'} />
//       </ErrorBoundary>
//       <ErrorBoundary >
//         <Hero heroname={'Joker'} />
//       </ErrorBoundary> */}
            
//       {/* <ClickCounter />
//       <HoverCounter /> */}
//       {/* <Counter 
//         render={(count,incrementCount)=> (
//                 <ClickCounterTwo count={count} incrementCount={incrementCount} /> )} 
//       />
//       <Counter 
//         render={(count,incrementCount)=> (
//                 <HoverCounterTwo count={count} incrementCount={incrementCount} />  )} 
//       /> */}

//       {/* <UserProvider value="Nidhi">
//           <ComponentA  />
//       </UserProvider> */}

//       {/* <PostList /> */}
//       {/* <PostForm /> */}

//       {/* <UseState /> */}
//       {/* <UseStateCountertwo /> */}
//       {/* <Effect /> */}
//       {/* <ConditionalRunEffect /> */}
//       {/* <DataFetching /> */}
//       {/* <GetById /> */}
//       {/* <Reducer /> */}

//       {/* <CallBack /> */}
//       {/* <Counter /> */}
//       {/* <Ref /> */}
      


      

      
//     </div>
//   );
    
// }

export default App;
