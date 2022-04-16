export const hebService = {
    getItemType,
    getPrintType
}

function getItemType(type) {
    let hebType;
    switch (type) {
        case "hoodie":
            hebType = "קפוצ'ון";
            break;
        case "hoodieNoZip":
            hebType = "סווטשרט";
            break;
        case "short":
            hebType = "שרוול קצר";
            break;
        default: return;
    }
    return hebType;
}

function getPrintType(type) {
    let hebType;
    switch (type) {
        case "normal":
            hebType = "רגיל";
            break;
        case "big":
            hebType = "גדול";
            break;
        case "pocket":
            hebType = "כיס";
            break;
        default: return;
    }
    return hebType;
}