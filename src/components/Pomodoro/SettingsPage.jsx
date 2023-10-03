import ReactSlider from 'react-slider';
import './slider.css';
import SettingsContext from './SettingsContext';
import {useContext} from 'react';
import SettingsBackButton from './SettingsBackButton';


function SettingsPage() {
  const settingsInfo = useContext(SettingsContext);
  return (
    <main>
      <div>
        <label>Work mins: {settingsInfo.workMinutes}:00</label>
        <ReactSlider 
          className={'slider red'}
          thumbClassName={'thumb'}
          trackClassName={'track'}
          value={settingsInfo.workMinutes}
          onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
          min={1}
          max={120}
        />
        <label>Break mins: {settingsInfo.breakMinutes}:00</label>
        <ReactSlider 
          className={'slider green'}
          thumbClassName={'thumb'}
          trackClassName={'track'}
          value={settingsInfo.breakMinutes}
          onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
          min={1}
          max={120}
        />
        <div style={{marginTop: '20px'}}>
          <SettingsBackButton onClick={() => settingsInfo.setShowSettings(false)}/>
        </div>
        
      </div>
    </main>
  )
}

export default SettingsPage;
