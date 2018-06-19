React Router 는 refresh 없이 페이지의 이동을 도와주는 라이브러리이다. 아래는 React Router 를 이용하여 메인 페이지와 /about 페이지로 이동하는 에제이다.

1. React Router 설치

   ```shell
   npm install react-router-dom
   ```

2. About.jsx 추가. 페이지 이동을 확인하기 위해 추가하였다.

   ```jsx
   import React from 'react';
   import { Link } from 'react-router-dom';
   
   const About = () => (
     <div>
       <h2>About</h2>
       <Link to="/">go to Home</Link>
     </div>
   );
   
   export default About;
   ```

   

3. Home.jsx 수정

   ```jsx
   import React from 'react';
   import { Link } from 'react-router-dom';
   
   class Home extends React.Component {
     render() {
       return (
         <div>
           <h2>Home</h2>
           <Link to="/about">go to About</Link>
         </div>
       );
     }
   }
   
   export default Home;
   ```

   

4. index.js 수정

   ```jsx
   import React from 'react';
   import { render } from 'react-dom';
   import {
     BrowserRouter as Router,
     Route
   } from 'react-router-dom';
   
   import Home from './Home.jsx';
   import About from './About.jsx';
   
   render(
     <Router>
       <div>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
       </div>
     </Router>
     ,
     document.getElementById('app')
   );
   
   
   ```

5. webpack.config.js 변경. url 경로가 어찌 되던 dist/index.html 으로 보여주도록 한다.

   ```javascript
   ...
   devServer: {
       contentBase: './dist',
       historyApiFallback: true,
   },
   ...
   ```

   