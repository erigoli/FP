const authScreen = document.getElementById('auth-screen');
const appScreen = document.getElementById('app-screen');
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const nameField = document.getElementById('name-field');
const submitAuth = document.getElementById('submit-auth');
const loginOnlyOptions = document.getElementById('login-only-options');
const authForm = document.getElementById('auth-form');
const logoutBtn = document.getElementById('logout-btn');
const navButtons = document.querySelectorAll('.nav-btn[data-view]');
const topicRows = document.querySelectorAll('.topic-row[data-view]');
const pageViews = document.querySelectorAll('.view[data-view-content]');
const modeButtons = document.querySelectorAll('.mode-btn[data-topic][data-mode]');
const topicDetails = document.querySelectorAll('.topic-detail[data-topic-detail]');
const welcomeUser = document.getElementById('welcome-user');
const authMessage = document.getElementById('auth-message');

const topicContent = {
  accounting: {
    lessons: [
      {
        title: 'Purpose of Financial Accounting and Financial Reporting',
        summary: 'Learn what financial accounting is, why financial reporting matters, and what makes it useful.',
        content: [
          'Financial accounting is the system companies use to record and communicate information about their financial activities. Businesses generate large numbers of transactions every day—sales, expenses, asset purchases, loans, and many other financial events. Accounting organizes these transactions into structured reports that summarize the company’s financial performance and financial position.',
          'The main purpose of financial reporting is to help stakeholders understand how a company is performing and whether it is financially healthy. Stakeholders include investors, lenders, analysts, regulators, and sometimes employees or suppliers. Investors want to know whether the company is profitable and likely to grow. Lenders want to know whether the company can repay its debts. Regulators want to ensure companies are providing transparent and accurate information to the public.',
          'Financial reporting generally attempts to answer three key questions:'
        ],
        bullets: [
          'Is the company profitable?',
          'Is the company financially stable?',
          'Does the company generate enough cash to operate and grow?'
        ],
        contentAfterBullets: [
          'To answer these questions consistently, companies must follow standardized rules for preparing financial statements. Without common rules, companies might report results in ways that make comparisons difficult or misleading.',
          'For this reason, financial reporting focuses on three important qualities:'
        ],
        definitionBullets: [
          'Relevance – the information should help people make decisions.',
          'Reliability – the information should be accurate and verifiable.',
          'Comparability – the information should allow users to compare companies and performance across time.'
        ],
        closing: [
          'These principles ensure that financial statements provide useful insights into a company’s financial condition.'
        ],
        practiceQuestion: 'Why do investors use financial statements?'
      },
      {
        title: 'US GAAP, FASB, and the SEC',
        summary: 'Understand the core accounting framework and the organizations behind it.',
        content: [
          'In the United States, companies prepare financial statements according to Generally Accepted Accounting Principles (US GAAP). These are standardized rules that determine how financial transactions are recorded and reported.',
          'US GAAP ensures that companies follow consistent methods when recognizing revenue, recording expenses, valuing assets, and reporting liabilities. This consistency allows investors to compare financial performance across companies and industries.',
          'The organization responsible for creating and updating these accounting standards is the Financial Accounting Standards Board (FASB). FASB studies accounting issues and develops new rules when financial markets or business practices change.',
          'While FASB sets accounting standards, public companies are regulated by the Securities and Exchange Commission (SEC). The SEC is a government agency responsible for protecting investors and maintaining fair financial markets. It requires public companies to disclose financial information through standardized reports.',
          'The SEC can also enforce compliance with accounting rules. If companies fail to provide accurate financial disclosures, they may face penalties or legal consequences.',
          'Together, FASB and the SEC create a system that promotes transparency and trust in financial reporting.'
        ],
        practiceQuestion: 'Which organization sets accounting standards in the United States?'
      },
      {
        title: 'SEC Filings and Public Company Reports',
        summary: 'Learn the most important filings public companies submit to the SEC.',
        content: [
          'Public companies must regularly disclose financial information through filings submitted to the SEC. These reports provide investors with insight into a company’s operations, financial performance, and risks.',
          'The most comprehensive filing is the 10-K, which is an annual report containing detailed financial information and audited financial statements. Independent auditors review the company’s financial statements to confirm that they comply with accounting standards.',
          'A 10-K includes several important sections. The Business Overview describes the company’s operations and industry. The Risk Factors section outlines potential risks that could affect the company’s performance. The Management Discussion and Analysis (MD&A) explains financial results and major trends. The report also includes the company’s financial statements and detailed notes explaining accounting policies.',
          'Companies also file 10-Q reports, which are quarterly updates on financial performance. These reports contain condensed financial statements and updates from management but are typically not audited.',
          'Other filings include 8-K reports, which disclose major events such as mergers or executive changes, and proxy statements, which provide information about executive compensation and shareholder voting.',
          'These filings are available through the SEC’s EDGAR database, which analysts frequently use when researching companies.'
        ],
        practiceQuestion: 'Which report is the annual filing that contains the most detailed financial information?'
      },
      {
        title: 'The Three Financial Statements',
        summary: 'Get introduced to the three core financial statements.',
        content: [
          'The foundation of financial analysis is the three core financial statements: the Income Statement, the Balance Sheet, and the Cash Flow Statement.',
          'The Income Statement measures a company’s profitability over a specific period of time, such as a quarter or a year. It shows how revenue is converted into profit after subtracting expenses.',
          'The Balance Sheet shows the company’s financial position at a specific moment in time. It lists what the company owns, what it owes, and the value that belongs to shareholders.',
          'The Cash Flow Statement tracks the movement of cash in and out of the company. Because accounting rules sometimes record revenue or expenses before cash actually changes hands, the cash flow statement helps explain how much cash the company truly generated.',
          'Each statement provides different information, but together they give a comprehensive picture of a company’s financial health.'
        ],
        practiceQuestion: 'What are the three financial statements?'
      },
      {
        title: 'Income Statement Overview',
        summary: 'Learn how the income statement measures profitability.',
        content: [
          'The income statement measures how profitable a company is over a period of time.',
          'The statement begins with revenue, which represents the total amount of money earned from selling goods or services. Revenue is often referred to as the top line.',
          'Next, the company subtracts Cost of Goods Sold (COGS). These are the direct costs required to produce goods or provide services. For example, raw materials and factory labor would typically be included in COGS.',
          'Revenue minus COGS equals gross profit, which reflects how efficiently a company produces its products.',
          'The company then subtracts operating expenses, which include costs such as employee salaries, rent, marketing expenses, and research and development.',
          'After operating expenses are subtracted, the company arrives at operating income, which measures profit generated from core business operations.',
          'Finally, the company subtracts interest expenses and taxes to determine net income, which represents the company’s total profit.',
          'Net income is often called the bottom line because it appears at the bottom of the income statement.'
        ],
        practiceQuestion: 'What is the final profit number on the income statement called?'
      },
      {
        title: 'Balance Sheet Overview',
        summary: 'Understand the balance sheet and the accounting equation.',
        content: [
          'The balance sheet provides a snapshot of a company’s financial position at a specific point in time.',
          'It follows the accounting equation:'
        ],
        formula: 'Assets = Liabilities + Shareholders’ Equity',
        contentAfterFormula: [
          'Assets represent resources owned by the company, such as cash, inventory, buildings, and equipment.',
          'Liabilities represent obligations the company must repay, such as loans or payments owed to suppliers.',
          'Shareholders’ equity represents the value that belongs to the company’s owners after liabilities are subtracted from assets.',
          'Because every transaction must keep the accounting equation balanced, any change to assets must be offset by a change to liabilities or equity.'
        ],
        practiceQuestion: 'What equation does the balance sheet follow?'
      },
      {
        title: 'Cash Flow Statement',
        summary: 'Learn the purpose and sections of the cash flow statement.',
        content: [
          'The cash flow statement explains how a company’s cash balance changes over time.',
          'The statement has three sections.'
        ],
        bullets: [
          'Operating Activities – cash generated from the company’s core business operations.',
          'Investing Activities – cash spent on long-term assets such as equipment or acquisitions.',
          'Financing Activities – cash received from or returned to investors and lenders.'
        ],
        closing: [
          'The total of these sections equals the net change in cash during the period.',
          'Analysts often focus heavily on operating cash flow because it shows whether the company’s core business is generating cash.'
        ],
        practiceQuestion: 'How many sections are in the cash flow statement?'
      },
      {
        title: 'How the Financial Statements Connect',
        summary: 'See how the three statements link together.',
        content: [
          'The three financial statements are connected.',
          'Net income from the income statement flows into the cash flow statement and increases retained earnings on the balance sheet.',
          'The ending cash balance from the cash flow statement becomes the cash balance on the balance sheet.',
          'Because of these relationships, changes in one financial statement often affect the others.',
          'Understanding these connections is essential for financial analysis and investment banking interviews.'
        ],
        practiceQuestion: 'Which financial statement does net income come from?'
      },
      {
        title: 'Accrual Accounting and Key Accounting Principles',
        summary: 'Learn how accrual accounting records revenue and expenses.',
        content: [
          'Most companies use accrual accounting, which records revenue when it is earned and expenses when they are incurred.',
          'This system differs from cash accounting, which records transactions only when cash is received or paid.',
          'Two important principles guide accrual accounting.',
          'The revenue recognition principle states that revenue should be recorded when goods or services are delivered to customers.',
          'The matching principle requires expenses to be recognized in the same period as the revenue they helped generate.',
          'These principles ensure financial statements reflect economic activity rather than simply tracking cash movements.'
        ],
        practiceQuestion: 'Under accrual accounting, when is revenue recorded?'
      },
      {
        title: 'Working Capital and Operating Accounts',
        summary: 'Understand working capital and why it matters.',
        content: [
          'Working capital measures a company’s short-term liquidity.'
        ],
        formula: 'Working Capital = Current Assets − Current Liabilities',
        contentAfterFormula: [
          'Key working capital accounts include accounts receivable, inventory, and accounts payable.',
          'Changes in these accounts can affect a company’s cash flow and provide insight into operational efficiency.',
          'For example, if accounts receivable increase, the company has recorded revenue but has not yet received the cash payment.'
        ],
        practiceQuestion: 'What does working capital measure?'
      },
      {
        title: 'Property, Plant, Equipment and Capital Expenditures',
        summary: 'Learn what PP&E and CapEx mean.',
        content: [
          'Property, Plant, and Equipment (PP&E) represents long-term physical assets used in operations.',
          'Examples include buildings, machinery, vehicles, and equipment.',
          'Companies invest in these assets through capital expenditures (CapEx).',
          'CapEx can be categorized as maintenance CapEx, which maintains current operations, or growth CapEx, which expands production capacity.'
        ],
        practiceQuestion: 'What does CapEx stand for?'
      },
      {
        title: 'Depreciation and Amortization',
        summary: 'See how companies spread asset costs over time.',
        content: [
          'Depreciation allocates the cost of long-term assets over their useful life.',
          'Instead of recording the full cost of an asset immediately, companies gradually recognize the expense over time.',
          'Amortization applies the same concept to intangible assets such as patents or trademarks.',
          'These expenses reduce net income but do not represent cash outflows during the period.'
        ],
        practiceQuestion: 'What does depreciation spread out over time?'
      },
      {
        title: 'Inventory Accounting',
        summary: 'Learn the basics of inventory accounting methods.',
        content: [
          'Inventory represents goods held for sale.',
          'Companies must choose a method to determine the cost of goods sold.',
          'Common methods include FIFO (First-In First-Out) and LIFO (Last-In First-Out).',
          'These methods can affect reported profits and taxes.'
        ],
        practiceQuestion: 'What does FIFO stand for?'
      },
      {
        title: 'Shareholders’ Equity, Dividends, and EPS',
        summary: 'Understand ownership value, dividends, and earnings per share.',
        content: [
          'Shareholders’ equity represents the ownership interest in a company.',
          'Companies may distribute profits through dividends, which are payments to shareholders.',
          'Another important metric is earnings per share (EPS), which measures profit allocated to each share of stock.'
        ],
        practiceQuestion: 'What does EPS measure?'
      },
      {
        title: 'Advanced Accounting Concepts',
        summary: 'Get introduced to more advanced ideas that affect interpretation.',
        content: [
          'Several accounting concepts affect how financial statements are interpreted.',
          'Goodwill arises when one company acquires another for more than the fair value of its net assets.',
          'The conservatism principle encourages companies to recognize potential losses earlier than gains.',
          'The going concern assumption assumes that a company will continue operating in the foreseeable future.',
          'These concepts influence how analysts interpret financial statements and evaluate company performance.'
        ],
        practiceQuestion: 'What assumption means a company is expected to continue operating?'
      }
    ],
    flashcards: [
      { front: 'What is financial accounting?', back: 'A system used to record, summarize, and communicate financial information about business activities.' },
      { front: 'What is the main purpose of financial reporting?', back: 'To help stakeholders evaluate a company’s financial health and make decisions.' },
      { front: 'Who are key stakeholders?', back: 'Investors, lenders, analysts, and regulators.' },
      { front: 'What do investors use financial statements for?', back: 'To assess profitability and future returns.' },
      { front: 'What are the three key qualities of financial reporting?', back: 'Relevance, reliability, comparability.' },
      { front: 'What is US GAAP?', back: 'A standardized set of accounting rules used in the United States.' },
      { front: 'What does FASB do?', back: 'Sets and updates accounting standards.' },
      { front: 'What does the SEC do?', back: 'Regulates public companies and enforces disclosure requirements.' },
      { front: 'Why are GAAP rules important?', back: 'They ensure consistency and transparency in financial reporting.' },
      { front: 'What is a 10-K?', back: 'An annual report with detailed and audited financial statements.' },
      { front: 'What is a 10-Q?', back: 'A quarterly financial report that is usually unaudited.' },
      { front: 'What is an 8-K?', back: 'A report filed for major company events.' },
      { front: 'What is MD&A?', back: 'Management’s explanation of financial results, trends, and outlook.' },
      { front: 'What does the income statement show?', back: 'Profitability over a period of time.' },
      { front: 'What does the balance sheet show?', back: 'Financial position at a specific point in time.' },
      { front: 'What does the cash flow statement show?', back: 'Cash inflows and outflows.' },
      { front: 'Why are the three financial statements important together?', back: 'They are interconnected and provide a full financial picture.' },
      { front: 'What is revenue?', back: 'Total sales generated by a company.' },
      { front: 'What is COGS?', back: 'Direct costs of producing goods or services.' },
      { front: 'What is gross profit?', back: 'Revenue minus COGS.' },
      { front: 'What is operating income (EBIT)?', back: 'Gross profit minus operating expenses.' },
      { front: 'What is net income?', back: 'Profit after all expenses, interest, and taxes.' },
      { front: 'What is the accounting equation?', back: 'Assets = Liabilities + Equity' },
      { front: 'What are assets?', back: 'Resources owned by a company.' },
      { front: 'What are liabilities?', back: 'Obligations the company must repay.' },
      { front: 'What is shareholders’ equity?', back: 'Ownership value after liabilities are subtracted.' },
      { front: 'What are the three sections of the cash flow statement?', back: 'Operating, investing, financing.' },
      { front: 'What is operating cash flow?', back: 'Cash generated from core business operations.' },
      { front: 'What is investing cash flow?', back: 'Cash used for buying or selling long-term assets.' },
      { front: 'What is financing cash flow?', back: 'Cash related to debt, equity, and dividends.' },
      { front: 'How does net income connect the financial statements?', back: 'It flows into the cash flow statement and retained earnings.' },
      { front: 'Where does ending cash go?', back: 'It appears on the balance sheet as cash.' },
      { front: 'What is accrual accounting?', back: 'Recording revenue when earned and expenses when incurred.' },
      { front: 'What is the revenue recognition principle?', back: 'Revenue is recorded when earned.' },
      { front: 'What is the matching principle?', back: 'Expenses are recorded in the same period as related revenue.' },
      { front: 'What is working capital?', back: 'Current assets minus current liabilities.' },
      { front: 'What does working capital measure?', back: 'Short-term liquidity.' },
      { front: 'What are key working capital accounts?', back: 'Accounts receivable, inventory, accounts payable.' },
      { front: 'What is PP&E?', back: 'Long-term physical assets used in operations.' },
      { front: 'What is CapEx?', back: 'Spending on long-term assets.' },
      { front: 'What is depreciation?', back: 'Spreading the cost of an asset over its useful life.' },
      { front: 'What is amortization?', back: 'Depreciation applied to intangible assets.' },
      { front: 'What are inventory accounting methods?', back: 'FIFO, LIFO, weighted average.' },
      { front: 'Why do inventory methods matter?', back: 'They affect profit, taxes, and cost of goods sold.' },
      { front: 'What is shareholders’ equity?', back: 'The ownership interest in a company.' },
      { front: 'What are dividends?', back: 'Payments made to shareholders.' },
      { front: 'What is EPS?', back: 'Earnings per share.' },
      { front: 'What is goodwill?', back: 'The excess value paid in an acquisition above fair value.' },
      { front: 'What are intangible assets?', back: 'Non-physical assets like patents or trademarks.' },
      { front: 'What are deferred taxes?', back: 'Differences between accounting income and taxable income timing.' },
      { front: 'Why can market value differ from book value?', back: 'Due to growth expectations and intangible factors.' }
    ],
    tests: [
      {
        title: 'Accounting Quiz',
        questions: [
          {
            id: 'a3_q1',
            type: 'mcq',
            prompt: 'What is the main purpose of financial accounting?',
            options: ['To reduce company taxes', 'To record and communicate financial information', 'To increase stock prices', 'To eliminate business risk'],
            answer: 'To record and communicate financial information',
            explanation: 'Financial accounting is used to record and communicate financial information to stakeholders.'
          },
          {
            id: 'a3_q2',
            type: 'mcq',
            prompt: 'Who primarily uses financial statements to assess returns?',
            options: ['Employees', 'Customers', 'Investors', 'Suppliers'],
            answer: 'Investors',
            explanation: 'Investors analyze financial statements to evaluate profitability and future returns.'
          },
          {
            id: 'a3_q3',
            type: 'mcq',
            prompt: 'Which of the following is NOT a key quality of financial reporting?',
            options: ['Relevance', 'Reliability', 'Comparability', 'Profitability'],
            answer: 'Profitability',
            explanation: 'Profitability is a result, not a reporting quality. The key qualities are relevance, reliability, and comparability.'
          },
          {
            id: 'a3_q4',
            type: 'mcq',
            prompt: 'What does US GAAP represent?',
            options: ['Government tax policies', 'Accounting rules used in the U.S.', 'Investment strategies', 'Banking regulations'],
            answer: 'Accounting rules used in the U.S.',
            explanation: 'GAAP is the standardized set of accounting rules companies must follow.'
          },
          {
            id: 'a3_q5',
            type: 'mcq',
            prompt: 'Which organization sets accounting standards?',
            options: ['SEC', 'IRS', 'FASB', 'Federal Reserve'],
            answer: 'FASB',
            explanation: 'FASB is responsible for developing accounting standards.'
          },
          {
            id: 'a3_q6',
            type: 'mcq',
            prompt: 'What is the primary role of the SEC?',
            options: ['Set accounting rules', 'Enforce regulations and protect investors', 'Audit companies', 'Approve loans'],
            answer: 'Enforce regulations and protect investors',
            explanation: 'The SEC regulates public companies and enforces compliance with disclosure rules.'
          },
          {
            id: 'a3_q7',
            type: 'mcq',
            prompt: 'What type of report is a 10-K?',
            options: ['Quarterly report', 'Annual audited report', 'Internal report', 'Tax filing'],
            answer: 'Annual audited report',
            explanation: 'A 10-K is an annual filing that includes audited financial statements.'
          },
          {
            id: 'a3_q8',
            type: 'mcq',
            prompt: 'What is included in MD&A?',
            options: ['Auditor opinions', 'Management explanations of performance', 'Stock prices', 'Employee salaries'],
            answer: 'Management explanations of performance',
            explanation: 'MD&A provides management’s perspective on financial results and trends.'
          },
          {
            id: 'a3_q9',
            type: 'mcq',
            prompt: 'Which financial statement shows profitability?',
            options: ['Balance sheet', 'Cash flow statement', 'Income statement', 'Statement of equity'],
            answer: 'Income statement',
            explanation: 'The income statement shows revenues, expenses, and profit over a period.'
          },
          {
            id: 'a3_q10',
            type: 'mcq',
            prompt: 'Which statement shows financial position at a point in time?',
            options: ['Income statement', 'Balance sheet', 'Cash flow statement', '10-K'],
            answer: 'Balance sheet',
            explanation: 'The balance sheet shows assets, liabilities, and equity at a specific moment.'
          },
          {
            id: 'a3_q11',
            type: 'mcq',
            prompt: 'What does the cash flow statement track?',
            options: ['Profit only', 'Revenue only', 'Cash inflows and outflows', 'Assets only'],
            answer: 'Cash inflows and outflows',
            explanation: 'It tracks actual cash movements, not accounting profit.'
          },
          {
            id: 'a3_q12',
            type: 'mcq',
            prompt: 'Revenue minus COGS equals:',
            options: ['Net income', 'Operating income', 'Gross profit', 'EBITDA'],
            answer: 'Gross profit',
            explanation: 'Gross profit measures profit after direct production costs.'
          },
          {
            id: 'a3_q13',
            type: 'mcq',
            prompt: 'What is EBIT?',
            options: ['Revenue', 'Gross profit', 'Operating income', 'Net income'],
            answer: 'Operating income',
            explanation: 'EBIT = earnings before interest and taxes (operating income).'
          },
          {
            id: 'a3_q14',
            type: 'mcq',
            prompt: 'What is net income?',
            options: ['Revenue minus COGS', 'Profit after all expenses', 'Cash from operations', 'Assets minus liabilities'],
            answer: 'Profit after all expenses',
            explanation: 'Net income is the final profit after all expenses, interest, and taxes.'
          },
          {
            id: 'a3_q15',
            type: 'mcq',
            prompt: 'What is the accounting equation?',
            options: ['Revenue = Expenses + Profit', 'Assets = Liabilities + Equity', 'Cash = Income − Expenses', 'Assets = Revenue − Expenses'],
            answer: 'Assets = Liabilities + Equity',
            explanation: 'This equation must always balance in accounting.'
          },
          {
            id: 'a3_q16',
            type: 'mcq',
            prompt: 'What are assets?',
            options: ['Company debts', 'Resources owned by a company', 'Investor returns', 'Company profits'],
            answer: 'Resources owned by a company',
            explanation: 'Assets are economic resources like cash, inventory, and equipment.'
          },
          {
            id: 'a3_q17',
            type: 'mcq',
            prompt: 'What are liabilities?',
            options: ['Company resources', 'Ownership value', 'Company obligations', 'Revenue sources'],
            answer: 'Company obligations',
            explanation: 'Liabilities are debts or obligations the company must repay.'
          },
          {
            id: 'a3_q18',
            type: 'mcq',
            prompt: 'What is shareholders’ equity?',
            options: ['Total revenue', 'Assets minus liabilities', 'Cash balance', 'Debt level'],
            answer: 'Assets minus liabilities',
            explanation: 'Equity represents the owners’ residual claim.'
          },
          {
            id: 'a3_q19',
            type: 'mcq',
            prompt: 'Which is NOT a section of the cash flow statement?',
            options: ['Operating', 'Investing', 'Financing', 'Revenue'],
            answer: 'Revenue',
            explanation: 'Revenue is part of the income statement, not cash flow sections.'
          },
          {
            id: 'a3_q20',
            type: 'mcq',
            prompt: 'Buying equipment falls under:',
            options: ['Operating', 'Investing', 'Financing', 'Equity'],
            answer: 'Investing',
            explanation: 'Purchasing long-term assets is an investing activity.'
          },
          {
            id: 'a3_q21',
            type: 'mcq',
            prompt: 'Issuing stock falls under:',
            options: ['Operating', 'Investing', 'Financing', 'Revenue'],
            answer: 'Financing',
            explanation: 'Raising capital from investors is a financing activity.'
          },
          {
            id: 'a3_q22',
            type: 'mcq',
            prompt: 'Net income flows into:',
            options: ['Only the balance sheet', 'Only the cash flow statement', 'Both cash flow statement and retained earnings', 'Nowhere'],
            answer: 'Both cash flow statement and retained earnings',
            explanation: 'Net income links the financial statements.'
          },
          {
            id: 'a3_q23',
            type: 'mcq',
            prompt: 'Accrual accounting records revenue when:',
            options: ['Cash is received', 'Earned', 'Invoiced', 'Paid'],
            answer: 'Earned',
            explanation: 'Revenue is recorded when earned, not when cash is received.'
          },
          {
            id: 'a3_q24',
            type: 'mcq',
            prompt: 'The matching principle requires:',
            options: ['Matching assets and liabilities', 'Matching revenue and expenses in same period', 'Matching cash and profit', 'Matching taxes and income'],
            answer: 'Matching revenue and expenses in same period',
            explanation: 'Expenses must align with the revenue they generate.'
          },
          {
            id: 'a3_q25',
            type: 'mcq',
            prompt: 'Working capital equals:',
            options: ['Total assets', 'Current assets − current liabilities', 'Revenue − expenses', 'Cash − debt'],
            answer: 'Current assets − current liabilities',
            explanation: 'It measures short-term financial health.'
          },
          {
            id: 'a3_q26',
            type: 'mcq',
            prompt: 'What does working capital measure?',
            options: ['Profitability', 'Liquidity', 'Growth', 'Valuation'],
            answer: 'Liquidity',
            explanation: 'It indicates the company’s ability to meet short-term obligations.'
          },
          {
            id: 'a3_q27',
            type: 'mcq',
            prompt: 'Which is a working capital account?',
            options: ['PP&E', 'Goodwill', 'Inventory', 'Bonds'],
            answer: 'Inventory',
            explanation: 'Inventory is a current asset and part of working capital.'
          },
          {
            id: 'a3_q28',
            type: 'mcq',
            prompt: 'What is PP&E?',
            options: ['Short-term assets', 'Long-term physical assets', 'Intangible assets', 'Debt instruments'],
            answer: 'Long-term physical assets',
            explanation: 'Includes buildings, machinery, and equipment.'
          },
          {
            id: 'a3_q29',
            type: 'mcq',
            prompt: 'CapEx refers to:',
            options: ['Operating expenses', 'Investment in long-term assets', 'Cash inflows', 'Taxes'],
            answer: 'Investment in long-term assets',
            explanation: 'CapEx is spending on assets that provide long-term value.'
          },
          {
            id: 'a3_q30',
            type: 'mcq',
            prompt: 'Depreciation is:',
            options: ['Increase in asset value', 'Spreading cost of an asset over time', 'Cash expense', 'Revenue recognition'],
            answer: 'Spreading cost of an asset over time',
            explanation: 'Depreciation allocates asset cost over its useful life.'
          },
          {
            id: 'a3_q31',
            type: 'mcq',
            prompt: 'Amortization applies to:',
            options: ['Cash', 'Inventory', 'Intangible assets', 'Liabilities'],
            answer: 'Intangible assets',
            explanation: 'Amortization is like depreciation for intangible assets.'
          },
          {
            id: 'a3_q32',
            type: 'mcq',
            prompt: 'Which inventory method typically results in higher profits during inflation?',
            options: ['LIFO', 'FIFO', 'Weighted average', 'None'],
            answer: 'FIFO',
            explanation: 'FIFO uses older (cheaper) costs, leading to higher profits.'
          },
          {
            id: 'a3_q33',
            type: 'mcq',
            prompt: 'What are dividends?',
            options: ['Company expenses', 'Payments to shareholders', 'Debt repayments', 'Operating costs'],
            answer: 'Payments to shareholders',
            explanation: 'Dividends distribute profits to shareholders.'
          },
          {
            id: 'a3_q34',
            type: 'mcq',
            prompt: 'What does EPS measure?',
            options: ['Total revenue', 'Earnings per share', 'Cash flow', 'Debt levels'],
            answer: 'Earnings per share',
            explanation: 'EPS shows profit allocated per share.'
          },
          {
            id: 'a3_q35',
            type: 'mcq',
            prompt: 'Goodwill arises when:',
            options: ['Assets are sold', 'Company pays more than fair value in acquisition', 'Debt increases', 'Revenue declines'],
            answer: 'Company pays more than fair value in acquisition',
            explanation: 'Goodwill reflects the premium paid in acquisitions.'
          },
          {
            id: 'a3_q36',
            type: 'mcq',
            prompt: 'Intangible assets include:',
            options: ['Buildings', 'Equipment', 'Patents', 'Inventory'],
            answer: 'Patents',
            explanation: 'Patents are non-physical assets.'
          },
          {
            id: 'a3_q37',
            type: 'mcq',
            prompt: 'Deferred taxes result from:',
            options: ['Errors in accounting', 'Timing differences between tax and accounting', 'Fraud', 'Cash shortages'],
            answer: 'Timing differences between tax and accounting',
            explanation: 'Differences arise due to timing of revenue and expense recognition.'
          },
          {
            id: 'a3_q38',
            type: 'mcq',
            prompt: 'Why might market value differ from book value?',
            options: ['Accounting mistakes', 'Government regulation', 'Growth expectations and intangibles', 'Cash flow only'],
            answer: 'Growth expectations and intangibles',
            explanation: 'Market value reflects future expectations and intangible value.'
          }
        ]
      }
    ]
  },
  valuation: {
    lessons: [
      {
        title: 'Present Value and the Foundation of Valuation',
        summary: 'Valuation in finance begins with the idea of present value.',
        content: [
          'Valuation in finance begins with the idea of present value. Present value is based on the principle that a dollar today is worth more than a dollar received in the future because money available now can be invested and earn a return over time. This is known as the time value of money.',
          'Because of this principle, future cash flows must be discounted back to the present in order to estimate what they are worth today. The further out a cash flow is received, and the riskier that cash flow is, the less it is worth in present terms.',
          'This idea is the foundation of intrinsic valuation. In intrinsic valuation, a company is worth the sum of the present value of all the future cash flows it is expected to generate. A company with a high valuation is generally expected to produce strong future cash flows, invest capital profitably, and face relatively low risk.',
          'Present value is central to nearly every major valuation method, especially discounted cash flow analysis. It also helps explain why growth, risk, and the timing of cash flows all matter so much when determining what a company is worth.'
        ],
        practiceQuestion: 'What does present value mean?'
      },
      {
        title: 'Equity Value, Enterprise Value, and Net Debt',
        summary: 'Two of the most important concepts in valuation are equity value and enterprise value.',
        content: [
          'Two of the most important concepts in valuation are equity value and enterprise value. Equity value, often called market capitalization, represents the value of a company that belongs to common shareholders. It is calculated by multiplying the company’s current share price by its total diluted shares outstanding.',
          'Enterprise value represents the value of the company’s operations to all providers of capital, not just equity holders. This includes common shareholders, debt lenders, preferred shareholders, and minority investors. Because of this, enterprise value is considered capital structure neutral.',
          'Enterprise value is calculated by starting with equity value and adding net debt, preferred stock, and minority interest. Net debt includes interest-bearing debt minus cash and cash equivalents. The reason cash is subtracted is that cash can be used to repay debt, so it reduces the company’s net financial obligation.',
          'If you already know enterprise value and want to calculate equity value, you move in the opposite direction. You subtract net debt, preferred stock, and minority interest. This is because equity value is the residual value left for common shareholders after satisfying non-equity claims.',
          'In some cases, a company can have negative net debt, meaning it has more cash than debt. In that situation, enterprise value can actually be lower than equity value. This is not a mistake. It simply means the company holds a large amount of non-operating cash.'
        ],
        practiceQuestion: 'What is equity value?'
      },
      {
        title: 'Diluted Shares and the Treasury Stock Method',
        summary: 'When valuing public companies, analysts usually use diluted shares outstanding rather than basic shares outstanding.',
        content: [
          'When valuing public companies, analysts usually use diluted shares outstanding rather than basic shares outstanding. Diluted shares reflect the impact of securities such as options, warrants, convertible preferred stock, and convertible bonds that could turn into common shares.',
          'The treasury stock method is used to calculate dilution from in-the-money options and warrants. In-the-money means the exercise price of the option is below the current share price, so exercising the option would be profitable.',
          'Under the treasury stock method, analysts assume that all in-the-money options are exercised. The company then receives cash from that exercise. The method also assumes the company uses those proceeds to repurchase shares at the current market price. This reduces the total dilution, so the final result is the net new shares created.',
          'Convertible securities require consistent treatment. If convertible preferred stock or convertible bonds are assumed to convert into common shares, then they should also be removed from net debt or preferred stock in the valuation bridge. Otherwise, the same security would be counted twice.',
          'Restricted stock may also be included in diluted shares, especially if analysts want to be conservative and assume unvested shares will eventually vest.'
        ],
        practiceQuestion: 'What are diluted shares?'
      },
      {
        title: 'Valuation Approaches and Common Valuation Methods',
        summary: 'There are two broad approaches to valuation: intrinsic valuation and relative valuation.',
        content: [
          'There are two broad approaches to valuation: intrinsic valuation and relative valuation.',
          'Intrinsic valuation estimates value based on the company’s own ability to generate future cash flows. The most common intrinsic method is the discounted cash flow analysis, or DCF. A DCF values a company by projecting its free cash flows and discounting them back to the present at an appropriate discount rate.',
          'Relative valuation estimates value by comparing a company to other similar companies or transactions. This includes comparable company analysis, often called trading comps, and comparable transaction analysis, often called transaction comps.',
          'The most common valuation methods used in finance are:'
        ],
        bullets: [
          'comparable company analysis',
          'comparable transactions analysis',
          'discounted cash flow analysis',
          'leveraged buyout analysis',
          'liquidation analysis'
        ],
        contentAfterBullets: [
          'Trading comps value a company based on how similar public companies are being priced by the market today. Transaction comps value a company based on prices paid in real acquisitions. DCF values a company based on projected cash flow generation. LBO analysis values a company based on the maximum price a financial sponsor could pay and still achieve its target return. Liquidation analysis values a company based on what its assets could be sold for in a downside scenario.',
          'Each method has strengths and weaknesses, which is why analysts usually use several methods together to arrive at a valuation range rather than relying on only one.'
        ],
        practiceQuestion: 'What is a DCF?'
      },
      {
        title: 'DCF Overview and the Steps in a Valuation Model',
        summary: 'A discounted cash flow analysis estimates the value of a business by forecasting future unlevered free cash flows and discounting them back to the present using the weighted average cost of capital, or WACC.',
        content: [
          'A discounted cash flow analysis estimates the value of a business by forecasting future unlevered free cash flows and discounting them back to the present using the weighted average cost of capital, or WACC.',
          'A standard unlevered DCF usually follows these steps:'
        ],
        bullets: [
          'Forecast unlevered free cash flow for a period of about 5 to 10 years.',
          'Calculate terminal value to capture the value of all cash flows beyond the forecast period.',
          'Discount the forecast cash flows and terminal value back to present value using WACC.',
          'Sum the discounted cash flows to calculate enterprise value.',
          'Subtract net debt and other non-equity claims to get equity value.',
          'Divide equity value by diluted shares outstanding to calculate implied value per share.',
          'Perform sensitivity analysis to test how the result changes under different assumptions.'
        ],
        contentAfterBullets: [
          'The DCF is often considered the most academically rigorous valuation method because it is based on company fundamentals rather than current market pricing. However, it is also very sensitive to assumptions, especially revenue growth, margins, discount rate, and terminal value.',
          'Because terminal value often makes up a large percentage of total DCF value, it is especially important to keep long-term assumptions realistic.'
        ],
        practiceQuestion: 'What does a DCF calculate?'
      },
      {
        title: 'Free Cash Flow, Unlevered FCF, and Levered FCF',
        summary: 'Free cash flow represents the cash a company generates after covering the expenditures required to keep the business operating.',
        content: [
          'Free cash flow represents the cash a company generates after covering the expenditures required to keep the business operating. It is often thought of as discretionary cash flow because it is the cash available after recurring operating needs have been met.',
          'A simple way to define free cash flow is cash from operations minus capital expenditures. Acquisitions are usually excluded because they are not part of recurring core operations.',
          'In valuation, analysts distinguish between unlevered free cash flow and levered free cash flow. Unlevered free cash flow, also called FCFF or UFCF, represents cash flow available to all capital providers, both debt and equity. It starts with EBIT, taxes that operating profit, adds back non-cash expenses like depreciation, adjusts for changes in net working capital, and subtracts capital expenditures.',
          'Levered free cash flow, also called FCFE, represents cash flow available only to equity holders after interest expense and debt repayments. It usually starts with net income rather than EBIT.',
          'Because unlevered free cash flow belongs to both lenders and shareholders, it is discounted using WACC. Levered free cash flow belongs only to equity holders, so it is discounted using the cost of equity.',
          'When building valuation models, analysts generally prefer unlevered DCFs because enterprise value is easier to compare across companies regardless of differences in capital structure.'
        ],
        practiceQuestion: 'What is free cash flow?'
      },
      {
        title: 'WACC and the Cost of Capital',
        summary: 'The weighted average cost of capital, or WACC, is the discount rate used in an unlevered DCF.',
        content: [
          'The weighted average cost of capital, or WACC, is the discount rate used in an unlevered DCF. It reflects the average required return expected by all providers of capital, weighted by their share of the company’s capital structure.',
          'WACC includes two major components: cost of equity and after-tax cost of debt. The weights used should be based on market values, not book values, because market values better reflect the current economic cost of capital.',
          'Debt is included on an after-tax basis because interest expense is tax-deductible, which creates a tax shield. This tax shield lowers the effective cost of debt relative to the stated interest rate.',
          'If a company has no debt, its WACC is equal to its cost of equity. As a company adds debt, WACC may initially decrease because debt is cheaper than equity. But after a certain point, too much leverage increases financial distress risk and pushes WACC back up.',
          'This is why finance often refers to an “optimal capital structure.” The optimal capital structure is the mix of debt and equity that minimizes WACC and maximizes firm value.'
        ],
        practiceQuestion: 'What does WACC stand for?'
      },
      {
        title: 'CAPM, Cost of Equity, and Beta',
        summary: 'The cost of equity is most commonly estimated using the capital asset pricing model, or CAPM.',
        content: [
          'The cost of equity is most commonly estimated using the capital asset pricing model, or CAPM. CAPM says that the return equity investors require is equal to the risk-free rate plus beta times the equity risk premium.',
          'The risk-free rate is usually based on the yield of U.S. Treasury securities, with the 10-year Treasury commonly used in practice for U.S. companies. The equity risk premium is the additional return investors demand for choosing stocks instead of risk-free government bonds.',
          'Beta measures a stock’s sensitivity to the overall market. A beta of 1.0 means the stock tends to move in line with the market. A beta greater than 1.0 means the stock is more volatile than the market. A beta below 1.0 means it is less volatile.',
          'A higher beta leads to a higher cost of equity, and a higher cost of equity lowers valuation because future cash flows are discounted more heavily. High-beta industries tend to be more cyclical, such as autos, semiconductors, and construction. Low-beta industries are often defensive, such as utilities, healthcare facilities, and consumer staples.',
          'Analysts often prefer an industry beta approach instead of relying entirely on a company’s historical regression beta. This involves unlevering the betas of comparable companies, averaging them, and then relevering the result using the target company’s capital structure. This helps remove company-specific noise and is especially important for private companies that do not have observable stock betas.'
        ],
        practiceQuestion: 'What does beta measure?'
      },
      {
        title: 'Cost of Debt, Leverage, and Capital Structure Decisions',
        summary: 'The cost of debt is the return lenders require to lend money to a company.',
        content: [
          'The cost of debt is the return lenders require to lend money to a company. If a company has publicly traded debt, the cost of debt can be estimated from the yield on that debt. If it does not, analysts may estimate the cost of debt using a synthetic credit rating and default spread.',
          'The cost of debt is usually lower than the cost of equity. One reason is the tax deductibility of interest. Another reason is that debt holders have a senior claim on the company’s assets and cash flows, while equity holders are residual claimants and take more risk.',
          'Even though debt is cheaper, companies cannot finance themselves entirely with debt. As leverage rises, the risk of default increases. Lenders demand higher interest rates, and equity holders also demand a higher return because their position becomes riskier. Too much leverage can therefore increase both cost of debt and cost of equity.',
          'Debt also creates restrictions through covenants. These may limit the company’s ability to raise more debt, pay dividends, or pursue acquisitions.',
          'As a result, most companies use a mix of debt and equity. Mature, stable businesses often support more leverage because their cash flows are more predictable. Riskier, high-beta companies tend to use less debt or face more expensive debt terms.'
        ],
        practiceQuestion: 'What is cost of debt?'
      },
      {
        title: 'Terminal Value, Growth Assumptions, and Mid-Year Convention',
        summary: 'Terminal value represents the value of all cash flows beyond the explicit forecast period in a DCF.',
        content: [
          'Terminal value represents the value of all cash flows beyond the explicit forecast period in a DCF. Since companies are assumed to continue operating after the forecast period ends, terminal value is necessary to capture the majority of the company’s remaining value.',
          'There are two common ways to calculate terminal value. The first is the growth in perpetuity method, which assumes free cash flow grows at a constant rate forever. The second is the exit multiple method, which applies a valuation multiple such as EV/EBITDA to the company’s terminal year metric.',
          'The perpetual growth rate should be conservative and sustainable. In practice, it is often between 1% and 3%, sometimes slightly higher. The logic is that no company can outgrow the broader economy forever.',
          'If the exit multiple method is used, analysts should back into the implied perpetual growth rate to see if it is reasonable. If the implied growth rate is too high, the terminal multiple may not be defensible.',
          'Analysts also often apply a mid-year convention in DCF models. This assumes cash flows are received in the middle of each year rather than at year-end. Because cash is assumed to arrive earlier, present value increases slightly. However, mid-year convention may be inappropriate for highly seasonal businesses where cash flow is concentrated in certain quarters.',
          'If terminal value represents too much of the total DCF value, that may signal that the explicit forecast period is too short or that the terminal assumptions are too aggressive.'
        ],
        practiceQuestion: 'What is terminal value?'
      },
      {
        title: 'Relative Valuation and Valuation Multiples',
        summary: 'Relative valuation uses valuation multiples to compare a company to similar businesses.',
        content: [
          'Relative valuation uses valuation multiples to compare a company to similar businesses. A multiple expresses value in relation to a financial or operating metric. This standardizes value and makes comparisons more meaningful across companies of different sizes.',
          'The most common enterprise value multiples are EV/Revenue, EV/EBIT, and EV/EBITDA. The most common equity value multiples are P/E, P/B, and price to levered cash flow.',
          'A key rule in valuation is that the numerator and denominator must match in terms of the stakeholders they represent. Enterprise value should be paired with unlevered metrics such as EBITDA, EBIT, revenue, or unlevered free cash flow. Equity value should be paired with levered metrics such as net income, EPS, or levered free cash flow.',
          'Using enterprise value with net income would be incorrect because enterprise value reflects value to all capital providers, while net income belongs only to equity holders.',
          'Multiples are only useful when interpreted in context. A high multiple may mean strong growth prospects, higher returns on capital, lower risk, or strong investor confidence. But it could also reflect temporary market enthusiasm or differences in accounting.'
        ],
        practiceQuestion: 'What is a valuation multiple?'
      },
      {
        title: 'Trading Comps and Building a Peer Group',
        summary: 'Comparable company analysis, or trading comps, values a company based on how similar public companies are currently being valued by the market.',
        content: [
          'Comparable company analysis, or trading comps, values a company based on how similar public companies are currently being valued by the market.',
          'The process starts with selecting a peer group. Analysts look for companies with similar operational and financial characteristics. Operational considerations include industry, business model, products, customers, end markets, distribution channels, cyclicality, and maturity. Financial considerations include size, margins, growth, leverage, and returns.',
          'After choosing the peer group, analysts gather financial and market data, adjust for non-recurring items, and calculate valuation multiples such as EV/EBITDA and P/E on both an LTM and forward basis. These multiples are then summarized using statistics such as minimum, maximum, median, mean, and percentiles.',
          'The next step is applying a selected multiple, often the median, to the target company’s metric to estimate value. Analysts often prefer the median over the mean because it reduces the effect of outliers.',
          'Trading comps are useful because public company filings are available, the method is relatively fast, and current market values are observable. But it is still difficult to find truly comparable companies, and differences in business mix, capital structure, strategy, and market sentiment can distort comparisons.',
          'Calendarization is also often necessary when peer companies have different fiscal year ends. This helps make the financial data more comparable.'
        ],
        practiceQuestion: 'What are trading comps?'
      },
      {
        title: 'Transaction Comps and Control Premiums',
        summary: 'Comparable transaction analysis, or transaction comps, values a company based on acquisition prices paid in similar M&A transactions.',
        content: [
          'Comparable transaction analysis, or transaction comps, values a company based on acquisition prices paid in similar M&A transactions.',
          'Unlike trading comps, transaction comps include control premiums. A control premium is the amount an acquirer pays above the target’s unaffected market price to gain control of the business. Buyers usually have to pay this premium to convince shareholders to sell.',
          'Because of these control premiums, transaction comps often produce the highest valuation among the major methods. Premiums may be even higher in competitive sale processes, when synergies are expected, when the asset is scarce, or when the buyer believes the target is undervalued or mismanaged.',
          'To perform transaction comps, analysts gather data from press releases, merger agreements, proxy filings, target company filings, and databases such as Capital IQ or Bloomberg. They also study the circumstances of each deal, including buyer type, consideration, economic environment, and whether the deal was friendly or hostile.',
          'Transaction comps can be more difficult than trading comps because the data is often less complete, many private deals disclose limited information, and older transactions may no longer reflect current market conditions.',
          'Even when a DCF and trading comps suggest a certain value, transaction comps help answer an important practical question: what have real buyers actually been willing to pay?'
        ],
        practiceQuestion: 'What is a control premium?'
      },
      {
        title: 'P/E, PEG, Revenue Multiples, and Interpreting Multiples',
        summary: 'The price-to-earnings ratio, or P/E, is one of the most widely used equity value multiples.',
        content: [
          'The price-to-earnings ratio, or P/E, is one of the most widely used equity value multiples. It tells you how much the market is willing to pay for one dollar of a company’s earnings. P/E is especially useful for mature companies with stable earnings and similar capital structures.',
          'A higher P/E ratio may imply that the market expects stronger future growth, better profitability, or lower risk. But it can also mean current earnings are temporarily low, making the ratio appear inflated.',
          'The PEG ratio adjusts the P/E ratio for growth. It is calculated by dividing P/E by the company’s growth rate. This makes it useful for comparing companies with different growth profiles. As a rough rule, a PEG ratio around 1 is often seen as fair, below 1 as potentially undervalued, and above 1 as potentially overvalued.',
          'The price-to-book ratio is often used for financial institutions, especially banks, because their balance sheet values are closer to market values than in many other industries.',
          'Revenue multiples are commonly used for companies with negative EBITDA or net income. If a company is unprofitable, EBITDA-based or earnings-based multiples may not be meaningful. In those cases, EV/Revenue may be the best available multiple.',
          'For very early-stage internet or software businesses, even revenue may not exist yet. In those situations, investors may rely on user-based metrics such as EV/MAU or EV/DAU.'
        ],
        practiceQuestion: 'What does P/E mean?'
      },
      {
        title: 'Special Topics in Valuation and Practical Judgment',
        summary: 'Valuation also requires practical judgment in situations where standard approaches need adjustment.',
        content: [
          'Valuation also requires practical judgment in situations where standard approaches need adjustment.',
          'A sum-of-the-parts analysis is used when a company has multiple business divisions with different risk profiles, growth rates, and peer groups. In that case, each segment is valued separately and then added together.',
          'Private companies are valued differently from public companies mainly because of limited data and lower liquidity. Since private shares cannot be easily sold, analysts often apply an illiquidity discount when using public company comps.',
          'A painting is an example of an asset with no intrinsic cash flow value. Since it does not generate cash flow, it is usually valued using comparable transactions rather than intrinsic valuation.',
          'Buybacks and dividends also matter in valuation discussions. Companies repurchase shares to return cash to shareholders, offset dilution, or signal that management believes the stock is undervalued. Dividends are more common for mature, lower-growth companies with fewer attractive investment opportunities.',
          'DCF is not always appropriate. It is less reliable for early-stage startups, companies with long periods of negative cash flow, or businesses where limited financial data is available. In those cases, relative valuation may be more practical.',
          'Analysts must also normalize results by removing non-operating income, non-recurring items, and unusual accounting distortions. The goal is always to value the company’s core operations as accurately and consistently as possible.',
          'In practice, no single method is perfect. The strongest valuation work combines methods, understands the business, and uses judgment to explain why a company should trade at a certain range.'
        ],
        practiceQuestion: 'What is a sum-of-the-parts valuation?'
      }
    ],
    flashcards: [
      { front: 'What is present value?', back: 'The idea that a dollar today is worth more than a dollar in the future because it can earn a return.' },
      { front: 'What is intrinsic valuation?', back: 'Valuing a company based on the present value of its future cash flows.' },
      { front: 'What is equity value?', back: 'The value of a company to shareholders (share price × diluted shares outstanding).' },
      { front: 'What is enterprise value (EV)?', back: 'The value of a company’s operations to all capital providers (equity + debt + others).' },
      { front: 'What is net debt?', back: 'Total debt minus cash and cash equivalents.' },
      { front: 'Why is cash subtracted in net debt?', back: 'Because cash can be used to pay down debt, reducing obligations.' },
      { front: 'What is negative net debt?', back: 'When a company has more cash than debt.' },
      { front: 'What are diluted shares outstanding?', back: 'Total shares including options, warrants, and convertible securities.' },
      { front: 'What is the treasury stock method (TSM)?', back: 'Assumes in-the-money options are exercised and proceeds repurchase shares.' },
      { front: 'What does in-the-money (ITM) mean?', back: 'When exercising an option is profitable (strike price < share price).' },
      { front: 'What is intrinsic vs relative valuation?', back: 'Intrinsic uses cash flows; relative uses comparisons to other companies.' },
      { front: 'What is a discounted cash flow (DCF)?', back: 'A valuation method that discounts future cash flows to present value.' },
      { front: 'What are trading comps?', back: 'Valuing a company using multiples from similar public companies.' },
      { front: 'What are transaction comps?', back: 'Valuing a company using prices paid in similar acquisitions.' },
      { front: 'What is a leveraged buyout (LBO)?', back: 'A valuation based on returns using high debt financing.' },
      { front: 'What is liquidation analysis?', back: 'Valuing a company based on selling its assets.' },
      { front: 'What is unlevered free cash flow (FCFF)?', back: 'Cash flow available to both debt and equity investors.' },
      { front: 'What is levered free cash flow (FCFE)?', back: 'Cash flow available only to equity holders after debt payments.' },
      { front: 'What is free cash flow (FCF)?', back: 'Cash from operations minus capital expenditures.' },
      { front: 'Why are acquisitions excluded from FCF?', back: 'They are non-recurring and not part of core operations.' },
      { front: 'What is terminal value (TV)?', back: 'The value of all cash flows beyond the forecast period.' },
      { front: 'What is the perpetuity growth method?', back: 'Assumes cash flows grow at a constant rate forever.' },
      { front: 'What is the exit multiple method?', back: 'Applies a valuation multiple to terminal year financials.' },
      { front: 'What is the mid-year convention?', back: 'Assumes cash flows are received mid-year instead of year-end.' },
      { front: 'What is WACC?', back: 'The weighted average cost of capital (average return required by all capital providers).' },
      { front: 'What is cost of equity?', back: 'The return required by equity investors.' },
      { front: 'What is cost of debt?', back: 'The return required by lenders.' },
      { front: 'Why is debt cheaper than equity?', back: 'Interest is tax-deductible and debt holders are paid first.' },
      { front: 'What is optimal capital structure?', back: 'The mix of debt and equity that minimizes WACC and maximizes value.' },
      { front: 'What is the CAPM formula?', back: 'Cost of Equity = Risk-Free Rate + Beta × Equity Risk Premium' },
      { front: 'What is the risk-free rate?', back: 'The return on government bonds (typically 10-year Treasury).' },
      { front: 'What is the equity risk premium (ERP)?', back: 'Extra return for investing in stocks over risk-free assets.' },
      { front: 'What is beta (β)?', back: 'Measures a stock’s volatility relative to the market.' },
      { front: 'What is high beta?', back: 'Higher volatility, higher risk, higher required return.' },
      { front: 'What is low beta?', back: 'Lower volatility and lower risk.' },
      { front: 'What is systematic risk?', back: 'Market-wide risk that cannot be diversified away.' },
      { front: 'What is unsystematic risk?', back: 'Company-specific risk that can be diversified.' },
      { front: 'What is leverage?', back: 'The use of debt in a company’s capital structure.' },
      { front: 'What is the impact of more debt?', back: 'Increases risk and raises cost of capital after a certain point.' },
      { front: 'What are debt covenants?', back: 'Restrictions placed on companies by lenders.' },
      { front: 'What is a valuation multiple?', back: 'A ratio comparing value to a financial metric.' },
      { front: 'What are enterprise value multiples?', back: 'EV/Revenue, EV/EBIT, EV/EBITDA.' },
      { front: 'What are equity value multiples?', back: 'P/E, P/B, Price/FCFE.' },
      { front: 'What is the matching rule for multiples?', back: 'EV pairs with unlevered metrics; equity value pairs with levered metrics.' },
      { front: 'Why can’t EV be paired with net income?', back: 'EV includes all capital providers, net income is only for equity holders.' },
      { front: 'What is the trading comps process?', back: 'Select peers, collect data, calculate multiples, apply to target.' },
      { front: 'What is a peer group?', back: 'Companies with similar operations and financials.' },
      { front: 'Why is the median used in comps?', back: 'It reduces the impact of outliers.' },
      { front: 'What is calendarization?', back: 'Adjusting financials to align fiscal years.' },
      { front: 'What are transaction comps?', back: 'Valuation using acquisition prices of similar companies.' },
      { front: 'What is a control premium?', back: 'Extra amount paid to gain control of a company.' },
      { front: 'Why are transaction comps higher?', back: 'They include control premiums and synergies.' },
      { front: 'What factors increase premiums?', back: 'Competition, synergies, scarcity, undervaluation.' },
      { front: 'What is the P/E ratio?', back: 'Price per share divided by earnings per share.' },
      { front: 'What does P/E represent?', back: 'How much investors pay for $1 of earnings.' },
      { front: 'What does a high P/E mean?', back: 'Expected high growth or strong future performance.' },
      { front: 'What is the PEG ratio?', back: 'P/E divided by growth rate.' },
      { front: 'How is PEG interpreted?', back: '~1 = fair, <1 = undervalued, >1 = overvalued.' },
      { front: 'What is the P/B ratio used for?', back: 'Valuing financial institutions.' },
      { front: 'When are revenue multiples used?', back: 'When companies have negative earnings.' },
      { front: 'What is sum-of-the-parts (SOTP)?', back: 'Valuing each business segment separately.' },
      { front: 'What is an illiquidity discount?', back: 'A discount applied to private companies due to lack of liquidity.' },
      { front: 'Why might DCF not work?', back: 'Lack of data or long-term negative cash flows.' },
      { front: 'What are buybacks?', back: 'A company repurchasing its shares.' },
      { front: 'Why do companies do buybacks?', back: 'To return capital or signal undervaluation.' },
      { front: 'What are dividends?', back: 'Cash payments to shareholders.' },
      { front: 'When are dividends common?', back: 'In mature companies.' },
      { front: 'What are non-operating items?', back: 'Income or expenses not related to core business (excluded in valuation).' }
    ],
    tests: [
      {
        title: 'Valuation Methods — Test',
        questions: [
          {
            id: 'valuation_test_q1',
            type: 'mcq',
            prompt: 'What does present value mean?',
            options: ['Money loses value over time', 'A dollar today is worth less than a dollar tomorrow', 'A dollar today is worth more than a dollar in the future', 'Cash flows are equal across time'],
            answer: 'A dollar today is worth more than a dollar in the future',
            explanation: 'Present value reflects the time value of money—money today can be invested to earn returns.'
          },
          {
            id: 'valuation_test_q2',
            type: 'mcq',
            prompt: 'Why are future cash flows discounted?',
            options: ['To increase valuation', 'Because future cash flows are riskier and delayed', 'To match accounting rules', 'To simplify calculations'],
            answer: 'Because future cash flows are riskier and delayed',
            explanation: 'Future cash flows are worth less due to risk and time delay.'
          },
          {
            id: 'valuation_test_q3',
            type: 'mcq',
            prompt: 'What is intrinsic valuation?',
            options: ['Valuing based on market comparisons', 'Valuing based on accounting rules', 'Valuing based on future cash flows', 'Valuing based on stock price'],
            answer: 'Valuing based on future cash flows',
            explanation: 'Intrinsic valuation uses the present value of expected future cash flows.'
          },
          {
            id: 'valuation_test_q4',
            type: 'mcq',
            prompt: 'What is equity value?',
            options: ['Total company value', 'Value to all investors', 'Value to shareholders', 'Value of assets'],
            answer: 'Value to shareholders',
            explanation: 'Equity value belongs only to common shareholders.'
          },
          {
            id: 'valuation_test_q5',
            type: 'mcq',
            prompt: 'What is enterprise value (EV)?',
            options: ['Value to equity holders only', 'Value of assets only', 'Value to all capital providers', 'Market capitalization'],
            answer: 'Value to all capital providers',
            explanation: 'EV includes equity, debt, and other claims.'
          },
          {
            id: 'valuation_test_q6',
            type: 'mcq',
            prompt: 'How is net debt calculated?',
            options: ['Debt + cash', 'Debt − equity', 'Debt − cash', 'Equity − cash'],
            answer: 'Debt − cash',
            explanation: 'Net debt = total debt minus cash.'
          },
          {
            id: 'valuation_test_q7',
            type: 'mcq',
            prompt: 'Why is cash subtracted when calculating net debt?',
            options: ['It increases value', 'It reduces liabilities', 'It represents operating income', 'It increases equity'],
            answer: 'It reduces liabilities',
            explanation: 'Cash can be used to pay down debt, reducing obligations.'
          },
          {
            id: 'valuation_test_q8',
            type: 'mcq',
            prompt: 'What does negative net debt mean?',
            options: ['Company is bankrupt', 'Company has more debt than assets', 'Company has more cash than debt', 'Company has no equity'],
            answer: 'Company has more cash than debt',
            explanation: 'Excess cash reduces net debt below zero.'
          },
          {
            id: 'valuation_test_q9',
            type: 'mcq',
            prompt: 'What are diluted shares?',
            options: ['Only basic shares outstanding', 'Shares excluding options', 'Shares including potential dilution', 'Shares owned by insiders'],
            answer: 'Shares including potential dilution',
            explanation: 'Includes options, warrants, and convertible securities.'
          },
          {
            id: 'valuation_test_q10',
            type: 'mcq',
            prompt: 'What does the Treasury Stock Method assume?',
            options: ['No options are exercised', 'Options are ignored', 'In-the-money options are exercised and shares repurchased', 'All shares are diluted fully'],
            answer: 'In-the-money options are exercised and shares repurchased',
            explanation: 'It assumes proceeds from exercised options are used to buy back shares.'
          },
          {
            id: 'valuation_test_q11',
            type: 'mcq',
            prompt: 'What does “in-the-money” mean?',
            options: ['Option is worthless', 'Option exercise is profitable', 'Stock price is zero', 'Option is expired'],
            answer: 'Option exercise is profitable',
            explanation: 'Strike price is below the current stock price.'
          },
          {
            id: 'valuation_test_q12',
            type: 'mcq',
            prompt: 'Which is an intrinsic valuation method?',
            options: ['Trading comps', 'Transaction comps', 'DCF', 'P/E ratio'],
            answer: 'DCF',
            explanation: 'DCF is based on future cash flows, not market comparisons.'
          },
          {
            id: 'valuation_test_q13',
            type: 'mcq',
            prompt: 'What are trading comps?',
            options: ['Valuation using acquisitions', 'Valuation using public company multiples', 'Valuation using DCF', 'Valuation using liquidation'],
            answer: 'Valuation using public company multiples',
            explanation: 'Uses market pricing of similar public companies.'
          },
          {
            id: 'valuation_test_q14',
            type: 'mcq',
            prompt: 'What are transaction comps?',
            options: ['Based on stock prices', 'Based on accounting values', 'Based on acquisition prices', 'Based on cash flow'],
            answer: 'Based on acquisition prices',
            explanation: 'Uses prices paid in M&A deals.'
          },
          {
            id: 'valuation_test_q15',
            type: 'mcq',
            prompt: 'What does a DCF calculate?',
            options: ['Accounting profit', 'Market price', 'Present value of future cash flows', 'Net income'],
            answer: 'Present value of future cash flows',
            explanation: 'DCF discounts projected cash flows to present value.'
          },
          {
            id: 'valuation_test_q16',
            type: 'mcq',
            prompt: 'What is the first step in a DCF?',
            options: ['Calculate terminal value', 'Forecast free cash flow', 'Divide by shares', 'Subtract debt'],
            answer: 'Forecast free cash flow',
            explanation: 'You must project future cash flows first.'
          },
          {
            id: 'valuation_test_q17',
            type: 'mcq',
            prompt: 'What is terminal value?',
            options: ['Final accounting profit', 'Value of assets', 'Value of cash flows beyond forecast period', 'Cost of capital'],
            answer: 'Value of cash flows beyond forecast period',
            explanation: 'Captures long-term value after projections end.'
          },
          {
            id: 'valuation_test_q18',
            type: 'mcq',
            prompt: 'What is free cash flow (FCF)?',
            options: ['Revenue − expenses', 'Net income', 'Cash from operations − CapEx', 'EBITDA'],
            answer: 'Cash from operations − CapEx',
            explanation: 'Measures cash available after maintaining operations.'
          },
          {
            id: 'valuation_test_q19',
            type: 'mcq',
            prompt: 'What is unlevered free cash flow (FCFF)?',
            options: ['Cash to equity only', 'Cash to debt only', 'Cash to all capital providers', 'Cash after dividends'],
            answer: 'Cash to all capital providers',
            explanation: 'Available to both debt and equity investors.'
          },
          {
            id: 'valuation_test_q20',
            type: 'mcq',
            prompt: 'What is levered free cash flow (FCFE)?',
            options: ['Cash before debt payments', 'Cash to all investors', 'Cash after debt payments', 'Cash before taxes'],
            answer: 'Cash after debt payments',
            explanation: 'Only available to equity holders.'
          },
          {
            id: 'valuation_test_q21',
            type: 'mcq',
            prompt: 'What is WACC?',
            options: ['Cost of equity only', 'Cost of debt only', 'Weighted average cost of capital', 'Market return'],
            answer: 'Weighted average cost of capital',
            explanation: 'Average return required by all capital providers.'
          },
          {
            id: 'valuation_test_q22',
            type: 'mcq',
            prompt: 'Why is debt cheaper than equity?',
            options: ['Higher risk', 'Tax-deductible interest and priority in repayment', 'More volatile', 'No risk'],
            answer: 'Tax-deductible interest and priority in repayment',
            explanation: 'Interest tax shield + senior claim lowers cost.'
          },
          {
            id: 'valuation_test_q23',
            type: 'mcq',
            prompt: 'What does CAPM calculate?',
            options: ['Cost of debt', 'Enterprise value', 'Cost of equity', 'Net income'],
            answer: 'Cost of equity',
            explanation: 'CAPM estimates required return for equity investors.'
          },
          {
            id: 'valuation_test_q24',
            type: 'mcq',
            prompt: 'What is the risk-free rate?',
            options: ['Stock return', 'Corporate bond yield', 'Government bond yield', 'Inflation rate'],
            answer: 'Government bond yield',
            explanation: 'Typically based on 10-year Treasury yields.'
          },
          {
            id: 'valuation_test_q25',
            type: 'mcq',
            prompt: 'What does beta measure?',
            options: ['Profitability', 'Growth rate', 'Volatility relative to the market', 'Cash flow'],
            answer: 'Volatility relative to the market',
            explanation: 'Beta reflects systematic risk.'
          },
          {
            id: 'valuation_test_q26',
            type: 'mcq',
            prompt: 'What happens when beta increases?',
            options: ['Cost of equity decreases', 'Risk decreases', 'Cost of equity increases', 'Value increases'],
            answer: 'Cost of equity increases',
            explanation: 'Higher risk → higher required return.'
          },
          {
            id: 'valuation_test_q27',
            type: 'mcq',
            prompt: 'What is a valuation multiple?',
            options: ['Profit measure', 'Ratio of value to a financial metric', 'Cash flow measure', 'Debt ratio'],
            answer: 'Ratio of value to a financial metric',
            explanation: 'Standardizes value across companies.'
          },
          {
            id: 'valuation_test_q28',
            type: 'mcq',
            prompt: 'Which is an EV multiple?',
            options: ['P/E', 'EV/EBITDA', 'Price/Book', 'EPS'],
            answer: 'EV/EBITDA',
            explanation: 'EV multiples use enterprise value.'
          },
          {
            id: 'valuation_test_q29',
            type: 'mcq',
            prompt: 'Why can’t EV be paired with net income?',
            options: ['Different currencies', 'Net income is too small', 'EV includes all capital, net income is equity-only', 'Accounting rules'],
            answer: 'EV includes all capital, net income is equity-only',
            explanation: 'Must match stakeholders (EV = all, NI = equity).'
          },
          {
            id: 'valuation_test_q30',
            type: 'mcq',
            prompt: 'Why is median used in comps?',
            options: ['Easier to calculate', 'Removes outliers', 'Higher values', 'Required by law'],
            answer: 'Removes outliers',
            explanation: 'Median reduces distortion from extreme values.'
          },
          {
            id: 'valuation_test_q31',
            type: 'mcq',
            prompt: 'What is a control premium?',
            options: ['Discount for illiquidity', 'Extra paid to gain control', 'Debt repayment', 'Dividend payment'],
            answer: 'Extra paid to gain control',
            explanation: 'Buyers pay more to acquire control.'
          },
          {
            id: 'valuation_test_q32',
            type: 'mcq',
            prompt: 'Why are transaction comps usually higher?',
            options: ['Lower risk', 'Include control premiums and synergies', 'Use accounting values', 'Ignore debt'],
            answer: 'Include control premiums and synergies',
            explanation: 'Buyers pay premiums in acquisitions.'
          },
          {
            id: 'valuation_test_q33',
            type: 'mcq',
            prompt: 'What does P/E measure?',
            options: ['Cash flow', 'Value per asset', 'Price per $1 of earnings', 'Revenue growth'],
            answer: 'Price per $1 of earnings',
            explanation: 'Indicates how much investors pay for earnings.'
          },
          {
            id: 'valuation_test_q34',
            type: 'mcq',
            prompt: 'What does PEG ratio adjust for?',
            options: ['Risk', 'Growth', 'Debt', 'Cash flow'],
            answer: 'Growth',
            explanation: 'PEG = P/E divided by growth rate.'
          },
          {
            id: 'valuation_test_q35',
            type: 'mcq',
            prompt: 'When are revenue multiples used?',
            options: ['High profits', 'Negative earnings', 'Stable companies', 'Low growth'],
            answer: 'Negative earnings',
            explanation: 'Used when earnings are negative.'
          },
          {
            id: 'valuation_test_q36',
            type: 'mcq',
            prompt: 'What is sum-of-the-parts (SOTP)?',
            options: ['Valuing whole company at once', 'Valuing each segment separately', 'Using only DCF', 'Using only comps'],
            answer: 'Valuing each segment separately',
            explanation: 'Each business unit is valued independently.'
          },
          {
            id: 'valuation_test_q37',
            type: 'mcq',
            prompt: 'What is an illiquidity discount?',
            options: ['Premium for control', 'Discount for lack of trading ability', 'Tax adjustment', 'Growth adjustment'],
            answer: 'Discount for lack of trading ability',
            explanation: 'Private companies are harder to sell.'
          },
          {
            id: 'valuation_test_q38',
            type: 'mcq',
            prompt: 'Why might DCF not work well?',
            options: ['Too simple', 'No formulas', 'Lack of data or negative cash flows', 'Too many comps'],
            answer: 'Lack of data or negative cash flows',
            explanation: 'DCF relies heavily on reliable projections.'
          }
        ]
      }
    ]
  },
  'financial-statements': {
    lessons: [
      {
        title: 'How to Pitch a Stock (Fundamental vs Trading)',
        summary: 'A stock pitch is a structured explanation of an investment idea, typically used in interviews or on the job.',
        content: [
          'A stock pitch is a structured explanation of an investment idea, typically used in interviews or on the job. The goal is to clearly communicate why a stock will go up (long) or down (short), supported by logical reasoning, financial analysis, and market understanding.',
          'A fundamental pitch focuses on long-term value. You begin by introducing the company and explaining its business model, including how it generates revenue and what products or services it offers. You then break down its key business segments and explain where growth is coming from. This could include industry tailwinds (like regulation or demand growth), competitive advantages, or expansion into new markets.',
          'You also analyze financial performance, such as revenue growth, margins, and profitability. Investors often highlight catalysts — specific events that could drive the stock price higher, such as new contracts, regulatory changes, or product launches.',
          'A trading pitch, on the other hand, is shorter-term and more focused on price movement rather than deep business fundamentals. Traders care more about valuation multiples, earnings momentum, technical trends, and short-term catalysts. The holding period is typically much shorter.',
          'Regardless of type, every pitch should include:'
        ],
        bullets: [
          'a clear recommendation (buy or sell)',
          'key drivers of the thesis',
          'a valuation or price target',
          'risks and how they could impact the thesis'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What is the main difference between a fundamental pitch and a trading pitch?'
      },
      {
        title: 'Key Questions When Analyzing a Company',
        summary: 'Before investing in a company, you need to fully understand the business.',
        content: [
          'Before investing in a company, you need to fully understand the business. A strong analysis always answers three core questions:',
        ],
        bullets: [
          'Where has the company been?',
          'Where is it today?',
          'Where is it going?'
        ],
        contentAfterBullets: [
          'To do this, investors ask detailed questions. First, they evaluate the company’s business model — how it makes money and whether its revenue is stable or recurring. Then, they assess management, including experience, strategy, and execution ability.',
          'Next, investors analyze the company’s products and services, asking whether they provide real value to customers and whether demand is likely to grow. They also examine the company’s industry and competitive environment to determine whether it has a strong position.',
          'Financial analysis is critical. Investors look at:'
        ],
        definitionBullets: [
          'revenue growth trends',
          'profit margins',
          'cash flow sustainability',
          'earnings per share (EPS)'
        ],
        closing: [
          'Finally, investors identify risks and growth opportunities. Risks could include competition, regulation, or economic downturns. Growth could come from new markets, innovation, or increased demand.',
          'A key part of strong investing is challenging your own thinking. By questioning your assumptions and considering opposing viewpoints, you strengthen your overall investment thesis.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'Why is it important to question your own assumptions when analyzing a company?'
      },
      {
        title: 'Hedge Fund Investment Strategies',
        summary: 'Hedge funds use a wide range of strategies to generate returns, often combining multiple approaches.',
        content: [
          'Hedge funds use a wide range of strategies to generate returns, often combining multiple approaches.',
          'The most common is long-short equity, where investors buy stocks they believe are undervalued and short stocks they believe are overvalued. This helps reduce overall market risk.',
          'Event-driven strategies focus on corporate events like mergers, acquisitions, or restructurings. These events often create pricing inefficiencies that investors can exploit.',
          'Activist investors take large stakes in underperforming companies and push management to make changes, such as improving operations or selling parts of the business.',
          'Quantitative strategies rely on algorithms and data analysis to identify patterns and execute trades automatically.',
          'Arbitrage strategies aim to profit from price differences between related assets, such as bonds and stocks.',
          'Other strategies include long-only investing (buying undervalued stocks for the long term), short-only investing (betting against companies), and market-neutral strategies (balancing long and short positions).',
          'Each strategy has different levels of risk, return, and time horizon.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What does a long-short strategy try to do?'
      },
      {
        title: 'Long-Short vs Market Neutral Investing',
        summary: 'While both strategies involve buying and shorting stocks, their goals are different.',
        content: [
          'While both strategies involve buying and shorting stocks, their goals are different.',
          'Long-short funds aim to generate returns from both stock selection and market movements. They may have more long positions than short (net long) or vice versa, depending on their outlook. This means they still have some exposure to overall market direction.',
          'Market-neutral funds, however, try to eliminate market risk entirely. They carefully balance long and short positions so that gains and losses from market movements cancel out. Their goal is to generate returns purely from picking the right stocks, not from market trends.',
          'Because of this, market-neutral funds tend to have:'
        ],
        bullets: [
          'lower risk',
          'more stable returns',
          'less upside potential'
        ],
        closing: [
          'Long-short funds can achieve higher returns but also take on more risk.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What is the goal of a market-neutral fund?'
      },
      {
        title: 'Hedging and Risk Management',
        summary: 'Hedging is a risk management strategy used to protect against potential losses.',
        content: [
          'Hedging is a risk management strategy used to protect against potential losses. Instead of trying to avoid risk entirely, investors take offsetting positions that reduce the impact of negative outcomes.',
          'For example, an investor who owns a stock might buy a put option to protect against a decline in price. If the stock falls, the put option increases in value, offsetting the loss.',
          'Hedging is commonly done using derivatives such as options, futures, or swaps. While hedging reduces downside risk, it also limits potential upside gains because the hedge has a cost.',
          'The goal of hedging is not to eliminate risk completely, but to create a more balanced and controlled risk profile.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What is the main purpose of hedging?'
      },
      {
        title: 'Gross vs Net Exposure',
        summary: 'Exposure measures how much risk a portfolio has.',
        content: [
          'Exposure measures how much risk a portfolio has.',
          'Gross exposure is the total amount invested in long and short positions combined. It reflects how leveraged a portfolio is.',
          'Net exposure is the difference between long and short positions. It shows how exposed the portfolio is to overall market direction.',
          'For example:'
        ],
        bullets: [
          'High gross exposure = high leverage',
          'High net exposure = strong market direction'
        ],
        closing: [
          'Understanding both helps investors manage risk and understand how their portfolio will perform in different market conditions.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'Which exposure measures market direction?'
      },
      {
        title: 'Maximum Drawdown',
        summary: 'Maximum drawdown (MDD) measures the largest decline in a portfolio’s value from its highest point to its lowest point over a given period.',
        content: [
          'Maximum drawdown (MDD) measures the largest decline in a portfolio’s value from its highest point to its lowest point over a given period.',
          'It is an important risk metric because it shows the worst-case loss an investor could have experienced. This helps investors understand how much risk they are taking and whether they can tolerate potential losses.',
          'MDD is especially meaningful over long periods that include full economic cycles, including recessions and market crashes.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What does maximum drawdown measure?'
      },
      {
        title: 'Beta vs Alpha',
        summary: 'Beta and alpha are key concepts in investing.',
        content: [
          'Beta and alpha are key concepts in investing.',
          'Beta measures how much a portfolio moves relative to the market. A beta of 1 means the portfolio moves in line with the market. A beta greater than 1 means higher volatility.',
          'Alpha measures excess return — how much a portfolio outperforms the market.',
          'Investors aim to generate alpha, as it represents true skill in investing. Beta, on the other hand, reflects exposure to market risk.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What does alpha measure?'
      },
      {
        title: 'Investment Strategies (Momentum vs Mean Reversion)',
        summary: 'Different strategies rely on different assumptions about how markets behave.',
        content: [
          'Different strategies rely on different assumptions about how markets behave.',
          'Momentum investing assumes that trends will continue. Investors buy stocks that are rising and sell those that are falling.',
          'Mean reversion assumes that prices will return to their average over time. Investors buy undervalued assets and sell overvalued ones.',
          'These strategies reflect different beliefs about market efficiency and investor behavior.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What does momentum investing try to do?'
      },
      {
        title: 'Quant vs Human Investing',
        summary: 'Quantitative investing uses data, algorithms, and models to make decisions.',
        content: [
          'Quantitative investing uses data, algorithms, and models to make decisions. These systems can process large amounts of information quickly and without emotional bias.',
          'Human investors rely on experience, judgment, and qualitative insights. They can adapt to new situations and interpret information that is not easily quantified.',
          'In practice, many firms combine both approaches to improve decision-making.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What is one advantage of quantitative investing?'
      },
      {
        title: 'Diversification and Portfolio Theory',
        summary: 'Diversification involves spreading investments across different assets, industries, and regions to reduce risk.',
        content: [
          'Diversification involves spreading investments across different assets, industries, and regions to reduce risk.',
          'Modern Portfolio Theory (MPT) shows that combining assets that are not correlated can reduce overall portfolio risk without sacrificing returns.',
          'The goal is to build an “efficient portfolio” that maximizes return for a given level of risk.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What is the goal of diversification?'
      },
      {
        title: 'Value Investing and Margin of Safety',
        summary: 'Value investing focuses on finding stocks that are trading below their true value.',
        content: [
          'Value investing focuses on finding stocks that are trading below their true value.',
          'A key concept is the margin of safety, which is the difference between a stock’s intrinsic value and its current price. This provides protection against errors in analysis or unexpected risks.',
          'Value investors aim to buy undervalued stocks and wait for the market to recognize their true worth.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What is a margin of safety?'
      },
      {
        title: 'Efficient Market Hypothesis (EMH)',
        summary: 'The Efficient Market Hypothesis states that asset prices reflect all available information.',
        content: [
          'The Efficient Market Hypothesis states that asset prices reflect all available information.',
          'There are three levels:'
        ],
        bullets: [
          'weak (past data included)',
          'semi-strong (public info included)',
          'strong (all info included)'
        ],
        closing: [
          'If markets are fully efficient, consistently beating the market is very difficult.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What does EMH say about prices?'
      },
      {
        title: 'Sales & Trading and Derivatives',
        summary: 'Sales & Trading is responsible for selling securities and executing trades.',
        content: [
          'Sales & Trading is responsible for selling securities and executing trades.',
          'Salespeople work with clients, while traders execute orders and sometimes take positions.',
          'Derivatives are financial instruments whose value depends on an underlying asset, such as a stock or commodity.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What is a derivative?'
      },
      {
        title: 'Options Basics',
        summary: 'Options are contracts that give the holder the right, but not the obligation, to buy or sell an asset at a fixed price.',
        content: [
          'Options are contracts that give the holder the right, but not the obligation, to buy or sell an asset at a fixed price.',
          'Call option = right to buy',
          'Put option = right to sell',
          'Option prices are influenced by:'
        ],
        bullets: [
          'underlying price',
          'time to expiration',
          'volatility'
        ],
        closing: [
          'Higher volatility increases option value because there is more potential for price movement.'
        ],
        questionHeading: 'Question',
        practiceQuestion: 'What does a call option allow you to do?'
      }
    ],
    flashcards: [
      { front: 'What is a stock pitch?', back: 'A structured explanation of an investment idea that explains why a stock should go up or down.' },
      { front: 'What is the goal of a stock pitch?', back: 'To clearly communicate an investment recommendation using logic, financial analysis, and market understanding.' },
      { front: 'What is a fundamental pitch?', back: 'A stock pitch focused on long-term value and business fundamentals.' },
      { front: 'What is included in a fundamental pitch?', back: 'The company’s business model, growth drivers, financial performance, catalysts, valuation, and risks.' },
      { front: 'What is a trading pitch?', back: 'A shorter-term pitch focused more on price movement than deep business fundamentals.' },
      { front: 'What do traders focus on in a trading pitch?', back: 'Valuation multiples, earnings momentum, technical trends, and short-term catalysts.' },
      { front: 'What is the main difference between a fundamental pitch and a trading pitch?', back: 'A fundamental pitch focuses on long-term business value, while a trading pitch focuses on shorter-term price movement.' },
      { front: 'What should every stock pitch include?', back: 'A clear recommendation, key thesis drivers, a valuation or price target, and risks.' },
      { front: 'What are the three core questions when analyzing a company?', back: 'Where has the company been, where is it today, and where is it going?' },
      { front: 'Why is it important to understand a company’s business model?', back: 'Because it shows how the company makes money and whether its revenue is stable or recurring.' },
      { front: 'Why do investors analyze management?', back: 'To judge management’s experience, strategy, and ability to execute.' },
      { front: 'Why do investors study products and services?', back: 'To determine whether they create value for customers and whether demand can grow.' },
      { front: 'What financial metrics do investors commonly analyze?', back: 'Revenue growth, profit margins, cash flow sustainability, and EPS.' },
      { front: 'Why is it important to question your own assumptions when analyzing a company?', back: 'Because it strengthens your thesis by testing weaknesses and considering opposing views.' },
      { front: 'What is a long-short equity strategy?', back: 'Buying undervalued stocks and shorting overvalued stocks.' },
      { front: 'What does a long-short strategy try to do?', back: 'Generate returns from both long and short positions while reducing overall market risk.' },
      { front: 'What is an event-driven strategy?', back: 'An investment strategy focused on corporate events like mergers, acquisitions, or restructurings.' },
      { front: 'What is activist investing?', back: 'Taking a large stake in a company and pushing management to make changes.' },
      { front: 'What is a quantitative strategy?', back: 'A strategy that uses algorithms and data analysis to identify and execute trades.' },
      { front: 'What is an arbitrage strategy?', back: 'A strategy that profits from price differences between related assets.' },
      { front: 'What is a long-only strategy?', back: 'Buying undervalued stocks for the long term without shorting.' },
      { front: 'What is a short-only strategy?', back: 'Betting against companies expected to decline in value.' },
      { front: 'What is a market-neutral strategy?', back: 'A strategy that balances long and short positions to reduce market risk.' },
      { front: 'What is the difference between long-short and market-neutral investing?', back: 'Long-short still has some market exposure, while market-neutral aims to eliminate market risk.' },
      { front: 'What is the goal of a market-neutral fund?', back: 'To generate returns from stock selection rather than market movements.' },
      { front: 'Why do market-neutral funds usually have lower risk?', back: 'Because long and short positions are balanced to offset market movements.' },
      { front: 'What is hedging?', back: 'A risk management strategy that uses offsetting positions to reduce potential losses.' },
      { front: 'What is the main purpose of hedging?', back: 'To reduce downside risk and create a more controlled risk profile.' },
      { front: 'What are common instruments used for hedging?', back: 'Options, futures, and swaps.' },
      { front: 'What is gross exposure?', back: 'The total value of long and short positions combined.' },
      { front: 'What does gross exposure measure?', back: 'How leveraged a portfolio is.' },
      { front: 'What is net exposure?', back: 'The difference between long and short positions.' },
      { front: 'Which exposure measures market direction?', back: 'Net exposure.' },
      { front: 'What does high gross exposure mean?', back: 'High leverage.' },
      { front: 'What does high net exposure mean?', back: 'Strong exposure to market direction.' },
      { front: 'What is maximum drawdown (MDD)?', back: 'The largest drop in portfolio value from peak to trough over a period.' },
      { front: 'What does maximum drawdown measure?', back: 'The worst decline an investor could have experienced.' },
      { front: 'Why is maximum drawdown important?', back: 'It helps investors understand worst-case risk and loss tolerance.' },
      { front: 'What is beta?', back: 'A measure of how much a portfolio moves relative to the market.' },
      { front: 'What does beta measure?', back: 'Exposure to market risk and volatility relative to the market.' },
      { front: 'What is alpha?', back: 'Excess return above the market.' },
      { front: 'What does alpha measure?', back: 'How much a portfolio outperforms the market.' },
      { front: 'Why do investors want alpha?', back: 'Because it represents true investment skill rather than simple market exposure.' },
      { front: 'What is momentum investing?', back: 'A strategy that buys rising stocks and sells falling stocks.' },
      { front: 'What does momentum investing try to do?', back: 'Profit from trends continuing.' },
      { front: 'What is mean reversion investing?', back: 'A strategy based on the idea that prices return to their average over time.' },
      { front: 'What does mean reversion investing try to do?', back: 'Buy undervalued assets and sell overvalued ones.' },
      { front: 'What is quantitative investing?', back: 'Investing that uses data, algorithms, and models to make decisions.' },
      { front: 'What is one advantage of quantitative investing?', back: 'It can process large amounts of data quickly without emotional bias.' },
      { front: 'What is human investing?', back: 'Investing based on judgment, experience, and qualitative analysis.' },
      { front: 'What is one advantage of human investing?', back: 'Humans can interpret information and adapt to situations that models may miss.' },
      { front: 'What is diversification?', back: 'Spreading investments across assets, industries, and regions to reduce risk.' },
      { front: 'What is the goal of diversification?', back: 'To reduce portfolio risk without sacrificing expected returns.' },
      { front: 'What does Modern Portfolio Theory (MPT) say?', back: 'Combining less correlated assets can lower overall risk.' },
      { front: 'What is an efficient portfolio?', back: 'A portfolio that maximizes return for a given level of risk.' },
      { front: 'What is value investing?', back: 'Investing in stocks trading below their true value.' },
      { front: 'What is a margin of safety?', back: 'The gap between intrinsic value and current market price.' },
      { front: 'Why is a margin of safety important?', back: 'It protects against mistakes in analysis and unexpected risks.' },
      { front: 'What does the Efficient Market Hypothesis (EMH) say?', back: 'Asset prices reflect available information.' },
      { front: 'What are the three forms of EMH?', back: 'Weak, semi-strong, and strong.' },
      { front: 'What does weak-form EMH mean?', back: 'Prices reflect past market data.' },
      { front: 'What does semi-strong EMH mean?', back: 'Prices reflect all public information.' },
      { front: 'What does strong-form EMH mean?', back: 'Prices reflect all information, public and private.' },
      { front: 'What is Sales & Trading?', back: 'The part of finance responsible for selling securities and executing trades.' },
      { front: 'What do salespeople do in Sales & Trading?', back: 'Work with clients and communicate investment products.' },
      { front: 'What do traders do in Sales & Trading?', back: 'Execute trades and sometimes take positions.' },
      { front: 'What is a derivative?', back: 'A financial instrument whose value depends on an underlying asset.' },
      { front: 'What are examples of underlying assets for derivatives?', back: 'Stocks, bonds, commodities, or other securities.' },
      { front: 'What is an option?', back: 'A contract giving the holder the right, but not the obligation, to buy or sell an asset at a fixed price.' },
      { front: 'What is a call option?', back: 'The right to buy an asset at a fixed price.' },
      { front: 'What is a put option?', back: 'The right to sell an asset at a fixed price.' },
      { front: 'What does a call option allow you to do?', back: 'Buy an asset at a fixed price.' },
      { front: 'What affects option prices?', back: 'Underlying asset price, time to expiration, and volatility.' },
      { front: 'Why does higher volatility increase option value?', back: 'Because greater price movement creates more potential upside for the option holder.' }
    ],
    tests: [
      {
        title: 'Capital Markets — Test',
        questions: [
          {
            id: 'capital_markets_test_q1',
            type: 'mcq',
            prompt: 'What is the main goal of a stock pitch?',
            options: ['To describe a company’s history', 'To recommend a stock using analysis and reasoning', 'To explain accounting rules', 'To calculate financial ratios'],
            answer: 'To recommend a stock using analysis and reasoning',
            explanation: 'A stock pitch clearly explains why a stock should go up or down using logic, data, and analysis.'
          },
          {
            id: 'capital_markets_test_q2',
            type: 'mcq',
            prompt: 'What is the key difference between a fundamental pitch and a trading pitch?',
            options: ['Fundamental uses charts, trading uses financials', 'Fundamental is short-term, trading is long-term', 'Fundamental focuses on long-term value, trading focuses on short-term price movement', 'There is no difference'],
            answer: 'Fundamental focuses on long-term value, trading focuses on short-term price movement',
            explanation: 'Fundamental pitches analyze business value over time, while trading pitches focus on short-term price catalysts.'
          },
          {
            id: 'capital_markets_test_q3',
            type: 'mcq',
            prompt: 'Which of the following is NOT required in a stock pitch?',
            options: ['Recommendation (buy/sell)', 'Thesis drivers', 'Valuation or price target', 'Company logo'],
            answer: 'Company logo',
            explanation: 'A pitch requires analysis, not visuals like logos.'
          },
          {
            id: 'capital_markets_test_q4',
            type: 'mcq',
            prompt: 'What are the three key questions when analyzing a company?',
            options: ['Revenue, profit, cash', 'Past, present, future', 'Assets, liabilities, equity', 'Risk, return, growth'],
            answer: 'Past, present, future',
            explanation: 'Strong analysis looks at where the company has been, where it is, and where it is going.'
          },
          {
            id: 'capital_markets_test_q5',
            type: 'mcq',
            prompt: 'Why is it important to question your own assumptions?',
            options: ['To make analysis longer', 'To reduce workload', 'To strengthen the investment thesis', 'To avoid risks'],
            answer: 'To strengthen the investment thesis',
            explanation: 'Challenging assumptions helps identify weaknesses and improves the thesis.'
          },
          {
            id: 'capital_markets_test_q6',
            type: 'mcq',
            prompt: 'What does a long-short strategy aim to do?',
            options: ['Only buy stocks', 'Only short stocks', 'Profit from both undervalued and overvalued stocks', 'Avoid market exposure entirely'],
            answer: 'Profit from both undervalued and overvalued stocks',
            explanation: 'Long-short funds buy undervalued stocks and short overvalued ones.'
          },
          {
            id: 'capital_markets_test_q7',
            type: 'mcq',
            prompt: 'What is the goal of a market-neutral strategy?',
            options: ['Maximize leverage', 'Eliminate market risk', 'Increase volatility', 'Follow market trends'],
            answer: 'Eliminate market risk',
            explanation: 'Market-neutral funds balance long and short positions to remove market exposure.'
          },
          {
            id: 'capital_markets_test_q8',
            type: 'mcq',
            prompt: 'What is hedging?',
            options: ['Increasing risk', 'Eliminating all risk', 'Taking offsetting positions to reduce risk', 'Buying only safe assets'],
            answer: 'Taking offsetting positions to reduce risk',
            explanation: 'Hedging reduces losses by offsetting risk with another position.'
          },
          {
            id: 'capital_markets_test_q9',
            type: 'mcq',
            prompt: 'What is the main purpose of hedging?',
            options: ['Increase profits', 'Reduce downside risk', 'Eliminate volatility completely', 'Avoid investing'],
            answer: 'Reduce downside risk',
            explanation: 'Hedging protects against losses but may limit upside.'
          },
          {
            id: 'capital_markets_test_q10',
            type: 'mcq',
            prompt: 'What does gross exposure measure?',
            options: ['Market direction', 'Profitability', 'Total leverage (long + short positions)', 'Cash flow'],
            answer: 'Total leverage (long + short positions)',
            explanation: 'Gross exposure reflects total capital at risk.'
          },
          {
            id: 'capital_markets_test_q11',
            type: 'mcq',
            prompt: 'What does net exposure measure?',
            options: ['Total assets', 'Market direction exposure', 'Cash balance', 'Debt level'],
            answer: 'Market direction exposure',
            explanation: 'Net exposure shows whether the portfolio is net long or short.'
          },
          {
            id: 'capital_markets_test_q12',
            type: 'mcq',
            prompt: 'What does maximum drawdown measure?',
            options: ['Total return', 'Average return', 'Largest decline from peak to trough', 'Volatility'],
            answer: 'Largest decline from peak to trough',
            explanation: 'It shows the worst loss experienced over a period.'
          },
          {
            id: 'capital_markets_test_q13',
            type: 'mcq',
            prompt: 'What does beta measure?',
            options: ['Profitability', 'Company growth', 'Volatility relative to the market', 'Cash flow'],
            answer: 'Volatility relative to the market',
            explanation: 'Beta reflects how much a stock moves with the market.'
          },
          {
            id: 'capital_markets_test_q14',
            type: 'mcq',
            prompt: 'What does alpha measure?',
            options: ['Market return', 'Risk level', 'Excess return over the market', 'Debt level'],
            answer: 'Excess return over the market',
            explanation: 'Alpha represents performance beyond market returns.'
          },
          {
            id: 'capital_markets_test_q15',
            type: 'mcq',
            prompt: 'What does momentum investing try to do?',
            options: ['Buy undervalued stocks', 'Follow trends', 'Avoid risk', 'Focus on dividends'],
            answer: 'Follow trends',
            explanation: 'Momentum investors buy winners and sell losers.'
          },
          {
            id: 'capital_markets_test_q16',
            type: 'mcq',
            prompt: 'What does mean reversion investing assume?',
            options: ['Trends continue forever', 'Prices stay constant', 'Prices return to average over time', 'Markets are inefficient'],
            answer: 'Prices return to average over time',
            explanation: 'It assumes prices eventually revert to normal levels.'
          },
          {
            id: 'capital_markets_test_q17',
            type: 'mcq',
            prompt: 'What is an advantage of quantitative investing?',
            options: ['Uses intuition', 'Avoids data', 'Processes large data quickly without emotion', 'Requires no models'],
            answer: 'Processes large data quickly without emotion',
            explanation: 'Quant models analyze large datasets efficiently and objectively.'
          },
          {
            id: 'capital_markets_test_q18',
            type: 'mcq',
            prompt: 'What is diversification?',
            options: ['Investing in one stock', 'Increasing leverage', 'Spreading investments to reduce risk', 'Avoiding markets'],
            answer: 'Spreading investments to reduce risk',
            explanation: 'Diversification lowers risk by spreading investments.'
          },
          {
            id: 'capital_markets_test_q19',
            type: 'mcq',
            prompt: 'What is the goal of diversification?',
            options: ['Maximize risk', 'Reduce returns', 'Reduce risk without sacrificing returns', 'Eliminate all losses'],
            answer: 'Reduce risk without sacrificing returns',
            explanation: 'Diversification improves risk-adjusted returns.'
          },
          {
            id: 'capital_markets_test_q20',
            type: 'mcq',
            prompt: 'What is a margin of safety?',
            options: ['Market price', 'Profit margin', 'Difference between intrinsic value and price', 'Debt level'],
            answer: 'Difference between intrinsic value and price',
            explanation: 'It protects against errors and uncertainty.'
          },
          {
            id: 'capital_markets_test_q21',
            type: 'mcq',
            prompt: 'What does EMH say about prices?',
            options: ['Prices are random', 'Prices reflect available information', 'Prices are always wrong', 'Prices follow trends'],
            answer: 'Prices reflect available information',
            explanation: 'EMH states markets incorporate information into prices.'
          },
          {
            id: 'capital_markets_test_q22',
            type: 'mcq',
            prompt: 'What is a derivative?',
            options: ['A stock', 'A bond', 'A financial instrument based on an underlying asset', 'A dividend'],
            answer: 'A financial instrument based on an underlying asset',
            explanation: 'Derivatives derive value from assets like stocks or commodities.'
          },
          {
            id: 'capital_markets_test_q23',
            type: 'mcq',
            prompt: 'What is a call option?',
            options: ['Right to sell', 'Right to buy', 'Obligation to buy', 'Obligation to sell'],
            answer: 'Right to buy',
            explanation: 'A call option gives the right (not obligation) to buy an asset.'
          },
          {
            id: 'capital_markets_test_q24',
            type: 'mcq',
            prompt: 'What is a put option?',
            options: ['Right to buy', 'Right to sell', 'Obligation to sell', 'Obligation to buy'],
            answer: 'Right to sell',
            explanation: 'A put option gives the right to sell an asset.'
          },
          {
            id: 'capital_markets_test_q25',
            type: 'mcq',
            prompt: 'What increases the value of an option?',
            options: ['Lower volatility', 'Higher volatility', 'Lower time', 'Lower price'],
            answer: 'Higher volatility',
            explanation: 'Higher volatility increases potential payoff, raising option value.'
          }
        ]
      }
    ]
  }
};

const flashcardState = {};
const testState = {};
const learnState = {};
const completedLessonIndexes = {
  accounting: new Set(),
  valuation: new Set(),
  'financial-statements': new Set()
};
const completedTestIndexes = {
  accounting: new Set(),
  valuation: new Set(),
  'financial-statements': new Set()
};
const lessonResponseState = {
  accounting: {},
  valuation: {},
  'financial-statements': {}
};

let isLogin = true;
let currentView = 'dashboard';
let currentUser = null;
let studyStreak = 0;
let progressState = {
  accounting: { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 15, totalTests: 1 },
  valuation: { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 15, totalTests: 1 },
  'financial-statements': { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 15, totalTests: 1 }
};

function showAuthMessage(message, type = 'error') {
  authMessage.textContent = message;
  authMessage.classList.remove('hidden', 'success', 'error');
  authMessage.classList.add(type);
}

function clearAuthMessage() {
  authMessage.textContent = '';
  authMessage.classList.add('hidden');
  authMessage.classList.remove('success', 'error');
}

function renderAuthMode() {
  loginTab.classList.toggle('is-active', isLogin);
  signupTab.classList.toggle('is-active', !isLogin);
  nameField.classList.toggle('hidden', isLogin);
  loginOnlyOptions.classList.toggle('hidden', !isLogin);
  submitAuth.textContent = isLogin ? 'Log In' : 'Sign Up';
  document.getElementById('name').required = !isLogin;
  clearAuthMessage();
}

function setView(viewName) {
  currentView = viewName;
  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.view === viewName);
  });

  pageViews.forEach((view) => {
    view.classList.toggle('hidden', view.dataset.viewContent !== viewName);
  });
}

function getTopicDetail(topicKey) {
  return document.querySelector(`[data-topic-detail="${topicKey}"]`);
}

function showTopicHome(topicKey) {
  const topicView = document.querySelector(`[data-topic-view="${topicKey}"]`);
  if (!topicView) return;
  topicView.querySelector('.topic-home').classList.remove('hidden');
  topicView.querySelector('.topic-detail').classList.add('hidden');
}

function titleFromTopic(topicKey) {
  if (topicKey === 'accounting') return 'Accounting Fundamentals';
  if (topicKey === 'valuation') return 'Valuation Methods';
  return 'Capital Markets';
}

function getStatusClass(status) {
  return status === 'Not Started' ? 'pill' : 'pill pill-blue';
}

function updateDashboardUI() {
  Object.keys(progressState).forEach((topicKey) => {
    const statusEl = document.getElementById(`topic-status-${topicKey}`);
    const countsEl = document.getElementById(`topic-counts-${topicKey}`);
    const topic = progressState[topicKey];

    if (statusEl) {
      statusEl.textContent = topic.status;
      statusEl.className = getStatusClass(topic.status);
    }

    if (countsEl) {
      countsEl.textContent = `Lessons: ${topic.lessonsCompleted}/${topic.totalLessons} · Tests: ${topic.testsCompleted}/${topic.totalTests}`;
    }
  });

  const totalTopics = Object.keys(progressState).length;
  const completedTopics = Object.values(progressState).filter((topic) => topic.status === 'Completed').length;

  let completedUnits = 0;
  let totalUnits = 0;

  Object.values(progressState).forEach((topic) => {
    completedUnits += topic.lessonsCompleted + topic.testsCompleted;
    totalUnits += topic.totalLessons + topic.totalTests;
  });

  const overallProgress = totalUnits > 0 ? Math.round((completedUnits / totalUnits) * 100) : 0;

  const overallProgressEl = document.getElementById('overall-progress-value');
  const topicsCompletedEl = document.getElementById('topics-completed-value');
  const streakEl = document.getElementById('study-streak-value');

  if (overallProgressEl) {
    overallProgressEl.textContent = `${overallProgress}%`;
  }

  if (topicsCompletedEl) {
    topicsCompletedEl.textContent = `${completedTopics}/${totalTopics}`;
  }

  if (streakEl) {
    streakEl.textContent = `${studyStreak} day${studyStreak === 1 ? '' : 's'}`;
  }
}

async function loadProgress() {
  try {
    const response = await fetch('api/progress.php');
    const result = await response.json();

    if (!response.ok || !result.success) {
      return;
    }

    progressState = result.progress;
    studyStreak = Number(result.studyStreak || 0);
    updateDashboardUI();
  } catch (error) {
    console.error('Failed to load progress:', error);
  }
}

async function saveProgress(topicKey, type, value) {
  try {
    const response = await fetch('api/progress.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        topicKey,
        type,
        value
      })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error('Failed to save progress:', result.message);
      return;
    }

    progressState[topicKey] = result.progress;
    studyStreak = Number(result.studyStreak || studyStreak || 0);
    updateDashboardUI();
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
}

function markLessonComplete(topicKey, lessonIndex) {
  if (completedLessonIndexes[topicKey].has(lessonIndex)) {
    return;
  }

  completedLessonIndexes[topicKey].add(lessonIndex);
  const completedCount = completedLessonIndexes[topicKey].size;
  saveProgress(topicKey, 'lessons', completedCount);
}

function markTestComplete(topicKey, testIndex) {
  if (completedTestIndexes[topicKey].has(testIndex)) {
    return;
  }

  completedTestIndexes[topicKey].add(testIndex);
  const completedCount = completedTestIndexes[topicKey].size;
  saveProgress(topicKey, 'tests', completedCount);
}

function renderLearn(topicKey) {
  const detail = getTopicDetail(topicKey);
  const lessons = topicContent[topicKey].lessons;

  detail.innerHTML = `
    <button type="button" class="back-btn" data-topic-back="${topicKey}">← Back to ${titleFromTopic(topicKey)}</button>
    <h4 class="detail-title">${titleFromTopic(topicKey)} · Learn</h4>
    <p class="subtitle">Choose a lesson to open its full learning page.</p>
    <div class="lesson-list">
      ${lessons.map((lesson, index) => `
        <article class="card lesson-card">
          <p class="lesson-label">Lesson ${index + 1}</p>
          <h5>${lesson.title}</h5>
          <p>${lesson.summary}</p>
          <button type="button" class="ghost-btn inline-btn lesson-open-btn" data-topic="${topicKey}" data-lesson-index="${index}">Open lesson</button>
        </article>
      `).join('')}
    </div>
  `;

  detail.querySelectorAll('.lesson-open-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const lessonIndex = Number(button.dataset.lessonIndex);
      learnState[topicKey] = { lessonIndex };
      renderLessonPage(topicKey);
    });
  });

  attachBackHandler(detail, topicKey);
}

function renderStructuredLessonPage(topicKey, lessonIndex) {
  const detail = getTopicDetail(topicKey);
  const lessons = topicContent[topicKey].lessons;
  const lesson = lessons[lessonIndex];
  const savedResponse = lessonResponseState[topicKey][lessonIndex] || '';

  const introHtml = Array.isArray(lesson.content)
    ? lesson.content.map((paragraph) => `<p>${paragraph}</p>`).join('')
    : '';

  const bulletsHtml = Array.isArray(lesson.bullets) && lesson.bullets.length > 0
    ? `
      <ul>
        ${lesson.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
      </ul>
    `
    : '';

  const contentAfterBulletsHtml = Array.isArray(lesson.contentAfterBullets)
    ? lesson.contentAfterBullets.map((paragraph) => `<p>${paragraph}</p>`).join('')
    : '';

  const definitionBulletsHtml = Array.isArray(lesson.definitionBullets) && lesson.definitionBullets.length > 0
    ? `
      <ul>
        ${lesson.definitionBullets.map((bullet) => `<li>${bullet}</li>`).join('')}
      </ul>
    `
    : '';

  const formulaHtml = lesson.formula
    ? `<div class="lesson-formula">${lesson.formula}</div>`
    : '';

  const contentAfterFormulaHtml = Array.isArray(lesson.contentAfterFormula)
    ? lesson.contentAfterFormula.map((paragraph) => `<p>${paragraph}</p>`).join('')
    : '';

  const closingHtml = Array.isArray(lesson.closing)
    ? lesson.closing.map((paragraph) => `<p>${paragraph}</p>`).join('')
    : '';

  detail.innerHTML = `
    <button type="button" class="back-btn" data-lesson-back="${topicKey}">← Back to lessons</button>
    <article class="card lesson-page">
      <p class="lesson-kicker">${titleFromTopic(topicKey)} — Learn</p>
      <h4 class="detail-title">Lesson ${lessonIndex + 1}: ${lesson.title}</h4>

      <section class="lesson-section">
        ${introHtml}
        ${bulletsHtml}
        ${contentAfterBulletsHtml}
        ${definitionBulletsHtml}
        ${formulaHtml}
        ${contentAfterFormulaHtml}
        ${closingHtml}
      </section>

      <section class="lesson-section">
        <div class="practice-box">
          <h5>${lesson.questionHeading || 'Practice Question'}</h5>
          <p>${lesson.practiceQuestion}</p>
          <form data-lesson-response-form="${topicKey}">
            <textarea
              id="lesson-response-${topicKey}-${lessonIndex}"
              name="lessonResponse"
              rows="6"
              placeholder="Write your response here..."
              required
            >${savedResponse}</textarea>
            <div style="margin-top: 12px; display: flex; gap: 10px; align-items: center;">
              <button type="submit" class="primary-btn inline-btn">Submit Response</button>
              <p class="grade-output" data-lesson-response-output="${topicKey}"></p>
            </div>
          </form>
        </div>
      </section>

      <div class="lesson-nav">
        <button type="button" class="ghost-btn" data-lesson-nav="prev" ${lessonIndex === 0 ? 'disabled' : ''}>Previous lesson</button>
        <button type="button" class="ghost-btn" data-lesson-nav="next" ${lessonIndex === lessons.length - 1 ? 'disabled' : ''}>Next lesson</button>
      </div>
    </article>
  `;

  detail.querySelector('[data-lesson-back]').addEventListener('click', () => {
    renderLearn(topicKey);
  });

  detail.querySelector(`[data-lesson-response-form="${topicKey}"]`).addEventListener('submit', (event) => {
    event.preventDefault();
    const textarea = detail.querySelector(`#lesson-response-${topicKey}-${lessonIndex}`);
    const output = detail.querySelector(`[data-lesson-response-output="${topicKey}"]`);
    const responseText = textarea.value.trim();

    if (!responseText) {
      output.textContent = 'Please write a response before submitting.';
      return;
    }

    lessonResponseState[topicKey][lessonIndex] = responseText;
    markLessonComplete(topicKey, lessonIndex);
    output.textContent = 'Written response counted and lesson marked complete.';
  });

  const prevBtn = detail.querySelector('[data-lesson-nav="prev"]');
  const nextBtn = detail.querySelector('[data-lesson-nav="next"]');

  prevBtn.addEventListener('click', () => {
    learnState[topicKey].lessonIndex -= 1;
    renderLessonPage(topicKey);
  });

  nextBtn.addEventListener('click', () => {
    learnState[topicKey].lessonIndex += 1;
    renderLessonPage(topicKey);
  });
}

function renderStandardLessonPage(topicKey, lessonIndex) {
  const detail = getTopicDetail(topicKey);
  const lessons = topicContent[topicKey].lessons;
  const lesson = lessons[lessonIndex];

  detail.innerHTML = `
    <button type="button" class="back-btn" data-lesson-back="${topicKey}">← Back to lessons</button>
    <article class="card lesson-page">
      <p class="lesson-kicker">Lesson ${lessonIndex + 1} of ${lessons.length}</p>
      <h4 class="detail-title">${lesson.title}</h4>
      <p class="lesson-summary">${lesson.summary}</p>

      <section class="lesson-section">
        <h5>Objective</h5>
        <p>${lesson.objective}</p>
      </section>

      <section class="lesson-section">
        <h5>Key Concepts</h5>
        <ul>
          ${lesson.keyPoints.map((point) => `<li>${point}</li>`).join('')}
        </ul>
      </section>

      <section class="lesson-section">
        <h5>Interview Example</h5>
        <p>${lesson.example}</p>
      </section>

      <div class="lesson-nav">
        <button type="button" class="ghost-btn" data-lesson-nav="prev" ${lessonIndex === 0 ? 'disabled' : ''}>Previous lesson</button>
        <button type="button" class="ghost-btn" data-lesson-nav="next" ${lessonIndex === lessons.length - 1 ? 'disabled' : ''}>Next lesson</button>
      </div>
    </article>
  `;

  detail.querySelector('[data-lesson-back]').addEventListener('click', () => {
    renderLearn(topicKey);
  });

  const prevBtn = detail.querySelector('[data-lesson-nav="prev"]');
  const nextBtn = detail.querySelector('[data-lesson-nav="next"]');

  prevBtn.addEventListener('click', () => {
    learnState[topicKey].lessonIndex -= 1;
    renderLessonPage(topicKey);
  });

  nextBtn.addEventListener('click', () => {
    learnState[topicKey].lessonIndex += 1;
    renderLessonPage(topicKey);
  });
}

function renderLessonPage(topicKey) {
  const lessonIndex = learnState[topicKey]?.lessonIndex ?? 0;

  if (topicKey === 'accounting' || topicKey === 'valuation' || topicKey === 'financial-statements') {
    renderStructuredLessonPage(topicKey, lessonIndex);
    return;
  }

  renderStandardLessonPage(topicKey, lessonIndex);
}

function ensureFlashcardState(topicKey) {
  if (!flashcardState[topicKey]) {
    flashcardState[topicKey] = { index: 0, flipped: false };
  }
}

function buildFlashcardExport(topicKey) {
  return topicContent[topicKey].flashcards
    .map((card) => `${card.front} — ${card.back}`)
    .join('\n');
}

async function copyFlashcards(topicKey) {
  const exportText = buildFlashcardExport(topicKey);

  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(exportText);
    return true;
  }

  const helper = document.createElement('textarea');
  helper.value = exportText;
  helper.setAttribute('readonly', '');
  helper.style.position = 'absolute';
  helper.style.left = '-9999px';
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand('copy');
  document.body.removeChild(helper);
  return copied;
}

function renderFlashcards(topicKey) {
  ensureFlashcardState(topicKey);
  const state = flashcardState[topicKey];
  const cards = topicContent[topicKey].flashcards;
  const card = cards[state.index];
  const detail = getTopicDetail(topicKey);

  detail.innerHTML = `
    <button type="button" class="back-btn" data-topic-back="${topicKey}">← Back to ${titleFromTopic(topicKey)}</button>
    <h4 class="detail-title">${titleFromTopic(topicKey)} · Flashcards</h4>
    <div class="flashcard-toolbar">
      <p class="subtitle">Card ${state.index + 1} of ${cards.length}</p>
      <button type="button" class="ghost-btn inline-btn" data-fc-action="copy-all">Copy whole file</button>
    </div>
    <article class="card flashcard ${state.flipped ? 'is-flipped' : ''}">
      <p class="flashcard-label">${state.flipped ? 'Back' : 'Front'}</p>
      <p class="flashcard-text">${state.flipped ? card.back : card.front}</p>
    </article>
    <p class="flashcard-copy-status" data-fc-copy-status></p>
    <div class="flashcard-controls">
      <button type="button" class="ghost-btn" data-fc-action="prev" ${state.index === 0 ? 'disabled' : ''}>Previous</button>
      <button type="button" class="primary-btn inline-btn" data-fc-action="flip">Flip Card</button>
      <button type="button" class="ghost-btn" data-fc-action="next" ${state.index === cards.length - 1 ? 'disabled' : ''}>Next</button>
    </div>
  `;

  attachBackHandler(detail, topicKey);

  detail.querySelector('[data-fc-action="flip"]').addEventListener('click', () => {
    flashcardState[topicKey].flipped = !flashcardState[topicKey].flipped;
    renderFlashcards(topicKey);
  });

  detail.querySelector('[data-fc-action="prev"]').addEventListener('click', () => {
    flashcardState[topicKey].index -= 1;
    flashcardState[topicKey].flipped = false;
    renderFlashcards(topicKey);
  });

  detail.querySelector('[data-fc-action="next"]').addEventListener('click', () => {
    flashcardState[topicKey].index += 1;
    flashcardState[topicKey].flipped = false;
    renderFlashcards(topicKey);
  });

  detail.querySelector('[data-fc-action="copy-all"]').addEventListener('click', async () => {
    const status = detail.querySelector('[data-fc-copy-status]');

    try {
      const copied = await copyFlashcards(topicKey);
      status.textContent = copied
        ? 'Copied the full flashcard set to your clipboard.'
        : 'Copy failed. Please try again.';
    } catch (error) {
      status.textContent = 'Copy failed. Please try again.';
    }
  });
}

function ensureTestState(topicKey) {
  if (!testState[topicKey]) {
    testState[topicKey] = { selectedTestIndex: 0 };
  }
}

function renderTests(topicKey) {
  ensureTestState(topicKey);
  const tests = topicContent[topicKey].tests;
  const currentTestIndex = testState[topicKey].selectedTestIndex;
  const currentTest = tests[currentTestIndex];
  const detail = getTopicDetail(topicKey);

  detail.innerHTML = `
    <button type="button" class="back-btn" data-topic-back="${topicKey}">← Back to ${titleFromTopic(topicKey)}</button>
    <h4 class="detail-title">${titleFromTopic(topicKey)} · Tests</h4>
    <div class="test-tabs">
      ${tests.map((test, idx) => `
        <button type="button" class="test-tab ${idx === currentTestIndex ? 'is-active' : ''}" data-test-index="${idx}">${test.title}</button>
      `).join('')}
    </div>

    <form class="card test-form" data-test-form="${topicKey}">
      ${currentTest.questions.map((question, index) => {
        if (question.type === 'mcq') {
          return `
            <fieldset class="question-block">
              <legend>${index + 1}. ${question.prompt}</legend>
              ${question.options.map((option) => `
                <label class="choice-row">
                  <input type="radio" name="${question.id}" value="${option}" required />
                  <span>${option}</span>
                </label>
              `).join('')}
            </fieldset>
          `;
        }

        return `
          <div class="question-block">
            <label for="${question.id}">${index + 1}. ${question.prompt}</label>
            <textarea id="${question.id}" name="${question.id}" rows="4" required></textarea>
          </div>
        `;
      }).join('')}
      <button type="submit" class="primary-btn">Submit for Grading</button>
      <p class="grade-output" data-grade-output="${topicKey}"></p>
    </form>
  `;

  attachBackHandler(detail, topicKey);

  detail.querySelectorAll('.test-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      testState[topicKey].selectedTestIndex = Number(tab.dataset.testIndex);
      renderTests(topicKey);
    });
  });

  detail.querySelector(`[data-test-form="${topicKey}"]`).addEventListener('submit', (event) => {
    event.preventDefault();
    gradeTest(topicKey, currentTest, new FormData(event.target), currentTestIndex);
  });
}

function gradeTest(topicKey, test, formData, testIndex) {
  let correct = 0;
  const results = test.questions.map((question) => {
    const response = String(formData.get(question.id) || '').trim();

    if (question.type === 'mcq') {
      const isCorrect = response === question.answer;
      if (isCorrect) {
        correct += 1;
      }

      return {
        ...question,
        response,
        isCorrect,
        reviewLabel: isCorrect ? 'Correct' : 'Incorrect'
      };
    }

    const normalized = response.toLowerCase();
    const hasKeyword = question.keywords.some((keyword) => normalized.includes(keyword));
    if (hasKeyword) {
      correct += 1;
    }

    return {
      ...question,
      response,
      isCorrect: hasKeyword,
      reviewLabel: hasKeyword ? 'Accepted' : 'Needs review'
    };
  });

  const percent = Math.round((correct / test.questions.length) * 100);
  const output = document.querySelector(`[data-grade-output="${topicKey}"]`);
  output.innerHTML = `
    <p class="grade-summary">Score: ${correct}/${test.questions.length} (${percent}%).</p>
    <div class="answer-review-list">
      ${results.map((result, index) => {
        if (result.type === 'mcq') {
          return `
            <article class="answer-review ${result.isCorrect ? 'is-correct' : 'is-incorrect'}">
              <p class="answer-review-title">${index + 1}. ${result.reviewLabel}</p>
              <p><strong>Your answer:</strong> ${result.response || 'No answer provided.'}</p>
              <p><strong>Correct answer:</strong> ${result.answer}</p>
              <p><strong>Explanation:</strong> ${result.explanation || 'No explanation available.'}</p>
            </article>
          `;
        }

        return `
          <article class="answer-review ${result.isCorrect ? 'is-correct' : 'is-incorrect'}">
            <p class="answer-review-title">${index + 1}. ${result.reviewLabel}</p>
            <p><strong>Your response:</strong> ${result.response || 'No response provided.'}</p>
            <p><strong>Keyword check:</strong> ${result.isCorrect ? 'Matched expected concepts.' : 'Did not match the expected concepts yet.'}</p>
          </article>
        `;
      }).join('')}
    </div>
  `;

  markTestComplete(topicKey, testIndex);
}

function openTopicMode(topicKey, mode) {
  const topicView = document.querySelector(`[data-topic-view="${topicKey}"]`);
  if (!topicView) return;

  topicView.querySelector('.topic-home').classList.add('hidden');
  const detail = topicView.querySelector('.topic-detail');
  detail.classList.remove('hidden');

  if (mode === 'learn') {
    renderLearn(topicKey);
  } else if (mode === 'flashcards') {
    renderFlashcards(topicKey);
  } else {
    renderTests(topicKey);
  }
}

function attachBackHandler(detailElement, topicKey) {
  detailElement.querySelector('[data-topic-back]').addEventListener('click', () => {
    showTopicHome(topicKey);
  });
}

function hydrateCompletedSetsFromProgress() {
  Object.keys(progressState).forEach((topicKey) => {
    completedLessonIndexes[topicKey] = new Set();
    completedTestIndexes[topicKey] = new Set();

    for (let i = 0; i < progressState[topicKey].lessonsCompleted; i += 1) {
      completedLessonIndexes[topicKey].add(i);
    }

    for (let i = 0; i < progressState[topicKey].testsCompleted; i += 1) {
      completedTestIndexes[topicKey].add(i);
    }
  });
}

async function showAppForUser(user) {
  currentUser = user;
  studyStreak = Number(user?.studyStreak || 0);
  welcomeUser.textContent = user?.name ? `Welcome, ${user.name}` : '';
  authScreen.classList.add('hidden');
  appScreen.classList.remove('hidden');
  setView(currentView);
  await loadProgress();
  hydrateCompletedSetsFromProgress();
}

function showAuthScreen() {
  currentUser = null;
  welcomeUser.textContent = '';
  appScreen.classList.add('hidden');
  authScreen.classList.remove('hidden');
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  clearAuthMessage();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const payload = {
    action: isLogin ? 'login' : 'signup',
    email,
    password,
    name
  };

  submitAuth.disabled = true;
  submitAuth.textContent = isLogin ? 'Logging In...' : 'Signing Up...';

  try {
    const response = await fetch('api/auth.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const rawText = await response.text();

    let result;
    try {
      result = JSON.parse(rawText);
    } catch (error) {
      showAuthMessage('Server did not return valid JSON.', 'error');
      return;
    }

    if (!response.ok || !result.success) {
      showAuthMessage(result.message || 'Something went wrong.', 'error');
      return;
    }

    showAuthMessage(result.message || 'Success.', 'success');
    authForm.reset();
    await showAppForUser(result.user);
  } catch (error) {
    console.error('Fetch error:', error);
    showAuthMessage('Unable to connect to the server.', 'error');
  } finally {
    submitAuth.disabled = false;
    submitAuth.textContent = isLogin ? 'Log In' : 'Sign Up';
  }
}

async function handleLogout() {
  try {
    await fetch('api/logout.php', {
      method: 'POST'
    });
  } catch (error) {
    console.error(error);
  }

  authForm.reset();
  isLogin = true;
  currentView = 'dashboard';
  studyStreak = 0;
  renderAuthMode();
  setView(currentView);

  topicDetails.forEach((detail) => {
    detail.classList.add('hidden');
    detail.innerHTML = '';
  });

  document.querySelectorAll('.topic-home').forEach((home) => home.classList.remove('hidden'));

  progressState = {
    accounting: { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 15, totalTests: 1 },
    valuation: { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 15, totalTests: 1 },
    'financial-statements': { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 15, totalTests: 1 }
  };

  completedLessonIndexes.accounting = new Set();
  completedLessonIndexes.valuation = new Set();
  completedLessonIndexes['financial-statements'] = new Set();
  completedTestIndexes.accounting = new Set();
  completedTestIndexes.valuation = new Set();
  completedTestIndexes['financial-statements'] = new Set();

  lessonResponseState.accounting = {};
  lessonResponseState.valuation = {};
  lessonResponseState['financial-statements'] = {};

  updateDashboardUI();
  showAuthScreen();
}

async function checkSession() {
  try {
    const response = await fetch('api/session.php');
    const result = await response.json();

    if (result.loggedIn && result.user) {
      await showAppForUser(result.user);
    } else {
      showAuthScreen();
    }
  } catch (error) {
    console.error(error);
    showAuthScreen();
  }
}

loginTab.addEventListener('click', () => {
  isLogin = true;
  renderAuthMode();
});

signupTab.addEventListener('click', () => {
  isLogin = false;
  renderAuthMode();
});

authForm.addEventListener('submit', handleAuthSubmit);
logoutBtn.addEventListener('click', handleLogout);

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setView(button.dataset.view);
  });
});

topicRows.forEach((row) => {
  row.addEventListener('click', () => {
    setView(row.dataset.view);
  });

  row.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setView(row.dataset.view);
    }
  });
});

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openTopicMode(button.dataset.topic, button.dataset.mode);
  });
});

renderAuthMode();
setView(currentView);
updateDashboardUI();
checkSession();
