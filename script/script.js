let container=document.querySelector('.container')
let span_Xposition=document.querySelector('.span_Xposition')
let Xposition=document.querySelector('.Xposition')
let span_Yposition=document.querySelector('.span_Yposition')
let Yposition=document.querySelector('.Yposition')
let span_Opacity=document.querySelector('.span_Opacity')
let Opacity=document.querySelector('.Opacity')
let span_Blur=document.querySelector('.span_Blur')
let Blur=document.querySelector('.Blur')
let span_Color1=document.querySelector('.span_Color1')
let Color1=document.querySelector('.Color1')
let span_Color2=document.querySelector('.span_Color2')
let Color2=document.querySelector('.Color2')
let bold_Color1=document.querySelector('.bold_Color1')
let bold_Color2=document.querySelector('.bold_Color2')
let bold_Xposition=document.querySelector('.bold_Xposition')
let bold_Yposition=document.querySelector('.bold_Yposition')
let span_Degree=document.querySelector('.span_Degree')
let Degree=document.querySelector('.Degree')
let bold_Blur=document.querySelector('.bold_Blur')
let bold_Opacity=document.querySelector('.bold_Opacity')
let bold_Degree=document.querySelector('.bold_Degree')
let copy=document.querySelector('.copy')
let number=document.querySelector('.number')
let heart=document.querySelector('.heart')


container.style.setProperty('--Yposition',`${Yposition.value}px`);
container.style.setProperty('--Xposition',`${Xposition.value}px`);
container.style.setProperty('--Opacity',`${Opacity.value}`);
container.style.setProperty('--Blur',`${Blur.value}px`);
container.style.setProperty('--Color2',`${Color2.value}`);
container.style.setProperty('--Color1',`${Color1.value}`);
container.style.setProperty('--Degree',`${Degree.value}deg`);


Xposition.addEventListener('input',function(){
      span_Xposition.innerHTML=Xposition.value
      bold_Xposition.innerHTML=Xposition.value
      container.style.setProperty('--Xposition',`${Xposition.value}px`);
})

Yposition.addEventListener('input',function(){
      span_Yposition.innerHTML=Yposition.value
      bold_Yposition.innerHTML=Yposition.value
      container.style.setProperty('--Yposition',`${Yposition.value}px`);
})

Opacity.addEventListener('input',function(){
      span_Opacity.innerHTML=Opacity.value
      bold_Opacity.innerHTML=Opacity.value
      container.style.setProperty('--Opacity',`${Opacity.value}`);
})

Blur.addEventListener('input',function(){
      span_Blur.innerHTML=Blur.value
      bold_Blur.innerHTML=Blur.value
      container.style.setProperty('--Blur',`${Blur.value}px`);
})

Color1.addEventListener('input',function(){
      span_Color1.innerHTML=Color1.value
      bold_Color1.innerHTML=Color1.value
      container.style.setProperty('--Color1',`${Color1.value}`);
})

Color2.addEventListener('input',function(){
      span_Color2.innerHTML=Color2.value
      bold_Color2.innerHTML=Color2.value
      container.style.setProperty('--Color2',`${Color2.value}`);
})

Degree.addEventListener('input',function(){
      span_Degree.innerHTML=Degree.value
      bold_Degree.innerHTML=Degree.value
      container.style.setProperty('--Degree',`${Degree.value}deg`);
})




copy.addEventListener('click',function(){
    copy.innerHTML='Copied'
    setTimeout( ()=>{copy.innerHTML='Copy css'},1000)
    var r = document.createRange();
    r.selectNode(document.querySelector('pre'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  
      

})


function cb(response) {
    document.getElementById('visits').innerText = response.value+ '  Visits  ';
}