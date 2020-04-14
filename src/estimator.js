const covid19ImpactEstimator = (data) => {
  const output = { data: {}, impact: {}, severeImpact: {} };
  output.impact.currentlyInfected = data.reportedCases * 10;
  output.severeImpact.currentlyInfected = data.reportedCases * 50;

  output.severeImpact.infectionsByRequestedTime = output.severeImpact.currentlyInfected * 512;

  output.impact.infectionsByRequestedTime = output.impact.currentlyInfected * 512;

  const mpact1 = (15 / 100) * (output.severeImpact.infectionsByRequestedTime);

  output.severeImpact.severeCasesByRequestedTime = mpact1;

  const mpact2 = (15 / 100) * (output.impact.infectionsByRequestedTime);
  output.impact.severeCasesByRequestedTime = mpact2;

  const a = output.severeImpact.severeCasesByRequestedTime;
  const mpact3 = (35 / 100) * (data.totalHospitalBeds) * a;
  output.severeImpact.hospitalBedsByRequestedTime = mpact3;
  const b = output.impact.severeCasesByRequestedTime;
  const mpact4 = ((35 / 100) * data.totalHospitalBeds) * b;
  output.impact.hospitalBedsByRequestedTime = mpact4;
  const mpact5 = (5 / 100) * output.severeImpact.infectionsByRequestedTime;
  output.severeImpact.casesForICUByRequestedTime = mpact5;
  const mpact6 = (2 / 100) * output.severeImpact.infectionsByRequestedTime;
  output.severeImpart.casesForVentilatorsByRequestedTime = mpact6;
};

export default covid19ImpactEstimator;
