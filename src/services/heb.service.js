export const hebService = {
    getItemType,
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