import React , {Component} from 'react';
import './Box.css';

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}


const Box =({onClickChange, attempts,variable, la, wa})=> {


  return (

    <div >

    <div className=' ba b--solid fl w-50 bw1 b--lightest-blue bg-washed-blue ma7 ph3'>

    <p className='navy ttu helvetica tc h-30 '>LUCK CALCULATOR</p> 
    <hr className='bw0.5 b--solid b--lightest-blue'/>
    <div className='fl w-50 pa2'>
    <p className='navy ttu helvetica tl h-30  f7 mh5 '>ATTEMPTS:{attempts}/10</p>
    </div>
    <div className='fl w-50 pa2'>
    <p className='navy ttu helvetica tr h-30  f7 mh5'>LUCKY ATTEMPTS:{la}/10</p>
    <p className='navy ttu helvetica tr h-30  f7 mh5'>WRONG ATTEMPTS:{wa}/10</p>
    </div>
    
     <div>
      <p className='navy ttu helvetica tc h-30  f4 mh5 mn' id='mn'>{variable}</p>
        </div>
      { between(1,3) ===1?
     <div className='pv4 mv4 pa3'>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib  fl w-20 pa2 tc br4 light-blue" onClick={()=>onClickChange('ansa1')}>?</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 mh6 tc br4"  onClick={()=>onClickChange('ansa')}>?</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4"  onClick={()=>onClickChange('ansa')}>?</a>
     </div>
   :between(1,3)===2?
     <div className='pv4 mv4 pa3'>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4 " onClick={()=>onClickChange('ansb')}>?</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib  fl w-20 pa2 mh6 tc br4 light-blue"  onClick={()=>onClickChange('ansb1')}>?</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4"  onClick={()=>onClickChange('ansb')}>?</a>
 
     </div>
   :between(1,3)===3?
     <div className='pv4 mv4 pa3'>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4 " onClick={()=>onClickChange('ansc')}>?</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 mh6 tc br4"  onClick={()=>onClickChange('ansc')}>?</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib  fl w-20 pa2 tc br4 light-blue"  onClick={()=>onClickChange('ansc1')}>?</a>
     </div>
   :
   <div className='pv4 mv4 pa3'>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4 " onClick={()=>onClickChange('ansc')}>?</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 mh6 tc br4"  onClick={()=>onClickChange('ansc')}>?</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib fl w-20 pa2 tc br4 light-blue "  onClick={()=>onClickChange('ansc1')}>?</a>
     </div>

}

  </div>
</div>
    );
}

export default Box;
