import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('')
  // const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'
  // const urlID = 'www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007'
  
  React.useEffect(() => {
    searchValue.current.focus()
  },[])

  const seacrhCocktail = ()=> {
    setSearchTerm(searchValue.current.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form action='' className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input type="text"id='name' ref={searchValue} onChange={seacrhCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm