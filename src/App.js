import './App.css';
import Instance from './Component/MessageContent';
import Mohan from './Component/Mohan';

import ThemeProvider from './Theme Switcher/ThemeProvider'; 
import ThemeConsumer from './Theme Switcher/ThemeConsumer';

function App() {
  return (
    <>
      <Instance.Provider value="Suresh, take this pen!">  
        <Mohan />
      </Instance.Provider>

      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    </>
  );
}

export default App;
