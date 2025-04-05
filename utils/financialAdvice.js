import { GoogleGenerativeAI } from "@google/generative-ai";

// Function to get chatbot advice via Gemini API
const getFinancialAdvice = async (question) => {
  console.log("User question:", question);

  // Check if API key is available
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Missing Gemini API key in environment variables");
    return getFallbackAdvice(question);
  }

  try {
    // Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(apiKey);

    // Access the Gemini model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const userPrompt = `
      You are a helpful financial assistant providing advice about personal finance.
      The user has asked: "${question}"
      
      Provide a concise, helpful response focused on personal finance topics like budgeting, 
      saving, investing, debt management, crypto market, money markets or financial planning.
      Keep your response under 3 sentences and focused on actionable advice.
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
    console.error("Error fetching Gemini advice:", error);
    return getFallbackAdvice(question);
  }
};

// Generate rule-based advice when API is unavailable
function getFallbackAdvice(question) {
  const questionLower = question.toLowerCase();

  // Budget related questions
  if (questionLower.includes("budget") && questionLower.includes("start")) {
    return "To start budgeting, first track all your income and expenses for a month to understand your spending patterns. Then create categories with spending limits based on the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment.";
  }

  if (
    questionLower.includes("50/30/20") ||
    questionLower.includes("50 30 20")
  ) {
    return "The 50/30/20 rule suggests allocating 50% of your income to needs (housing, food, utilities), 30% to wants (entertainment, dining out), and 20% to savings and debt repayment. It's a simple framework to help balance your spending and ensure you're saving for the future.";
  }

  // Saving related questions
  if (questionLower.includes("save") || questionLower.includes("saving")) {
    return "To improve your savings, try automating transfers to a separate savings account on payday before you can spend it. Also consider reducing unnecessary expenses like unused subscriptions, dining out less frequently, and shopping with a list to avoid impulse purchases.";
  }

  // Debt related questions
  if (questionLower.includes("debt")) {
    return "When tackling debt, consider either the avalanche method (paying highest interest rates first) for maximum financial benefit, or the snowball method (paying smallest debts first) for psychological wins. Always pay more than the minimum payment when possible, and consider consolidating high-interest debts.";
  }

  // Investment related questions
  if (
    questionLower.includes("invest") ||
    questionLower.includes("investment")
  ) {
    return "Before investing, ensure you have an emergency fund covering 3-6 months of expenses. For beginners, consider low-cost index funds through a retirement account like a 401(k) or IRA. Diversification across different asset classes can help manage risk while working toward your financial goals.";
  }

  // Credit score related questions
  if (questionLower.includes("credit score")) {
    return "To improve your credit score, always pay bills on time, keep credit utilization below 30%, don't close old accounts, limit new credit applications, and regularly check your credit report for errors. These factors significantly impact your ability to get favorable loan terms and interest rates.";
  }

  // Emergency fund related questions
  if (questionLower.includes("emergency fund")) {
    return "An emergency fund should ideally cover 3-6 months of essential expenses and be kept in an easily accessible account like a high-yield savings account. Start small by saving $500-$1000, then work toward one month's expenses, and gradually build from there.";
  }

  // Default response for other financial questions
  return "Financial success comes from spending less than you earn, avoiding high-interest debt, and investing regularly for long-term goals. I recommend tracking your expenses for a month to identify areas where you can reduce spending, then creating a budget that includes regular saving and investing.";
}

export default getFinancialAdvice;
