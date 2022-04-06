export const hebService = {
    getItemType,
}

function getItemType(type) {
    let hebType;
    switch (type) {
        case "hoodie":
            hebType = "קפוצ'ון";
            break;
        case "long":
            hebType = "שרוול ארוך";
            break;
        case "short":
            hebType = "שרוול קצר";
            break;
        default: return;
    }
    return hebType;
}