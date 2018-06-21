Redux 는 앱의 상태를 관리하는 라이브러리이다. 상태란 체크박스 체크 여부, 버튼 활성화 여부, API 호출 결과 등 앱이 유지하고 있는 데이터를 의미한다. React 는 UI 만 관리하는 라이브러리이기 때문에 상태(데이터)를 별도로 관리해줄 라이브러리와 함께 운용된다.

이 예제에서는 Redux 의 Action과 Reducer 를 정의하고 Store 를 React 에 연결하여 사용하는법 까지 실습해본다.

1. Redux 설치, Redux 를 React를 연결해주는 react-redux 도 설치

   ```shell
   npm install redux react-redux
   ```

2. action.js 생성

   ```javascript
   export const ADD_COUNT = 'ADD_COUNT';
   ```

3. reducer.js 생성

   ```javascript
   import { ADD_COUNT } from './action';
   
   export function calculate(state = { count: 1 }, action) {
       switch (action.type) {
           case ADD_COUNT:
               const newState = Object.assign({}, state, { count: state.count + action.count });
               return newState;
           default:
               return state;
       }
   }
   ```

4. 각 React Component 에서 Redux 의 Store 를 사용할 수 있도록 설정하기. index.js 수정

   ```jsx
   ...
   import { Provider } from 'react-redux';
   import { createStore } from 'redux';
   import { calculate } from './reducer';
   
   const store = createStore(
       calculate,
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // debug 용
   );
   
   render(
       <Provider store={store}>
           <Router>
               <div>
                   <Route exact path="/" component={Home} />
                   <Route path="/about" component={About} />
               </div>
           </Router>
       </Provider>
       ,
       document.getElementById('app')
   );
   
   
   ```

5. React Component 에 Store 의 데이터 연결. Home.jsx 수정

   ```jsx
   import React, { Component } from 'react';
   import { connect } from 'react-redux';
   
   import { ADD_COUNT } from './action';
   
   class Home extends Component {
       render() {
           const { count, addCount } = this.props;
           return (
               <div>
                   <span>{count}</span>
                   <button onClick={addCount}>+</button>
               </div>
           );
       }
   }
   
   const mapStateToProps = (state) => {
       return {
           count: state.count,
       };
   };
   
   
   const mapDispatchToProps = (dispatch, ownProps) => {
       return {
           addCount: () => {
               dispatch({ type: ADD_COUNT, count: 1 });
           },
       };
   };
   export default connect(mapStateToProps, mapDispatchToProps)(Home);
   ```

   