function supply(nPens, nMarkers, litreCleaningAgent, percentDiscount) {
    let pensPrice = nPens * 5.80;
    let markersPrice = nMarkers * 7.20;
    let cleaningAgentPrice = litreCleaningAgent * 1.2;
    let sum = pensPrice + markersPrice + cleaningAgentPrice;
    let allSum = sum - sum * (percentDiscount / 100)
    console.log(allSum);
  }