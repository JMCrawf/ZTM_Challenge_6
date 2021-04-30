// converts RGB to Hex and vice versa
const converter = (param) => {
    /* if the argument supplied starts with '#' assume its a hex value to be 
    converted (the if part) */
    if (param.includes('#')) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(param);
        // get rid of first element in array
        result.shift();

        // convert matches to RGB values in an array
        const rgb = result.map(item => {
            return parseInt(item, 16);
        });
        // print RGB
        console.log(`RGB Value: ${rgb[0]}, ${rgb[1]}, ${rgb[2]}`);

    }
    // if the input is RGB
    else {
        // hexArray splits the code into 3 array positions 
        const hexArray = param.split(", ").map(item => {
            hexNum = parseInt(item, 10).toString(16);
            return hexNum.length == 1 ? "0" + hexNum : hexNum;
        });
        // output the hex with appropriate symbol
        console.log(`Hex Value: #${hexArray[0]}${hexArray[1]}${hexArray[2]}`);
    }
}
// these simply convert each to the opposite value
converter("255, 2, 155");
converter("#FF029B");