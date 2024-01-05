enum Color {
    RED = "Red",
    GREEN = "Green",
    BLUE = "Blue",
}

const getEnumElement = (color: Color): void => {
    console.log(`Tên của màu: ${color}`);
}

const redColor: Color = Color.RED
getEnumElement(redColor);

const greenColor: Color = Color.GREEN;
getEnumElement(greenColor); 

const blueColor: Color = Color.BLUE;
getEnumElement(blueColor);
