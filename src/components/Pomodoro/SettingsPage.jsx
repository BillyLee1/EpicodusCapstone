import ReactSlider from 'react-slider';
import './slider.css';
import SettingsContext from './SettingsContext';
import {useContext} from 'react';


function SettingsPage() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <main>
      <div>
        <label>Work mins:</label>
        <ReactSlider 
          className={'slider red'}
          thumbClassName={'thumb'}
          trackClassName={'track'}
          value={45}
          min={1}
          max={120}
        />
        <label>Break mins:</label>
        <ReactSlider 
          className={'slider green'}
          thumbClassName={'thumb'}
          trackClassName={'track'}
          value={45}
          min={1}
          max={120}
        />
      </div>
    </main>
  )
}

export default SettingsPage;
