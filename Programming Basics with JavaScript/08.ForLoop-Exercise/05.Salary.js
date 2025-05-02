function solve(arr) {
  
  let n = arr[0];
  let salary = arr[1];
  let fine = 0;
  let isFineBiger = false;
  
  for (let i = 2; i < n + 2; i++) {
    switch (arr[i]) {
      case "Facebook":
        fine += 150;
        break;
      case "Instagram":
        fine += 100;
        break;
      case "Reddit":
        fine += 50;
        break;
    }
    if (fine >= salary) { 
      isFineBiger = true;
    }
  }
  if (isFineBiger) 
  console.log(`You have lost your salary.`);
  else
  console.log(salary - fine);
}