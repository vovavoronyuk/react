import React from 'react';
import ReactDOM from 'react-dom/client';




function App() {
  return(
    <>
      <div>
          <h1>Hello World</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus deleniti quo adipisci officiis assumenda, enim porro in, consequuntur, voluptatem ad amet aliquid quis recusandae dolorem nisi. Vero laborum magni, delectus tempore nobis vel consequatur iure, quaerat labore suscipit fuga repellat tenetur sequi minus animi nisi aliquam. Incidunt doloribus sit cupiditate.</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad quae quas fugiat illo fugit debitis labore ipsum excepturi omnis?</p>
      </div>
      </>
  )
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App/>);
 