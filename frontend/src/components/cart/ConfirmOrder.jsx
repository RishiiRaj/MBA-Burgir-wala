import React from 'react'

const ConfirmOrder = () => {
  return (
    <section className='confirmOrder'>
        <main>
            <h1>    
                Confirm Order 
            </h1>
            <form action="">
                <div>
                    <label htmlFor="">Cash On Delivery</label>
                    <input type="radio" name='payment' />
                </div>
                <div>
                    <label htmlFor="">Online</label>
                    <input type="radio" name='payment' />
                </div>
                <button type='submit'>place order</button>
            </form>
        </main>
    </section>
  )
}

export default ConfirmOrder