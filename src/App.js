import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
 const[checkButton, setCheckButton]=useState(true)

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeButton= useCallback(()=>{
if(checkButton){
  setCheckButton((prev)=>!prev)
}
else{
  setCheckButton((prev)=>!prev)
}
  },[checkButton])
 
  const btnTitle=checkButton?'Change to Descending Order' :'Change to Ascending Order';
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} checkButton={checkButton}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeButton}>{btnTitle}</Button>
    </div>
  );
}

export default App;