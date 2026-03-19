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
      { front: 'What is EBITDA?', back: 'Earnings before interest, taxes, depreciation, and amortization.' },
      { front: 'What increases cash on the CFS?', back: 'Higher non-cash addbacks, lower working capital, lower capex.' },
      { front: 'Deferred revenue meaning?', back: 'Cash received before revenue recognition; liability on balance sheet.' }
    ],
    tests: [
      {
        title: 'Accounting Quiz 1',
        questions: [
          {
            id: 'a1_q1',
            type: 'mcq',
            prompt: 'Where does depreciation appear?',
            options: ['Only Income Statement', 'All three statements', 'Only Balance Sheet', 'Only Cash Flow Statement'],
            answer: 'All three statements'
          },
          {
            id: 'a1_q2',
            type: 'text',
            prompt: 'Briefly explain why deferred revenue is considered a liability.',
            keywords: ['obligation', 'service', 'future', 'cash']
          }
        ]
      },
      {
        title: 'Accounting Quiz 2',
        questions: [
          {
            id: 'a2_q1',
            type: 'mcq',
            prompt: 'If inventory increases, what is the immediate cash flow impact?',
            options: ['Cash increases', 'Cash decreases', 'No impact', 'Depends on tax rate'],
            answer: 'Cash decreases'
          },
          {
            id: 'a2_q2',
            type: 'text',
            prompt: 'Name one reason net income can rise while operating cash flow falls.',
            keywords: ['working capital', 'receivables', 'inventory', 'non-cash']
          }
        ]
      }
    ]
  },
  valuation: {
    lessons: [
      {
        title: 'DCF Framework',
        summary: 'Build an unlevered free cash flow model and discount using WACC.',
        objective: 'Estimate intrinsic value from projected future cash flows.',
        keyPoints: [
          'Project revenue, margins, taxes, capex, and working capital to derive unlevered FCF.',
          'Discount projected FCF by WACC to get present value.',
          'Add terminal value using either perpetuity growth or exit multiple methods.'
        ],
        example: 'Forecast 5 years of FCF, discount each year at 10%, add discounted terminal value, then subtract net debt for equity value.'
      },
      {
        title: 'Comps Analysis',
        summary: 'Select peer groups and normalize valuation multiples.',
        objective: 'Value a company relative to how similar companies trade in the market.',
        keyPoints: [
          'Peer selection should match business model, growth profile, and margin structure.',
          'Use trading multiples such as EV/EBITDA, EV/Revenue, and P/E.',
          'Adjust financials for one-time items to improve comparability.'
        ],
        example: 'If peers trade at 12x EBITDA and target EBITDA is $50m, implied enterprise value is roughly $600m.'
      },
      {
        title: 'Precedent Transactions',
        summary: 'Interpret takeover premiums and control value drivers.',
        objective: 'Understand market pricing in historical M&A transactions.',
        keyPoints: [
          'Transactions often include a control premium over unaffected share price.',
          'Deal rationale and synergies can justify higher multiples than public comps.',
          'Vintage and market cycle matter when comparing historical deals.'
        ],
        example: 'A target acquired at 30% premium to unaffected price may imply higher EV/EBITDA than its trading peers.'
      }
    ],
    flashcards: [
      { front: 'What does WACC stand for?', back: 'Weighted Average Cost of Capital.' },
      { front: 'Why use EV/EBITDA?', back: 'Capital-structure-neutral metric for comparing operating performance.' },
      { front: 'Terminal value methods?', back: 'Gordon Growth and Exit Multiple methods.' }
    ],
    tests: [
      {
        title: 'Valuation Quiz 1',
        questions: [
          {
            id: 'v1_q1',
            type: 'mcq',
            prompt: 'Which cash flow is commonly used in enterprise DCF?',
            options: ['Levered FCF', 'Unlevered FCF', 'Net Income', 'Dividends'],
            answer: 'Unlevered FCF'
          },
          {
            id: 'v1_q2',
            type: 'text',
            prompt: 'Why might you use multiple valuation methods instead of one?',
            keywords: ['cross-check', 'assumptions', 'range', 'confidence']
          }
        ]
      },
      {
        title: 'Valuation Quiz 2',
        questions: [
          {
            id: 'v2_q1',
            type: 'mcq',
            prompt: 'A lower discount rate generally does what to valuation?',
            options: ['Lowers valuation', 'Raises valuation', 'No impact', 'Only impacts equity value negatively'],
            answer: 'Raises valuation'
          },
          {
            id: 'v2_q2',
            type: 'text',
            prompt: 'List one risk of relying only on comparable companies.',
            keywords: ['peer', 'mispricing', 'differences', 'market']
          }
        ]
      }
    ]
  },
  'financial-statements': {
    lessons: [
      {
        title: 'Ratio Analysis Essentials',
        summary: 'Interpret liquidity, leverage, and profitability ratios.',
        objective: 'Use core ratios to quickly assess financial health and risk.',
        keyPoints: [
          'Liquidity ratios measure near-term ability to meet obligations.',
          'Leverage ratios assess balance sheet risk and debt capacity.',
          'Profitability ratios explain how efficiently revenue converts into earnings.'
        ],
        example: 'A low current ratio plus falling interest coverage can signal potential refinancing pressure.'
      },
      {
        title: 'Trend and Common Size Analysis',
        summary: 'Compare multi-period performance and margin structures.',
        objective: 'Identify direction of performance and isolate structural cost changes.',
        keyPoints: [
          'Trend analysis compares metrics across periods to detect momentum.',
          'Common-size statements express line items as a % of revenue or assets.',
          'Combining both methods reveals whether scale or efficiency is driving results.'
        ],
        example: 'If SG&A as a % of revenue declines over time, operating leverage may be improving.'
      },
      {
        title: 'Earnings Quality Signals',
        summary: 'Spot red flags in accruals and cash conversion.',
        objective: 'Judge whether reported earnings are durable and cash-backed.',
        keyPoints: [
          'Sustained divergence between net income and cash flow warrants investigation.',
          'Large one-time gains can inflate earnings without recurring value.',
          'Rising receivables faster than revenue may indicate aggressive revenue recognition.'
        ],
        example: 'A company showing rising earnings but consistently negative operating cash flow may have weak earnings quality.'
      }
    ],
    flashcards: [
      { front: 'Current Ratio formula?', back: 'Current Assets / Current Liabilities.' },
      { front: 'What is ROE?', back: 'Net Income / Average Shareholders’ Equity.' },
      { front: 'Gross margin means?', back: '(Revenue - COGS) / Revenue.' }
    ],
    tests: [
      {
        title: 'Statements Quiz 1',
        questions: [
          {
            id: 'f1_q1',
            type: 'mcq',
            prompt: 'Which ratio is a liquidity metric?',
            options: ['Debt/EBITDA', 'Current Ratio', 'ROIC', 'Gross Margin'],
            answer: 'Current Ratio'
          },
          {
            id: 'f1_q2',
            type: 'text',
            prompt: 'How can you detect poor earnings quality?',
            keywords: ['cash flow', 'accrual', 'mismatch', 'one-time']
          }
        ]
      },
      {
        title: 'Statements Quiz 2',
        questions: [
          {
            id: 'f2_q1',
            type: 'mcq',
            prompt: 'If debt rises significantly, which ratio often worsens?',
            options: ['Interest coverage', 'Current ratio', 'Gross margin', 'Asset turnover'],
            answer: 'Interest coverage'
          },
          {
            id: 'f2_q2',
            type: 'text',
            prompt: 'Name one reason trend analysis can be misleading.',
            keywords: ['seasonality', 'one-time', 'accounting change', 'macro']
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
  accounting: { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 15, totalTests: 2 },
  valuation: { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 3, totalTests: 2 },
  'financial-statements': { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 3, totalTests: 2 }
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
  return 'Financial Statement Analysis';
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

function renderAccountingLessonPage(topicKey, lessonIndex) {
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
      <p class="lesson-kicker">Fundamentals — Learn</p>
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
          <h5>Practice Question</h5>
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

  if (topicKey === 'accounting') {
    renderAccountingLessonPage(topicKey, lessonIndex);
    return;
  }

  renderStandardLessonPage(topicKey, lessonIndex);
}

function ensureFlashcardState(topicKey) {
  if (!flashcardState[topicKey]) {
    flashcardState[topicKey] = { index: 0, flipped: false };
  }
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
    <p class="subtitle">Card ${state.index + 1} of ${cards.length}</p>
    <article class="card flashcard ${state.flipped ? 'is-flipped' : ''}">
      <p class="flashcard-label">${state.flipped ? 'Back' : 'Front'}</p>
      <p class="flashcard-text">${state.flipped ? card.back : card.front}</p>
    </article>
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

  test.questions.forEach((question) => {
    const response = String(formData.get(question.id) || '').trim();

    if (question.type === 'mcq') {
      if (response === question.answer) {
        correct += 1;
      }
      return;
    }

    const normalized = response.toLowerCase();
    const hasKeyword = question.keywords.some((keyword) => normalized.includes(keyword));
    if (hasKeyword) {
      correct += 1;
    }
  });

  const percent = Math.round((correct / test.questions.length) * 100);
  const output = document.querySelector(`[data-grade-output="${topicKey}"]`);
  output.textContent = `Score: ${correct}/${test.questions.length} (${percent}%). MCQ questions are exact-match graded; written responses are keyword-checked.`;

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
    accounting: { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 15, totalTests: 2 },
    valuation: { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 3, totalTests: 2 },
    'financial-statements': { lessonsCompleted: 0, testsCompleted: 0, status: 'Not Started', totalLessons: 3, totalTests: 2 }
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
