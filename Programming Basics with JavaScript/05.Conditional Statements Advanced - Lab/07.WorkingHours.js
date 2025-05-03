function solve(hour, day) {
    let isOpen = false;
    if (hour > 9 && hour < 18) {
      switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
          isOpen = true;
          break;
      }
    }
    if (isOpen) 
    console.log("open");
    else
    console.log("closed");
  }