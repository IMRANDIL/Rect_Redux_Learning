// import Counter from "./features/counter/Counter";

import AddPostForm from "./features/Posts/AddPostForm";
import Posts from "./features/Posts/Posts";


function App() {
  return (
    // <div className="App">
    //   <Counter />
    // </div>

    <main className="App">
      <AddPostForm />
      <Posts />
    </main>
  );
}

export default App;
