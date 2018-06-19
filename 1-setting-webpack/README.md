## 설정
1. npm init
2. npm install webpack webpack-dev-server webpack-cli --save-dev
3. webpack.config.js 추가
4. index.js 추가
5. index.html 추가

## 실행
1. npm 명령어 이용하기

package.json 의 scripts 항목 아래에 "start": "webpack-dev-server --config ./webpack.config.js" 추가

npm start 로 실행

2. npx 명령어 이용하기

npx: webpack-dev-server --config ./webpack.config.js 로 실행
