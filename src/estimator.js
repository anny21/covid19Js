const timeInDays = (time, period) => {
  if (period === 'days') {
    Math.trunc(2 ** ((time * 7) / 3));
  } else if (period === 'weeks') {
    Math.trunc(2 ** ((time * 7) / 3));
  } else {
    period = "months";
    Math.trunc(2 ** ((time * 30) / 3));
  }
}






const covid19ImpactEstimator = (data) => {
  const estimate = { data: data, impact: {}, severeImpact: {}}
  const {
  periodType,
  timeToElapse,
  reportedCases,
  region
  } = data;
  const time = timeInDays(timeToElapse, periodType);
  estimate.impact.currentlyInfected = reportedCases * 10;
  estimate.severeImpact.currentlyInfected = reportedCases * 50;
  const x = estimate.impact.currentlyInfected;
  const y = estimate.severeImpact.currentlyInfected;
  estimate.impact.infectionsByRequestedTime = x * 2 ** parseInt(time / 3, 10);
  const z = y * 2 ** parseInt(time / 3, 10);
  estimate.severeImpact.infectionsByRequestedTime = z;

  return estimate;
};

export default covid19ImpactEstimator;
