

export function secToMin(sec:number){
    return (sec/60).toFixed();
}


export function formatSec(sec:number): string{
    const _min = Math.floor(sec/60);
    const _sec = sec %60;

    const _minText = `${_min} min`;
    const connector = "and";
    const _secText = `${_sec} sec`

    const timeSentance = [];
    
    if(_min>0)timeSentance.push(_minText);
    if(_min>0 && _sec>0)timeSentance.push(connector)
    if(_sec>0) timeSentance.push(_secText);
    
    return timeSentance.join(" ");
}