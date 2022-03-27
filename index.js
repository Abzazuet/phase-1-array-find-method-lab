const didWin = element => element['result']=='W';

function superbowlWin(arr){
    let win = arr.find(didWin);
    if(win==undefined){
        return undefined;
    }
    else{
        return win['year'];
    }
}
