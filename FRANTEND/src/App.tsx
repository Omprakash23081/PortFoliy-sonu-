import { ThemeProvider } from './components/Home/ThemeProvider';
import Achievement from './components/Achivement/Achivement';
import { useState } from 'react';
import About from './components/Home/About';
import Root from './components/Home/root';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {
        isMenuOpen!=null ? (
          <Achievement setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
        ):(
          <>
          <About setIsMenuOpen={setIsMenuOpen}/>
          <Root />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;