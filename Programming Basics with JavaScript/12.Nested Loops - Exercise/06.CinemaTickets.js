function solve(arr) {
  let studentTickets = 0;
  let standardTickets = 0;
  let kidTickets = 0;
  let index = 0;
  while (arr[index] !== `Finish`) {
    let movieName = arr[index];
    let freeSeats = Number(arr[index + 1]);
    index += 2;
    let ticketsCounter = 0;
    while (arr[index] !== `End`) {
      let typeTickets = arr[index];
      switch (typeTickets) {
        case `student`:
          studentTickets++;
          break;
        case `standard`:
          standardTickets++;
          break;
        case `kid`:
          kidTickets++;
          break;
      }
      ticketsCounter++;
      if (ticketsCounter === freeSeats) {
        break;
      }
      index++;
    }
    index++;
    let percentFull = (ticketsCounter / freeSeats) * 100;
    console.log(`${movieName} - ${percentFull.toFixed(2)}% full. `);
  }
  let totalTickets = studentTickets + standardTickets + kidTickets;
  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
  console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
  console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}