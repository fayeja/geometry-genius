// Triangle area calculation and display
let serial = 0;
document.getElementById('triangle-calculate').addEventListener('click', function () {
    serial += 1;
    const area = CalculateValue('triangle-base', 'triangle-height');

    //console.log(typeof(area));
    
    if(typeof(area)==="string"){
        const pd = getData("first-name");
        displayData(pd.productName, area);
    }
  
})

// Rectangle area calculation and display

document.getElementById('rectangle-calculate').addEventListener('click', function () {
    serial += 1;
    const area =secondAreavalue('rectangle-width', 'rectangle-length');

    if(typeof(area)==="string"){
        const pd = getData("second-name");
        displayData(pd.productName, area);
    }
})

// Parallelogram area calculation and display
document.getElementById('parallelogram-calculate').addEventListener('click', function () {
    serial += 1;
    const area=secondAreaInnerText('parallelogram-b', 'parallelogram-h');

    const pd = getData("third-name");
    displayData(pd.productName, area);
})

// Rhombus area calculation and display

document.getElementById('rhombus-calculate').addEventListener('click', function () {
    serial += 1;
    const area =CalculateInnerText('rhombus-d1', 'rhombus-d2');
    
    console.log(area);
    const pd = getData("forth-name");
    displayData(pd.productName, area);
})

// Pentagon area calculation and display
document.getElementById('pentagon-calculate').addEventListener('click', function () {
    serial += 1;
    const area=CalculateInnerText('pentagon-p', 'pentagon-b');

    const pd = getData("fifth-name");
    displayData(pd.productName, area);
})

// Ellipse area calculation and display

document.getElementById('ellipse-calculate').addEventListener('click', function () {
    serial += 1;
    const area=thirdAreaInnerText('ellipse-a', 'ellipse-b');

    const pd = getData("sixth-name");
    displayData(pd.productName, area);
})
 
// Display data to screen
function displayData(nameOfP, areaOfP) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${nameOfP}</td>
      <td>${areaOfP}cm<sup>2</sup></td>
      <td>
      <button class="w-full px-3 py-2 rounded-lg text-white bg-sky-600">Covert to m<sup>2</sup></button>
      </td>    
    `;
    container.appendChild(tr);
}

// get data from input to display
function getData(id1) {
    // get the data from htm using id
    const productName = document.getElementById(id1).innerText;

    const pd = {
        productName: productName
    };

    return pd;
}