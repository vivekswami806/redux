import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cathandel, SearchHandler, SortingHandler } from '../redux/action'
import Product from './Product'
import PageNation from './PageNation'

function SearchHandle() {
    let dispatch= useDispatch()
    let DummyData= useSelector((data)=>{
        return data.SearchReducer.search
    })
    console.log(DummyData);
    let mainData= useSelector((data)=>{
        return data.fetchReducer.data
    })
    let Cat = mainData.map((e)=>{
        return e.category

    })
    let cat2= ["all",...new Set(Cat)]
    console.log(cat2);
  return (
    <div>
        <select name="" id="" onChange={(e)=>{
            dispatch(cathandel(e,mainData))
        }}>
            {cat2.map((items,i)=>{
                return(
                    <option key={i}>
                        {items}
                    </option>
                )
            })}
        </select>
        <input type="text" onChange={(e)=>{
            dispatch(SearchHandler(e,mainData))
        }} />
        <select name="" id="" onChange={(e)=>{
            dispatch(SortingHandler(e,mainData))
        }}>
            <option value="A_Z">A-Z</option>
            <option value="Z_A">Z-A</option>
            <option value="H_L">L-H</option>
            <option value="L_H">H-L</option>
        </select>

        <br />
        <br />
        {!DummyData ? <h1>Fetching</h1>:
        DummyData.map((items,i)=>{
            return(
             <>
                <div  key={i}>
                    <Product items={items}>
                    </Product> </div>
             </>
            )
        })}
    <PageNation/>
    </div>
  )
}

export default SearchHandle