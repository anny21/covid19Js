const covid19ImpactEstimator = (data) => {
  const output = { data:{}, impact:{}, severeImpact:{} };
    output.impact.currentlyInfected = data.reportedCases * 10;
    output.severeImpact.currentlyInfected = data.reportedCases * 50;

    output.severeImpact.infectionsByRequestedTime = output.severeImpact.currentlyInfected * 512;
    output.impact.infectionsByRequestedTime  = output.impact.currentlyInfected * 512;

    output.severeImpact.severeCasesByRequestedTime = (15 / 100) * (output.severeImpact.infectionsByRequestedTime);
    output.impact.severeCasesByRequestedTime = (15 / 100) * (output.impact.infectionsByRequestedTime);

    output.severeImpact.hospitalBedsByRequestedTime = (35 / 100) * (data.totalHospitalBeds) * output.severeImpact.severeCasesByRequestedTime;
    output.impact.hospitalBedsByRequestedTime = ((35 / 100) * data.totalHospitalBeds) * output.impact.severeCasesByRequestedTime;


    output.severeImpact.casesForICUByRequestedTime = (5 / 100) * output.severeImpact.infectionsByRequestedTime;
    output.severeImpart.casesForVentilatorsByRequestedTime = (2/100) * output.severeImpact.infectionsByRequestedTime;

    //severeImpact.dollarsInFlight = avgDailyIncomeInUSD
};

export default covid19ImpactEstimator;
