// calculate inner-text of rhombus and pentagon

function CalculateInnerText(base,height){
    const Base=document.getElementById(base);
    const BaseString=Base.innerText;
    const BaseFloat=parseFloat(BaseString);
    
    const Height=document.getElementById(height);
    const HeightString=Height.innerText;
    const HeightFloat=parseFloat(HeightString);
    return Area(BaseFloat,HeightFloat);
}

// calculate value for triangle

function CalculateValue(base,height){
    const Base=document.getElementById(base);
    const BaseString=Base.value;
    const BaseFloat=parseFloat(BaseString);
    Base.value='';
    
    const Height=document.getElementById(height);
    const HeightString=Height.value;
    const HeightFloat=parseFloat(HeightString);
    Height.value='';

    if (isNaN(BaseFloat)||isNaN(HeightFloat)||BaseFloat === ""||HeightFloat === ""||BaseFloat <= 0 ||HeightFloat <= 0) {
        return alert("Please Enter Any Valid Number");
        
    }
      
    return Area(BaseFloat,HeightFloat);
}

// calculate area triangle,rhombus and pentagon

function Area(BaseFloat,HeightFloat){  
    const area=(0.5*BaseFloat*HeightFloat).toFixed(2);
    //console.log(area);
    return area;
}

// calculate inner-text of parallelogram
function secondAreaInnerText(Width,Length){
    const width=document.getElementById(Width);
    const widthString=width.innerText;
    const widthFloat=parseFloat(widthString);
    
    const length=document.getElementById(Length);
    const lengthString=length.innerText;
    const lengthFloat=parseFloat(lengthString);
    
    return SecondArea(widthFloat,lengthFloat);
}

// calculate value of rectangle
function secondAreavalue(Width,Length){
    const width=document.getElementById(Width);
    const widthString=width.value;
    const widthFloat=parseFloat(widthString);
    width.value='';
    
    const length=document.getElementById(Length);
    const lengthString=length.value;
    const lengthFloat=parseFloat(lengthString);
    length.value='';

    if (isNaN(widthFloat)||isNaN(lengthFloat)||widthFloat === ""||lengthFloat === ""||widthFloat <= 0 ||lengthFloat <= 0) {
        return alert("Please Enter Any Valid Number");
        
    }
    
    return SecondArea(widthFloat,lengthFloat);
}
function SecondArea(widthFloat,lengthFloat){
    const area=(widthFloat*lengthFloat).toFixed(2);
    // console.log(area);
    return area;
}


// calculate value and area of ellipse

function thirdAreaInnerText(Width,Length){
    const width=document.getElementById(Width);
    const widthString=width.innerText;
    const widthFloat=parseFloat(widthString);
    
    const length=document.getElementById(Length);
    const lengthString=length.innerText;
    const lengthFloat=parseFloat(lengthString);
    
    const area=(3.1416*widthFloat*lengthFloat).toFixed(2);
    //console.log(area);
    return area;
}


// Random background color generate of the shape of Geometry

document.getElementById('triangle').addEventListener('mouseenter',function(){
   random_bg_color('triangle');
})
document.getElementById('rectangle').addEventListener('mouseenter',function(){
   random_bg_color('rectangle');
})
document.getElementById('parallelogram').addEventListener('mouseenter',function(){
   random_bg_color('parallelogram');
})
document.getElementById('rhombus').addEventListener('mouseenter',function(){
   random_bg_color('rhombus');
})
document.getElementById('pentagon').addEventListener('mouseenter',function(){
   random_bg_color('pentagon');
})
document.getElementById('ellipse').addEventListener('mouseenter',function(){
   random_bg_color('ellipse');
})

function random_bg_color(shape) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    const card=document.getElementById(shape);
    card.style.background = bgColor;
    }

