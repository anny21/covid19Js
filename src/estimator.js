const covid19ImpactEstimator = (data) => {
  const output = { data: {}, impact: {}, severeImpact: {} };
  output.impact.currentlyInfected = data.reportedCases * 10;
  output.severeImpact.currentlyInfected = data.reportedCases * 50;

  output.severeImpact.infectionsByRequestedTime = output.severeImpact.currentlyInfected * 512;
  output.impact.infectionsByRequestedTime = output.impact.currentlyInfected * 512;
  
   
  const myimpact1 = (15 / 100) * (output.severeImpact.infectionsByRequestedTime);
  output.severeImpact.severeCasesByRequestedTime = myimpact1;
  const myimpact2 = (15 / 100) * (output.impact.infectionsByRequestedTime);
  output.impact.severeCasesByRequestedTime = myimpact2;

  const myimpact3 = (35 / 100) * (data.totalHospitalBeds) * output.severeImpact.severeCasesByRequestedTime;
  output.severeImpact.hospitalBedsByRequestedTime = myimpact3;

  const myimpact4 = ((35 / 100) * data.totalHospitalBeds) * output.impact.severeCasesByRequestedTime;

  output.impact.hospitalBedsByRequestedTime = myimpact4; 

  const myimpact5 = (5 / 100) * output.severeImpact.infectionsByRequestedTime;

  output.severeImpact.casesForICUByRequestedTime = myimpact5;
  const myimpact6 = (2 / 100) * output.severeImpact.infectionsByRequestedTime;
  output.severeImpart.casesForVentilatorsByRequestedTime = myimpact6;

    //severeImpact.dollarsInFlight = avgDailyIncomeInUSD
};

export default covid19ImpactEstimator;
