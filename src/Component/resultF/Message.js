import React , {Component} from 'react';

const Message =({la})=> {

	return(
		<div>
		<blockquote>{
			la<4?<div className=' ba b--solid fl w-50 bw1 b--lightest-blue bg-washed-blue ma7 ph3'>
			<p className="fw9"> 
 			Bad Luck
 			</p>
<footer>— Learned Man</footer>
</div>:
la<7?
<div className=' ba b--solid fl w-50 bw1 b--lightest-blue bg-washed-blue ma7 ph3'>
<p className="fw9"> 
  Good Luck</p>
<footer>— Learned Man</footer>
</div>
:
<div className=' ba b--solid fl w-50 bw1 b--lightest-blue bg-washed-blue ma7 ph3'>
<p class="fw9">Extremely Lucky 
  </p>
<footer>— Learned Man</footer>
</div>
}

</blockquote>

		</div>
		)
}

export default Message;