이 예제에서는 React를 사용해본다. React 를 사용하기 위한 설정들을 세팅하고 간단한 React 코드를 작성하여 실제로 잘 동작하는지 테스트해본다.

React 에서는 JSX라는 특별한 문법을 사용한다. 이 JSX 문법을 브라우저가 이해할 수 있는 javascript 로 변환해주어야 하는데, 이를 위해서는 ES6세팅과 마찬가지로 babel 을 이용하게 된다. 

1. babel-preset-react 설치. 이 라이브러리는 babel 을 이용하여 transpile 할 때 react 코드도 함께 transpile 하도록 세팅한다.

   ```shell
   npm install babel-preset-react --save-dev
   ```

   

2. React 설치. React 는 core 와 Web용 확장, App용 확장이 각자 있다. 따라서 core 와 Web용 확장을 설치해준다.

   ```shell
   npm install react react-dom 
   ```

   

3. 1에서 설치한 babel-preset-react 를 실제로 babel 이 인식할 수 있도록 설정해준다. ".babelrc" 를 변경한다.

   ```json
   {
       "presets": [
           "env",
           "react"
       ]
   }
   ```



4. React 코드 작성. index.js 수정해준다.

   ```javascript
   import React from 'react';
   import { render } from 'react-dom';
   
   render(
       <div>Hello! I'm React!</div>,
       document.getElementById('app')
   );
   ```