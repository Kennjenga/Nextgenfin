"use client";

import React, { useState } from "react";

const KenyanTaxCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [hasNhif, setHasNhif] = useState(true);
  const [hasNssf, setHasNssf] = useState(true);
  const [includeHousingLevy, setIncludeHousingLevy] = useState(true);

  // Calculate PAYE (Income Tax)
  const calculatePaye = (income) => {
    // Kenyan tax brackets (2023) - Monthly rates
    const brackets = [
      { max: 24000, rate: 0.1 },
      { max: 32333, rate: 0.25 },
      { max: 500000, rate: 0.3 },
      { max: 800000, rate: 0.32 },
      { max: Infinity, rate: 0.35 },
    ];

    // Personal relief (monthly)
    const personalRelief = 2400; // Annual 28,800 / 12

    let tax = 0;
    let remainingIncome = income;
    let previousMax = 0;

    for (const bracket of brackets) {
      if (remainingIncome <= 0) break;

      const taxableInThisBracket = Math.min(
        remainingIncome,
        bracket.max - previousMax
      );
      tax += taxableInThisBracket * bracket.rate;

      remainingIncome -= taxableInThisBracket;
      previousMax = bracket.max;
    }

    // Apply personal relief
    tax = Math.max(0, tax - personalRelief);

    return tax;
  };

  // Calculate NHIF (National Hospital Insurance Fund)
  const calculateNhif = (income) => {
    if (!hasNhif) return 0;

    const nhifRates = [
      { max: 5999, amount: 150 },
      { max: 7999, amount: 300 },
      { max: 11999, amount: 400 },
      { max: 14999, amount: 500 },
      { max: 19999, amount: 600 },
      { max: 24999, amount: 750 },
      { max: 29999, amount: 850 },
      { max: 34999, amount: 900 },
      { max: 39999, amount: 950 },
      { max: 44999, amount: 1000 },
      { max: 49999, amount: 1100 },
      { max: 59999, amount: 1200 },
      { max: 69999, amount: 1300 },
      { max: 79999, amount: 1400 },
      { max: 89999, amount: 1500 },
      { max: 99999, amount: 1600 },
      { max: Infinity, amount: 1700 },
    ];

    for (const rate of nhifRates) {
      if (income <= rate.max) {
        return rate.amount;
      }
    }

    return 1700; // Maximum NHIF contribution
  };

  // Calculate NSSF (National Social Security Fund) - New Rates
  const calculateNssf = (income) => {
    if (!hasNssf) return 0;

    // NSSF rate is 6% of income up to a maximum of 6,000 (Tier 1 + Tier 2)
    // Tier 1: 6% of income up to KES 6,000 (income up to KES 100,000)
    // Tier 2: 6% of income between KES 6,001 and KES 18,000
    // We'll implement the current simpler system

    const nssfRate = 0.06;
    const nssfMaxContribution = 1080; // 6% of KES 18,000 (Tier 1 ceiling of KES 18,000)

    return Math.min(income * nssfRate, nssfMaxContribution);
  };

  // Calculate Housing Levy (1.5% of gross pay)
  const calculateHousingLevy = (income) => {
    if (!includeHousingLevy) return 0;
    return income * 0.015;
  };

  // Total calculations
  const paye = calculatePaye(monthlyIncome);
  const nhif = calculateNhif(monthlyIncome);
  const nssf = calculateNssf(monthlyIncome);
  const housingLevy = calculateHousingLevy(monthlyIncome);

  const totalDeductions = paye + nhif + nssf + housingLevy;
  const netPay = monthlyIncome - totalDeductions;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Kenyan Tax Calculator
      </h2>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">
          Monthly Gross Income (KES)
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <label className="flex items-center text-gray-700">
          <input
            type="checkbox"
            checked={hasNhif}
            onChange={() => setHasNhif(!hasNhif)}
            className="mr-2"
          />
          Include NHIF
        </label>

        <label className="flex items-center text-gray-700">
          <input
            type="checkbox"
            checked={hasNssf}
            onChange={() => setHasNssf(!hasNssf)}
            className="mr-2"
          />
          Include NSSF
        </label>

        <label className="flex items-center text-gray-700">
          <input
            type="checkbox"
            checked={includeHousingLevy}
            onChange={() => setIncludeHousingLevy(!includeHousingLevy)}
            className="mr-2"
          />
          Include Housing Levy (1.5%)
        </label>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-4 text-gray-800">
          Tax Breakdown
        </h3>

        <div className="grid grid-cols-2 gap-2">
          <div className="text-gray-600">Gross Income:</div>
          <div className="font-medium text-right">
            KES {monthlyIncome.toLocaleString()}
          </div>

          <div className="text-gray-600">PAYE (Income Tax):</div>
          <div className="font-medium text-right">
            KES {paye.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>

          <div className="text-gray-600">NHIF:</div>
          <div className="font-medium text-right">
            KES {nhif.toLocaleString()}
          </div>

          <div className="text-gray-600">NSSF:</div>
          <div className="font-medium text-right">
            KES {nssf.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>

          <div className="text-gray-600">Housing Levy (1.5%):</div>
          <div className="font-medium text-right">
            KES{" "}
            {housingLevy.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </div>

          <div className="h-px bg-gray-300 col-span-2 my-2"></div>

          <div className="text-gray-600 font-medium">Total Deductions:</div>
          <div className="font-medium text-right text-red-600">
            KES{" "}
            {totalDeductions.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </div>

          <div className="text-gray-800 font-bold">Net Pay:</div>
          <div className="font-bold text-right text-green-600">
            KES {netPay.toLocaleString(undefined, { maximumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          Note: This calculator provides an estimate based on standard Kenyan
          tax rates as of 2023. Tax regulations may change, and individual
          circumstances may vary. Please consult with a tax professional for
          specific advice.
        </p>
      </div>
    </div>
  );
};

export default KenyanTaxCalculator;
