const progressBox=document.querySelector('.series-progress-box');
if(progressBox){
  let remainingLabel=progressBox.querySelector('.series-remaining');
  if(!remainingLabel){remainingLabel=document.createElement('span');remainingLabel.className='series-remaining';progressBox.appendChild(remainingLabel)}
  const updateRemaining=()=>{const counter=progressBox.querySelector('strong'),numbers=counter?.textContent.match(/(\d+)\s+de\s+(\d+)/i);if(!numbers)return;const watched=Number(numbers[1]),total=Number(numbers[2]),remaining=total?Math.max(0,Math.round((total-watched)/total*100)):0,text=`${remaining}% restante para terminar a série`;if(remainingLabel.textContent!==text)remainingLabel.textContent=text};
  new MutationObserver(updateRemaining).observe(progressBox,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['style']});
  updateRemaining();
}
