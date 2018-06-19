Redux 는 데이터의 순수한 흐름만을 담당한다. ( 액션발생 -> 데이터 가공 -> Store 에 적용 ) 따라서 Side-effect ( API 호출, Web Socket 연결 ) 는 Redux 의 middleware 에서 담당하게 된다. Redux의 middleware는 action 에서 reducer 로 데이터가 넘어가는 흐름의 중간에서 동작한다. 여기서는 Redux의 Side-effect 를 담당할 middleware 로 Redux Saga 를 사용할것이다. 

이 예제는 현재시간을 보여준다. 버튼을 클릭하면 현재 시간 API 를 호출하여 데이터를 가져온다음, 화면에 출력한다.

1. Redux Saga  설치

   ```shell
   npm install redux-saga
   ```

2. action.js 에 Action 추가

   ```javascript
   export const REQUEST_CURRENT_TIME = 'REQUEST_CURRENT_TIME';
   export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
   ```

3. reducer.js 에 currentTime 을 처리하는 코드 추가

   ```javascript
   import { ADD_COUNT, REQUEST_CURRENT_TIME, SET_CURRENT_TIME } from './action';
   
   export function calculate(state = { count: 1, currentTime: '' }, action) {
     switch (action.type) {
       case ADD_COUNT:
         return Object.assign({}, state, { count: state.count + action.count });
       case REQUEST_CURRENT_TIME:
         return Object.assign({}, state, { currentTime: 'loading...' });
       case SET_CURRENT_TIME:
         return Object.assign({}, state, { currentTime: action.currentTime });
       default:
         return state;
     }
   }
   ```

   

4. saga.js 생성

   ```javascript
   import { takeLatest, call, put } from 'redux-saga/effects';
   
   import { REQUEST_CURRENT_TIME, SET_CURRENT_TIME } from './action.js';
   
   function callTimeAPI() {
     return fetch('http://worldclockapi.com/api/json/est/now')
       .then((res) => {
         if (res.ok) {
           return res.json();
         }
         return null;
       })
       .catch(() => (null));
   }
   
   function* requestCurrentTime(action) {
     const info = yield call(callTimeAPI);
     yield put({ type: SET_CURRENT_TIME, currentTime: info.currentDateTime });
   }
   
   
   function* saga() {
     yield [
       takeLatest(REQUEST_CURRENT_TIME, requestCurrentTime),
     ];
   }
   
   export default saga;
   
   ```

5. middleware 등록. index.js 수정

   ```javascript
   ...
   import { createStore, applyMiddleware } from 'redux';
   import createSagaMiddleware from 'redux-saga';
   import saga from './saga.js';
   
   const sagaMiddleware = createSagaMiddleware();
   const store = createStore(
     calculate,
     applyMiddleware(sagaMiddleware)
   );
   sagaMiddleware.run(saga);
   ...
   ```

6. Home.jsx 에 2에서 추가한 액션을 호출하는 코드 추가

   ```jsx
   ...
   import { ADD_COUNT, REQUEST_CURRENT_TIME } from './action';
   
   class Home extends Component {
     render() {
       const { count, currentTime, addCount, requestTime } = this.props;
       return (
         <div>
           <div>
             <span>{count}</span>
             <button onClick={addCount}>+</button>
           </div>
           <div>
             currentTime: {currentTime} <button onClick={requestTime}>Get Current Time</button>
           </div>
         </div>
       );
     }
   }
   
   const mapStateToProps = (state) => {
     return {
       count: state.count,
       currentTime: state.currentTime
     };
   };
   
   
   const mapDispatchToProps = (dispatch, ownProps) => {
     return {
       addCount: () => {
         dispatch({ type: ADD_COUNT, count: 1 });
       },
       requestTime: () => {
         dispatch({ type: REQUEST_CURRENT_TIME });
       }
     };
   };
   ...
   ```

   

