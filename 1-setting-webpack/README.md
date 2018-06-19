이 예제에서는 Hello 를 화면에 출력하는 간단한 웹 어플리케이션을 만들것이다. webpack을 이용하여 번들링된 javascript 파일을 생성하기도 하고 webpack-dev-server 를 이용하여 간단한 웹 서버를 띄워 테스트를 할것이다.

## 설정

1. 프로젝트 초기화

   ```shell
   npm init
   ```

2. webpack 과 webpack-cli, webpack-dev-server (로컬에서 서버 돌리는용), 설치. webpack은 빌드할때만 사용하므로 --save-dev 옵션을 붙여준다.

   ```shell
   npm install webpack webpack-dev-server webpack-cli --save-dev
   ```

3. webpack 실행시 기본적으로 참조할 설정파일을 생성한다. webpack.config.js 추가

   ```javascript
   module.exports = {
     entry: ['./src/index.js'],
     output: {
       path: __dirname + '/dist',
       publicPath: '/',
       filename: 'bundle.js',
     },
     devServer: {
       contentBase: './dist',
     },
   };
   ```

4. 간단한 index.js 추가

   ```javascript
   var element = document.createElement('div');
   element.innerText = "Hello";
   
   document.body.appendChild(element);
   ```

5. webpack 이 생성해낸 번들 javascript 파일을 참조하는 index.html 추가

   ```html
   <!DOCTYPE html>
   <html>
   
   <head>
     <meta charset="UTF-8">
     <title>React Tutorial</title>
   </head>
   
   <body>
     <div class="app" id="app"></div>
     <script src="/bundle.js"></script>
   </body>
   
   </html>
   ```




위의 예제를 보면 이상한점이 있는데, 바로 javascript 파일은 index.js 뿐인데 index.html 에서 참조하는 javascript 파일은 bundle.js 라는것이다. webpack은 필요한 라이브러리들과 사용자가 작성한 javascript 파일들을 하나의 javascript 파일로 만든다. 이때 생성된 javascript 파일은 webpack.config.js 에서 설정한 output 설정대로 bundle.js 라는 이름으로 저장된다. 따라서 index.html 에서는 최종 결과물인 bundle.js 를 참조하게 된다.



## 빌드

1. 빌드 명령어를 실행하면 dist/bundle.js 가 생성된다.

   ```shell
   npx webpack --mode development
   ```

dist/bundle.js 에서는 라이브러리 설치시 --save-dev 옵션을 붙였던 라이브러리들은 포함하지 않는다. 

## web 서버 실행
아래의 두 명령중 하나를 선택하여 web 서버를 실행할 수 있다. 실행된 웹 서버는 localhost:8080/ 으로 접속할 수 있다.

1. npm 명령어 이용하기

   - package.json 의 scripts 항목 아래에 명령어 추가

     ```javascript
     "scripts": { 
         ...
     	"start": "webpack-dev-server --config ./webpack.config.js  --mode development"
     }
     ```

   - 실행

     ```shell
     npm start
     ```

2. npx 명령어 이용하기

   - ```shell
     npx webpack-dev-server --config ./webpack.config.js --mode development
     ```

