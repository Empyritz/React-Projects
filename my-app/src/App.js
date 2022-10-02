import React, {useState} from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#FF8888').all(11))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(11)
      setList(colors)
      setError(false)
    } catch (error){
      setError(true)
    }
  }

  const colorList = list.map((color, index)=>{
    return (
      <SingleColor key={color.id} {...color} index={index} hexColor={color.hex}/>
    )
  })

  return (
    <>
      <section className='container'>
        <h3>color generetor</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e)=> setColor(e.target.value)} placeholder='#f15025' className={error ? "error": null}/>
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
          {colorList}
      </section>
    </>
  );
}

export default App;
