// JavaScript Document
//名师滚动
var speed=30; //数字越大速度越慢 
var tab=document.getElementById("demo_1"); 
var tab1=document.getElementById("demo1"); 
var tab2=document.getElementById("demo2"); 
tab2.innerHTML=tab1.innerHTML; 
function Marquee(){ 
if(tab2.offsetWidth-tab.scrollLeft<=0) 
tab.scrollLeft-=tab1.offsetWidth 
else{ 
tab.scrollLeft++; 
} 
} 
var MyMar=setInterval(Marquee,speed); 
tab.onmouseover=function() {clearInterval(MyMar)}; 
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)}; 

var speed2=30; //数字越大速度越慢 
var tabb=document.getElementById("demo_2"); 
var tabb1=document.getElementById("demo3"); 
var tabb2=document.getElementById("demo4"); 
tabb2.innerHTML=tabb1.innerHTML; 
function Marquee2(){ 
if(tabb2.offsetWidth-tabb.scrollLeft<=0) 
tabb.scrollLeft-=tabb1.offsetWidth 
else{ 
tabb.scrollLeft++; 
} 
} 
var MyMar2=setInterval(Marquee2,speed2); 
tabb.onmouseover=function() {clearInterval(MyMar2)}; 
tabb.onmouseout=function() {MyMar2=setInterval(Marquee2,speed2)};  

var speed3=30; //数字越大速度越慢 
var tabbb=document.getElementById("demo_3"); 
var tabbb1=document.getElementById("demo5"); 
var tabbb2=document.getElementById("demo6"); 
tabbb2.innerHTML=tabbb1.innerHTML; 
function Marquee3(){ 
if(tabbb2.offsetWidth-tabbb.scrollLeft<=0) 
tabbb.scrollLeft-=tabbb1.offsetWidth 
else{ 
tabbb.scrollLeft++; 
} 
} 
var MyMar3=setInterval(Marquee3,speed3); 
tabbb.onmouseover=function() {clearInterval(MyMar3)}; 
tabbb.onmouseout=function() {MyMar3=setInterval(Marquee3,speed3)};  