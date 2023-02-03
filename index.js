// code your solution here
function superbowlWin(record){
    const result = record.find((obj)=>obj.result ==='W')
    return result !== undefined ? result.year : undefined;
}