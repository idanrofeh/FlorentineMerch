import analyze from 'rgbaster';

const printLayout = {
    short: {
        normal: {
            top: "36%",
            left: "50%",
            maxHeight: 24,
            maxWidth: 30
        },
        big: {
            top: "50%",
            left: "50%",
            maxHeight: 50,
            maxWidth: 40
        },
        pocket: {
            top: "30%",
            left: "62%",
            maxHeight: 16,
            maxWidth: 16
        }
    },
    hoodieNoZip: {
        normal: {
            top: "53%",
            left: "50%",
            maxHeight: 24,
            maxWidth: 30
        },
        big: {
            top: "50%",
            left: "50%",
            maxHeight: 40,
            maxWidth: 36
        },
        pocket: {
            top: "41%",
            left: "62%",
            maxHeight: 16,
            maxWidth: 16
        }
    },
    hoodie: {
        normal: {
            top: "53%",
            left: "50%",
            maxHeight: 24,
            maxWidth: 30
        },
        big: {
            top: "50%",
            left: "50%",
            maxHeight: 40,
            maxWidth: 36
        },
        pocket: {
            top: "41%",
            left: "62%",
            maxHeight: 16,
            maxWidth: 16
        }
    }
}

const coloredTypePrice = {
    pocket: 3,
    normal: 9,
    big: 16
}

async function getPrintPrice(print) {
    const { backPrint, frontPrint } = print;
    const printColors = await _getPrintColors(backPrint, frontPrint);
    console.log("numOfClrs: ", printColors.length)
    const printPrice = _calcPrintPrice(printColors.length, frontPrint, backPrint);
    return printPrice
}

async function _getPrintColors(backPrint, frontPrint) {
    const frontColors = await _getImgColors(frontPrint.url);
    const backColors = await _getImgColors(backPrint.url);
    const printColors = _unifyColors(backColors, frontColors);
    return printColors;
}

async function _getImgColors(url) {
    return ((url) ? await analyze(url) : []);
}

function _unifyColors(backColors, frontColors) {
    let unifiedColors = [...frontColors];
    backColors.map((backColor) => {
        if (frontColors.includes(backColor)) return;
        else unifiedColors.push(backColor);
    })
    return unifiedColors;
}

function _calcPrintPrice(numOfColors, frontPrint, backPrint) {
    let printPrice;
    if (numOfColors > 2) {
        printPrice = _getColoredPrice(frontPrint, backPrint);
    } else {
        printPrice = (numOfColors <= 1) ? 0 : 3;
    }
    return printPrice;
}

function _getColoredPrice(frontPrint, backPrint) {
    let printPrice = 0;
    if (frontPrint.url) printPrice += coloredTypePrice[frontPrint.type];
    if (backPrint.url) printPrice += coloredTypePrice[backPrint.type];
    return printPrice;
}

export const printData = {
    printLayout,
    getPrintPrice
}