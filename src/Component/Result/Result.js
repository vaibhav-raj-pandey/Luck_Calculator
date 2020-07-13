import React , {Component} from 'react';
import './Result.css';

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

const Result =({onClickChange , attempts, variable,num,la,wa})=> {
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
      <p className='navy ttu helvetica tc h-30  f4 mh5'>{variable}</p>
     </div>

    { num ===1?
     <div className='pv4 mv4 pa3'>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib  fl w-20 pa2 tc br4 green" onClick={()=>onClickChange('ans1')}>{variable}</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 mh6 tc br4"  onClick={()=>onClickChange('ans')}>{between(0,variable-1)}</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4"  onClick={()=>onClickChange('ans')}>{between(variable+1,100)}</a>
     </div>
   :num===2?
     <div className='pv4 mv4 pa3'>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4 " onClick={()=>onClickChange('ans1')}>{between(0,variable-1)}</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib  fl w-20 pa2 mh6 tc br4 green"  onClick={()=>onClickChange('ans')}>{variable}</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4"  onClick={()=>onClickChange('ans')}>{between(variable+1,100)}</a>
 
     </div>
   :num===3?
     <div className='pv4 mv4 pa3'>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4 " onClick={()=>onClickChange('ans')}>{between(0,variable-1)}</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 mh6 tc br4"  onClick={()=>onClickChange('ans1')}>{between(variable+1,100)}</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib  fl w-20 pa2 tc br4 green"  onClick={()=>onClickChange('ans')}>{variable}</a>
     </div>
   :
   <div className='pv4 mv4 pa3'>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 tc br4 " onClick={()=>onClickChange('ans')}>{between(0,variable-1)}</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib light-blue fl w-20 pa2 mh6 tc br4"  onClick={()=>onClickChange('ans')}>{between(variable+1,100)}</a>
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib fl w-20 pa2 tc br4 green"  onClick={()=>onClickChange('ans1')}>{variable}</a>
     </div>

}
     <a class="f6 link dim ba bw1 ph3 pv3 mb2 dib dark-blue fl w-20 pa2 tc br4 fl w-30 pa2 tc mh7" onClick={()=>onClickChange('idle')}>Try Again</a>


    </div>
</div>
    );
}


export default Result;
