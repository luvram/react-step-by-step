이 예제에서는 이전 예제에서 만든 React 코드를 별도의 코드로 분리하는 작업을 한다. React Component 가 저장된 javascript 파일은 React Component 라는것을 알리기 위해 *.jsx 확장자를 사용하여 저장한다.

1. Home.jsx 만들기

   ```jsx
   import React from 'react';
   
   class Home extends React.Component {
       render() {
           return (
               <div>Hello! I'm Home component!</div>
           );
       }
   }
   
   export default Home;
   ```

2. index.js 수정

   ```javascript
   import React from 'react';
   import { render } from 'react-dom';
   import Home from './Home.jsx';
   
   render(
       <Home />,
       document.getElementById('app')
   );
   ```



3. webpack.config.js 수정. babel이 *.jsx 파일도 인식하여 처리할 수 있게 module.rules.test 부분에 jsx 를 추가한다.

   ```javascript
   ...
   module: {
       rules: [
           {
               test: /\.(js|jsx)$/,
               exclude: /node_modules/,
               use: ['babel-loader'],
           },
       ],
   },
   ...
   ```

