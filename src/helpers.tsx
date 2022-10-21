export function dateText(startDate: any, endDate: any){
    // TODO: create date comparision 
    return "custom date";
}

export function stripText(text: string, length: number){
    let str = text;
    let strip = (str.length > length) ? 
                    str.substr(0, length-1) + '&hellip;' : str;
    return {__html: strip};
}

export function decodeString(string: string){
    return {__html: string};
}