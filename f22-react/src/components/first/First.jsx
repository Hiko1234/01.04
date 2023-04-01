import React from 'react'
// import custom modules
import { Calculator } from '../../modules/Calculator';

export const First = () => {
    const calc = new Calculator();
    const SOME_TEXT = 'Hello world';
    function calcTwoNumbers(a, b){
        return a + b;
    } 
    const arrayNumber = [1, 3, 2, 5];
    arrayNumber.map((el)=>{
        console.log(el);
    })
    return (
        <div className='wrapper'>
            <h2>Test Component</h2>
            <div>
                <p>{SOME_TEXT}</p>
                <p>{calc.sum(3, 2)}</p>
            </div>
            <h2>gegw</h2>
            <p>{calcTwoNumbers(2, 4)}</p>
            <div>
                {
                    arrayNumber.map((el)=>{
                        return (
                            <p key={el}>{el}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default First