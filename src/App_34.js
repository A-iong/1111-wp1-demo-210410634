import React, { useState, useEffect } from 'react'
import List_34 from './components/List_34'
import Alert_34 from './components/Alert_34'
import { FaLuggageCart } from 'react-icons/fa';

const App_34 = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg:'',
    type: ''
  });

  const showAlert = (show = false, msg= '', type='',) => {
    setAlert({show, msg, type, })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name){
      showAlert(true,'please enter value','danger');
    }else {
      showAlert(true, 'value changed', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      };
      setList([...list, newItem]);
      setName('');
      }
    };
  

  return (
    <>
      <section className="section-center">
        <form className="grocery-from" onSubmit={handleSubmit}>
          {alert.show && <Alert_34 alert={alert} removeAlert={showAlert}/>}
          <h3>Grocery Bud - 210410634</h3>
          <div className="form-control">
            <input type="text" className="grocery" placeholder='e.g. eggs' value={name} onChange={
              (e) => {setName(e.target.value)}}/>
            <button type="submit" className="submit-btn" >submit</button>
            </div>
        </form>
        {list.length > 0 &&(
          <div className="grocery-container">
            <List_34 items={list} />
            <button className='clear-btn'>clear items</button>
          </div>
        )}
      </section>
    </>
  
  )
            }

export default App_34
