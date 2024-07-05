import './App.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';

function App() {
  return (
    <div className="App">
      <Input label="Username" type="text" value="" setValue={() => {}} icon={<i className="fas fa-user" />} inputAttributes={{ placeholder: 'Search Movies' }}/>
      <SelectInput label="Sort" options={[{ value: '1', label: 'Default' }, { value: '2', label: 'Latest' }]} value="1" setValue={() => {}}/>
      <Button label="Search" className="button-primary" onClick={() => {}} icon={<i className="fas fa-search" />}/>
      <SearchBar/>
    </div>
  );
}

export default App;
