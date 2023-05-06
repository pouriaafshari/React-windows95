import './App.css'

import Loading from './components/loading.js';
import Windose from './components/windose';

function App() {

  function remove_loading()
  {
      setTimeout(() => 
      {

          const loading_div = document.getElementById('loading');

          loading_div.style.animation = 'fade-out 0.3s';

          loading_div.addEventListener('animationend', () => {
              loading_div.style.display = "none";
          });


      }, 1500);
  }


  return (
    <>
      <Loading onLoad={remove_loading()}/>
      <Windose />
    </>
  );
}

export default App;
