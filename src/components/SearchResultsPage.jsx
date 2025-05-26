import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'

const SearchResultsPage = () => {
  const location= useLocation()
   const query = new URLSearchParams(location.search).get("q");
  const products = useSelector((state)=> state.products.items)
  const filtered = products.filter((item)=>
  item.title.toLowerCase().includes(query?.toLowerCase()) )
  return (
    <div>
      <h2>Search results for "{query}"</h2>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* {filtered.length ? (
        //   filtered.map((item) => (
        //     <div key={item.id} className="border rounded p-2 shadow">
        //       <img src={item.image} alt={item.title} className="w-full h-32 object-cover" />
        //       <h4 className="text-sm mt-2">{item.title}</h4>
        //       <p className="text-gray-600">${item.price}</p>
        //     </div>
        //   ))
        // ) : (
        //   <p>No results found.</p>
        // )} */}
        {filtered.length ? (
          filtered.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
      </div>
    </div>
  )
}

export default SearchResultsPage
