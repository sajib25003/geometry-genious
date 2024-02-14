function areaCalculate(){
    // base value of the triangle
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const triangleBaseValue = parseFloat(triangleBaseText);
    console.log('Base of the triangle is ',triangleBaseValue, 'cm')

    // height value of the triangle
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const triangleHeightValue = parseFloat(triangleHeightText);
    console.log('Height of the triangle is ', triangleHeightValue, 'cm')

    // Calculating Area of the triangle
    const triangleArea = 0.5 *  triangleBaseValue * triangleHeightValue;
    console.log('Area of the triangle is ', triangleArea, 'sq. cm.')

    // display triangle area
    const displayTriangleArea = document.getElementById('triangle-area');
    displayTriangleArea.innerText = triangleArea

}