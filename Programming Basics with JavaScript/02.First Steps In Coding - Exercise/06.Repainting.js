function repainting(nylonM2, paintLr, agentLr, hours) {
    let priceForNylon = nylonM2 * 1.5;
    let priceForPaint = paintLr * 14.50;
    let priceForAgent = agentLr * 5;
    let extraCosts = priceForPaint * 0.1 + 3 + 0.4;
    let sumMaterials = priceForNylon + priceForPaint + priceForAgent + extraCosts;
    let sumMasterPerHour = 0.3 * sumMaterials;
    console.log(sumMaterials + sumMasterPerHour * hours);
  }