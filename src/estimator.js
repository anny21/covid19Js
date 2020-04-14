const covid19ImpactEstimator = (data) => {
    let output = {data:{}, impact:{}, severeImpact:{}};
    impact.currentlyInfected = data.reportedCases * 10;
    severeImpact.currentlyInfected = data.reportedCases * 50;

    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;
    impact.infectionsByRequestedTime  = impact.currentlyInfected * 512;

    severeImpact.severeCasesByRequestedTime = 15 / 100 * severeImpact.infectionsByRequestedTime;
    impact.severeCasesByRequestedTime = 15 / 100 * impact.infectionsByRequestedTime;

    severeImpact.hospitalBedsByRequestedTime = (35 / 100 * data.totalHospitalBeds) * severeImpact.severeCasesByRequestedTime;
    impact.hospitalBedsByRequestedTime = (35 / 100 * data.totalHospitalBeds) * impact.severeCasesByRequestedTime;


    severeImpact.casesForICUByRequestedTime = 5 / 100 * severeImpact.infectionsByRequestedTime;
    severeImpart.casesForVentilatorsByRequestedTime = 2/100 * severeImpact.infectionsByRequestedTime;

    //severeImpact.dollarsInFlight = avgDailyIncomeInUSD
};

export default covid19ImpactEstimator;
