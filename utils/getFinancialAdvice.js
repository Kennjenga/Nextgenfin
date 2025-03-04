// utils/getFinancialAdvice.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log("Financial data:", totalBudget, totalIncome, totalSpend);

  // Check if API key is available
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Missing Gemini API key in environment variables");
    return generateFallbackAdvice(totalBudget, totalIncome, totalSpend);
  }

  try {
    // Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(apiKey);

    // Access the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    // Generate content from Gemini with timeout
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), 10000)
    );

    const resultPromise = model.generateContent(userPrompt);
    const result = await Promise.race([resultPromise, timeoutPromise]);

    const response = await result.response;
    const advice = response.text();

    console.log("Generated advice:", advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return generateFallbackAdvice(totalBudget, totalIncome, totalSpend);
  }
};

// Generate advice based on financial data without API
function generateFallbackAdvice(totalBudget, totalIncome, totalSpend) {
  // Calculate key financial metrics
  const remainingBudget = totalBudget - totalSpend;
  const savingsAmount = totalIncome - totalSpend;
  const budgetToIncomeRatio = totalIncome > 0 ? totalBudget / totalIncome : 0;
  const spendToBudgetRatio = totalBudget > 0 ? totalSpend / totalBudget : 0;
  const savingsRate = totalIncome > 0 ? savingsAmount / totalIncome : 0;

  // Generate advice based on financial situation
  if (totalSpend > totalBudget) {
    return `You've exceeded your budget by $${(
      totalSpend - totalBudget
    ).toFixed(
      2
    )} - try identifying non-essential expenses you can reduce. Creating a more detailed spending plan with specific category limits can help you stay within your budget next month.`;
  } else if (spendToBudgetRatio > 0.9) {
    return `You're using ${(spendToBudgetRatio * 100).toFixed(
      0
    )}% of your budget, leaving little room for unexpected expenses. Consider reviewing your spending in the highest expense categories to find potential savings for the remainder of this period.`;
  } else if (savingsRate < 0.2 && totalIncome > 0) {
    return `Your current savings rate is ${(savingsRate * 100).toFixed(
      0
    )}%, which is below the recommended 20% threshold. Try implementing the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment.`;
  } else if (budgetToIncomeRatio > 0.9 && totalIncome > 0) {
    return `Your budget is ${(budgetToIncomeRatio * 100).toFixed(
      0
    )}% of your income, which leaves little room for savings or unexpected expenses. Consider reviewing your budget categories to identify areas where you can reduce planned spending by 10-15%.`;
  } else if (savingsRate > 0.3 && totalIncome > 0) {
    return `Great job saving ${(savingsRate * 100).toFixed(
      0
    )}% of your income! Consider setting up automatic transfers to put some of these savings into an emergency fund and investments. If you don't have 3-6 months of expenses saved, prioritize building your emergency fund first.`;
  } else {
    return `You have $${remainingBudget.toFixed(
      2
    )} remaining in your budget and are saving $${savingsAmount.toFixed(
      2
    )} this period. For continued financial health, try tracking your daily expenses and set specific goals for your savings like an emergency fund, debt reduction, or retirement.`;
  }
}

export default getFinancialAdvice;

// utils/getFinancialAdvice.js

// import OpenAI from "openai";

// // Initialize the OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });

// // Function to fetch user-specific data (mocked for this example)

// // Function to generate personalized financial advice
// const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
//   console.log(totalBudget, totalIncome, totalSpend);
//   try {
//     const userPrompt = `
//       Based on the following financial data:
//       - Total Budget: ${totalBudget} USD
//       - Expenses: ${totalSpend} USD
//       - Incomes: ${totalIncome} USD
//       Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
//     `;

//     // Send the prompt to the OpenAI API
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [{ role: "user", content: userPrompt }],
//     });

//     // Process and return the response
//     const advice = chatCompletion.choices[0].message.content;

//     console.log(advice);
//     return advice;
//   } catch (error) {
//     console.error("Error fetching financial advice:", error);
//     return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
//   }
// };

// export default getFinancialAdvice;
