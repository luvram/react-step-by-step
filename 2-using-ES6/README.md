이 예제에서는 ES6를 사용하기 위해서는 어떤 환경설정을 해야 하는지 다룰것이다. 그리고 간단한 ES6코드를 작성하여 제대로 작동하는지 까지 확인할것이다. 

현재 나와있는 브라우저들은 ES6 문법을 완벽하게 지원하지 않기 때문에 ES6로된 자바스크립트를 ES5로 변환시켜주어야 한다. 이때 변환하는 과정을 transpile 이라 부르고, 변환할때는 babel 라이브러리를 이용하게 된다. babel 과 ES6를 ES5로 변환시키기 위한 플러그인인 babel-preset-env을, 그리고 webpack의 번들링 과정에 babel 을 연결시키기 위한 babel-loader를 설치해준다.

1. babel 설치

   ```shell
   npm install babel-core babel-loader babel-preset-env --save-dev
   ```

2. webpack.config.js 에 webpack 이 번들링 과정에서 babel 이 실행될 수 있도록 설정.

   ```javascript
   ...
   module: {
       rules: [
           {
               test: /\.(js)$/,
               exclude: /node_modules/,
               use: ['babel-loader'],
           },
       ],
   },
   ...
   ```

   - test: 타겟이 되는 파일을 정규식으로 지정할 수 있다. 위 코드는 *.js 확장자를 가진 파일만 babel 로 변환하게 된다.
   - exclude: node_module 폴더 안의 내용들은 변환하지 않도록 지정해준다. ( 안해주면 transpile 속도가 몹시 느리다. )
   - use: 어떤 도구를 webpack 번들링 과정에서 사용할지 지정한다. 

3. 1에서 설치한 babel-preset-env 를 실제로 babel 이 인식할 수 있도록 설정해준다. ".babelrc" 를 추가한다.

   ```json
   {
       "presets": [
           "env"
       ]
   }
   ```

   

4. index.js 에 ES6 코드 넣고 테스트해보기

   ```javascript
   const element = document.createElement('div');
   element.innerText = "Hello";
   
   const func = () => {
       const element = document.createElement('div');
       element.innerText = "Hello2";
       return element;
   }
   
   document.body.appendChild(element);
   document.body.appendChild(func());
   ```

   

