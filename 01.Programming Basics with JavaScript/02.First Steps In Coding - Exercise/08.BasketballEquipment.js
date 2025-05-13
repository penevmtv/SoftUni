function basketball(fee) {
  let sneakers = fee * 0.6;
  let wear = sneakers * 0.8;
  let ball = wear / 4;
  let others = ball / 5;

  let costs = fee + sneakers + wear + ball + others;
  console.log(costs);
}