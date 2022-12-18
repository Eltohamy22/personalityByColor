const blueColor = 'People who gravitate toward the color blue are charming, friendly, and emotional';
const redColor = 'Lovers of red are overall positive, loving people';
const pinkColor = 'Those who have a favorite color of pink are rather sensitive';
const greenColor = 'People who love green are loyal and supportive';
const orangeColor = 'Those who adore a bright orange color are seen as warm and inviting';
const yellowColor = 'Those who admire yellow are upbeat, good-natured, and a breath of fresh air';
const blackColor = 'People who prefer black have a flair for entrepreneurship and they’re a natural at commanding an audience';
const grayColor = 'Gray is believed to be a peculiar color, which is why those who like it are a little odd themselves';
const whiteColor = 'People who fancy white have strong convictions';
const brownColor = 'If you consider yourself a brown enthusiast, you’re a person of impressive patience';
const purpleColor = 'Those who love purple are intriguing, lovely, and down to earth';
const aquaColor = 'Those who favor turquoise and aqua are courteous, and they’re most prominently known for their empathetic disposition';

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const pink = document.querySelector('.pink');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const yellow = document.querySelector('.yellow');
const black = document.querySelector('.black');
const gray = document.querySelector('.gray');
const white = document.querySelector('.white');
const brown = document.querySelector('.brown');
const purple = document.querySelector('.purple');
const aqua = document.querySelector('.aqua');

blue.addEventListener('click', function (){
document.querySelector('p').textContent = blueColor;
document.querySelector('p').style.color = 'blue';
document.querySelector(".personality").style.backgroundColor = "black";
});
red.addEventListener('click', function (){
document.querySelector('p').textContent = redColor;
document.querySelector("p").style.color = "red";
document.querySelector(".personality").style.backgroundColor = "black";
});
pink.addEventListener('click', function (){
document.querySelector('p').textContent = pinkColor;
document.querySelector("p").style.color = "pink";
document.querySelector(".personality").style.backgroundColor = "black";
});
green.addEventListener('click', function (){
document.querySelector('p').textContent = greenColor;
document.querySelector("p").style.color = "green";
document.querySelector(".personality").style.backgroundColor = "black";
});
orange.addEventListener('click', function (){
document.querySelector('p').textContent = orangeColor;
document.querySelector("p").style.color = "orange";
document.querySelector(".personality").style.backgroundColor = "black";
});
yellow.addEventListener('click', function (){
document.querySelector('p').textContent = yellowColor;
document.querySelector("p").style.color = "yellow";
document.querySelector(".personality").style.backgroundColor = "black";
});
black.addEventListener('click', function (){
document.querySelector('p').textContent = blackColor;
document.querySelector("p").style.color = "black";
document.querySelector(".personality").style.backgroundColor = "white";
});
gray.addEventListener('click', function (){
document.querySelector('p').textContent = grayColor;
document.querySelector("p").style.color = "gray";
document.querySelector(".personality").style.backgroundColor = "black";

});
white.addEventListener('click', function (){
document.querySelector('p').textContent = whiteColor;
document.querySelector("p").style.color = "white";
});
brown.addEventListener('click', function (){
document.querySelector('p').textContent = brownColor;
document.querySelector("p").style.color = "brown";
});
purple.addEventListener('click', function (){
document.querySelector('p').textContent = purpleColor;
document.querySelector("p").style.color = "purple";
document.querySelector(".personality").style.backgroundColor = "black";
});
aqua.addEventListener('click', function (){
document.querySelector('p').textContent = aquaColor;
document.querySelector("p").style.color = "aqua";
document.querySelector(".personality").style.backgroundColor = "black";
});