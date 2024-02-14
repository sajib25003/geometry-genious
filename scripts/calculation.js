function calculateRectangleArea(){
    const rectangleLength = getInputValueById('rectangle-length');
    console.log('lenth of the rectangle is ', rectangleLength);

    const rectangleWidth = getInputValueById("rectangle-width");
    console.log('width of the rectangle is ',rectangleWidth)

    const rectangleArea = rectangleLength * rectangleWidth;
    console.log('area of the rectangle is ', rectangleArea);

    setInnerTextById('rectangle-area', rectangleArea)
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

function setInnerTextById(elementId, result){
    const element = document.getElementById(elementId);
    element.innerText = result;
}