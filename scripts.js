console.log("wheel of fortune");

function vowelFinder(string){
    let vowelList = 'aeiou';
    let vowelCount = 0;
  
  for(let i = 0; i < string.length ; i++)
  {
    if (vowelList.indexOf(string[i].toLowerCase()) !== -1)
    {
      vowelCount += 1;
    }
  
  }
  return vowelCount;
}

console.log(vowelFinder("How nOw brOwn cOw mOoOoOoO"));