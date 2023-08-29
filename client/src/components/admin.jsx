import { useState, useEffect } from 'react'
import axios from 'axios';

// Components
import Header from './header';
import Resume from './resume';
import Form from './form';
import AddCategory from "./addCategory";

function Admin(props) {
  const products = props.products
  const categories = props.categories

return (
  <>

    <section className='flex flex-col gap-10 p-10 relative'>
      <Header />
      <section className='flex flex-row h-full gap-10'>
        <div className='w-full h-full bg-slate-50 rounded p-5 '>
          <Resume products={products} categories={categories} />
        </div>
      </section>
      <div className='fixed bottom-0 right-0 w-1/2 hidden' id="addProductDiv">
        <Form categories={props.categories} title={'Aggiungi nuovo'}/>
        <AddCategory categories={props.categories}/>
       </div>
    </section>
    
  </>
)

}

export default Admin
