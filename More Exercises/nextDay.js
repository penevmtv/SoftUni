function solve(year, month, day) {
    let inputDate = new Date(year, month, day);
    let outputDate = new Date(year, month - 1, day + 1);
    let newDateYear = outputDate.getFullYear();
    let newDateMonth = outputDate.getMonth() + 1;
    let newDateDay = outputDate.getDate();
    console.log(`${newDateYear}-${newDateMonth}-${newDateDay}`); 
}