var fill=document.getElementById('fill'),st=document.getElementById('status');
var p=0,steps=[[30,'Generating sincerity…'],[62,'Remembering what I did…'],[88,'Feeling bad…'],[99,'Almost there… (it always sticks at 99%)']];
var i=0;
(function tick(){
  if(i<steps.length){fill.style.width=steps[i][0]+'%';st.textContent=steps[i][1];i++;setTimeout(tick,900);}
  else{setTimeout(function(){fill.style.width='100%';st.textContent='Done. I’m really, truly sorry.';},1400);}
})();

var mb=document.querySelectorAll('#menu button');
mb.forEach(function(b){b.addEventListener('click',function(){
  mb.forEach(function(o){o.setAttribute('aria-pressed','false')});
  b.setAttribute('aria-pressed','true');
  document.getElementById('gift').textContent=b.dataset.m;
});});

document.getElementById('signbtn').addEventListener('click',function(){
  document.getElementById('sig').textContent='Signed by, your brtoher Kittuuu...(and I mean it)';
  this.hidden=true;
});

var arena=document.getElementById('arena'),no=document.getElementById('no'),yes=document.getElementById('yes'),dodges=0;
var lines=['Nope.','Too slow.','Nice try.','Really?','You’re not even trying.'];
function dodge(e){
  if(e&&e.preventDefault)e.preventDefault();
  var a=arena.getBoundingClientRect(),b=no.getBoundingClientRect();
  var x=Math.random()*(a.width-b.width),y=Math.random()*(a.height-b.height);
  no.style.right='auto';no.style.left=x+'px';no.style.top=y+'px';
  dodges++;
  no.textContent=dodges>=5?'Okay, okay':lines[dodges%lines.length];
  if(dodges>=8){no.textContent='…I give up';}
}
no.addEventListener('pointerenter',dodge);
no.addEventListener('pointerdown',dodge);
no.addEventListener('click',function(e){e.preventDefault();});

yes.addEventListener('click',function(){
  document.getElementById('end').textContent='Yay. You’re the best. I owe you a snack.';
  no.hidden=true;
  var em=['🎉','💛','🍕','🥳','🫶'];
  for(var k=0;k<22;k++){
    var s=document.createElement('span');s.className='bit';
    s.textContent=em[k%em.length];
    s.style.left=(Math.random()*95)+'vw';
    s.style.animationDelay=(Math.random()*0.8)+'s';
    document.body.appendChild(s);
    (function(el){setTimeout(function(){el.remove()},3500)})(s);
  }
});
