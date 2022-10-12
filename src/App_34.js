import React, { useState, useEffect } from 'react'
import List_34 from './components/List_34'
import Alert_34 from './components/Alert_34'

const getLocalStorage = () =>{
  let list = localStorage.getItem('list');
  if(list) {
    return JSON.parse(localStorage.getItem('list'));
  }else{
    return[];
  }
}

const App_34 = () => {
  const [name,setName] = useState('');
  const [list,setList] = useState(getLocalStorage());
  const [alert,setAlert] = useState({
    show: false,
    msg: '',
    type: '',
});

useEffect(() =>{
  localStorage.setItem('list', JSON.stringify(list));
}, [list]);

const showAlert = (show = false, msg = '',type = '') => {
    setAlert({show,msg,type});
}

const handleSubmit = (e) =>{
  e.preventDefault();
  if(!name){
    showAlert(true, 'please enter value', 'danger');
    //
  }else {
    showAlert(true, 'value changed', 'success');
    const newItem ={
      id: new Date().getTime().toString(),
      title: name
    };
    setList([...list, newItem]);
    setName('');
  }
};

const removeItem = (id) => {
  showAlert(true,'item removed','danger');
    setList( list.filter((item)=> item.id !== id));
};

const clearList = () =>{
  showAlert(true,'empty list','danger');
  setList([]);
};

  return(
    <>
    <section className="section-center">
      <form  className="grocery-from" onSubmit={handleSubmit}>
        { alert.show && <Alert_34 {...alert} removeAlert={showAlert}/>}
        <h3>Grocery Bud - 210410634</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="e.g. eggs" value={name} onChange={ (e)=>{setName(e.target.value
            )}} />
          <button type="submit" className="submit-btn">submit</button>
        </div>
      </form>
      { list.length > 0 &&(
        <div className="grocery-container">
          <List_34 items={list} removeItem={removeItem}/>
          <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
      )}
      </section>
      </>
  )
}

export default App_34
