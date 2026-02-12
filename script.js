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

const topicContent = {
  accounting: {
    lessons: [
      {
        title: 'Three Statements Link',
        summary: 'Walk through how net income flows into retained earnings and cash flow.',
        objective: 'Learn how one operational change can affect the income statement, balance sheet, and cash flow statement together.',
        keyPoints: [
          'Net income starts on the income statement and closes into retained earnings.',
          'Non-cash items like depreciation reduce net income but are added back in operating cash flow.',
          'Balance sheet changes in working capital accounts feed into operating cash flow adjustments.',
        ],
        example: 'If depreciation rises by $10, EBIT and net income fall, PP&E net declines, and CFO adds back the $10 depreciation.',
      },
      {
        title: 'Accruals vs Cash Accounting',
        summary: 'Understand revenue/expense timing differences and interview implications.',
        objective: 'Differentiate between accounting profit and real cash generation.',
        keyPoints: [
          'Accrual accounting records revenue when earned and expenses when incurred.',
          'Cash accounting records transactions only when money is received or paid.',
          'Large accrual balances can indicate timing differences or potential earnings-quality concerns.',
        ],
        example: 'A company can book revenue this quarter on credit sales, while cash is only collected in the next quarter.',
      },
      {
        title: 'Working Capital Deep Dive',
        summary: 'Analyze AR, AP, inventory, and cash conversion cycle effects.',
        objective: 'Understand how day-to-day operating balances influence free cash flow.',
        keyPoints: [
          'Increasing receivables or inventory uses cash.',
          'Increasing payables provides short-term cash support.',
          'The cash conversion cycle helps evaluate efficiency in turning operations into cash.',
        ],
        example: 'If inventory increases by $20 and payables increase by $8, net working capital uses $12 of cash.',
      },
    ],
    flashcards: [
      { front: 'What is EBITDA?', back: 'Earnings before interest, taxes, depreciation, and amortization.' },
      { front: 'What increases cash on the CFS?', back: 'Higher non-cash addbacks, lower working capital, lower capex.' },
      { front: 'Deferred revenue meaning?', back: 'Cash received before revenue recognition; liability on balance sheet.' },
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
            answer: 'All three statements',
          },
          {
            id: 'a1_q2',
            type: 'text',
            prompt: 'Briefly explain why deferred revenue is considered a liability.',
            keywords: ['obligation', 'service', 'future', 'cash'],
          },
        ],
      },
      {
        title: 'Accounting Quiz 2',
        questions: [
          {
            id: 'a2_q1',
            type: 'mcq',
            prompt: 'If inventory increases, what is the immediate cash flow impact?',
            options: ['Cash increases', 'Cash decreases', 'No impact', 'Depends on tax rate'],
            answer: 'Cash decreases',
          },
          {
            id: 'a2_q2',
            type: 'text',
            prompt: 'Name one reason net income can rise while operating cash flow falls.',
            keywords: ['working capital', 'receivables', 'inventory', 'non-cash'],
          },
        ],
      },
    ],
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
          'Add terminal value using either perpetuity growth or exit multiple methods.',
        ],
        example: 'Forecast 5 years of FCF, discount each year at 10%, add discounted terminal value, then subtract net debt for equity value.',
      },
      {
        title: 'Comps Analysis',
        summary: 'Select peer groups and normalize valuation multiples.',
        objective: 'Value a company relative to how similar companies trade in the market.',
        keyPoints: [
          'Peer selection should match business model, growth profile, and margin structure.',
          'Use trading multiples such as EV/EBITDA, EV/Revenue, and P/E.',
          'Adjust financials for one-time items to improve comparability.',
        ],
        example: 'If peers trade at 12x EBITDA and target EBITDA is $50m, implied enterprise value is roughly $600m.',
      },
      {
        title: 'Precedent Transactions',
        summary: 'Interpret takeover premiums and control value drivers.',
        objective: 'Understand market pricing in historical M&A transactions.',
        keyPoints: [
          'Transactions often include a control premium over unaffected share price.',
          'Deal rationale and synergies can justify higher multiples than public comps.',
          'Vintage and market cycle matter when comparing historical deals.',
        ],
        example: 'A target acquired at 30% premium to unaffected price may imply higher EV/EBITDA than its trading peers.',
      },
    ],
    flashcards: [
      { front: 'What does WACC stand for?', back: 'Weighted Average Cost of Capital.' },
      { front: 'Why use EV/EBITDA?', back: 'Capital-structure-neutral metric for comparing operating performance.' },
      { front: 'Terminal value methods?', back: 'Gordon Growth and Exit Multiple methods.' },
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
            answer: 'Unlevered FCF',
          },
          {
            id: 'v1_q2',
            type: 'text',
            prompt: 'Why might you use multiple valuation methods instead of one?',
            keywords: ['cross-check', 'assumptions', 'range', 'confidence'],
          },
        ],
      },
      {
        title: 'Valuation Quiz 2',
        questions: [
          {
            id: 'v2_q1',
            type: 'mcq',
            prompt: 'A lower discount rate generally does what to valuation?',
            options: ['Lowers valuation', 'Raises valuation', 'No impact', 'Only impacts equity value negatively'],
            answer: 'Raises valuation',
          },
          {
            id: 'v2_q2',
            type: 'text',
            prompt: 'List one risk of relying only on comparable companies.',
            keywords: ['peer', 'mispricing', 'differences', 'market'],
          },
        ],
      },
    ],
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
          'Profitability ratios explain how efficiently revenue converts into earnings.',
        ],
        example: 'A low current ratio plus falling interest coverage can signal potential refinancing pressure.',
      },
      {
        title: 'Trend and Common Size Analysis',
        summary: 'Compare multi-period performance and margin structures.',
        objective: 'Identify direction of performance and isolate structural cost changes.',
        keyPoints: [
          'Trend analysis compares metrics across periods to detect momentum.',
          'Common-size statements express line items as a % of revenue or assets.',
          'Combining both methods reveals whether scale or efficiency is driving results.',
        ],
        example: 'If SG&A as a % of revenue declines over time, operating leverage may be improving.',
      },
      {
        title: 'Earnings Quality Signals',
        summary: 'Spot red flags in accruals and cash conversion.',
        objective: 'Judge whether reported earnings are durable and cash-backed.',
        keyPoints: [
          'Sustained divergence between net income and cash flow warrants investigation.',
          'Large one-time gains can inflate earnings without recurring value.',
          'Rising receivables faster than revenue may indicate aggressive revenue recognition.',
        ],
        example: 'A company showing rising earnings but consistently negative operating cash flow may have weak earnings quality.',
      },
    ],
    flashcards: [
      { front: 'Current Ratio formula?', back: 'Current Assets / Current Liabilities.' },
      { front: 'What is ROE?', back: 'Net Income / Average Shareholders’ Equity.' },
      { front: 'Gross margin means?', back: '(Revenue - COGS) / Revenue.' },
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
            answer: 'Current Ratio',
          },
          {
            id: 'f1_q2',
            type: 'text',
            prompt: 'How can you detect poor earnings quality?',
            keywords: ['cash flow', 'accrual', 'mismatch', 'one-time'],
          },
        ],
      },
      {
        title: 'Statements Quiz 2',
        questions: [
          {
            id: 'f2_q1',
            type: 'mcq',
            prompt: 'If debt rises significantly, which ratio often worsens?',
            options: ['Interest coverage', 'Current ratio', 'Gross margin', 'Asset turnover'],
            answer: 'Interest coverage',
          },
          {
            id: 'f2_q2',
            type: 'text',
            prompt: 'Name one reason trend analysis can be misleading.',
            keywords: ['seasonality', 'one-time', 'accounting change', 'macro'],
          },
        ],
      },
    ],
  },
};

const flashcardState = {};
const testState = {};
const learnState = {};
let isLogin = true;
let currentView = 'dashboard';

function renderAuthMode() {
  loginTab.classList.toggle('is-active', isLogin);
  signupTab.classList.toggle('is-active', !isLogin);
  nameField.classList.toggle('hidden', isLogin);
  loginOnlyOptions.classList.toggle('hidden', !isLogin);
  submitAuth.textContent = isLogin ? 'Log In' : 'Sign Up';
  document.getElementById('name').required = !isLogin;
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

function renderLessonPage(topicKey) {
  const detail = getTopicDetail(topicKey);
  const lessons = topicContent[topicKey].lessons;
  const lessonIndex = learnState[topicKey]?.lessonIndex ?? 0;
  const lesson = lessons[lessonIndex];

  detail.innerHTML = `
    <button type="button" class="back-btn" data-lesson-back="${topicKey}">← Back to lessons</button>
    <article class="card lesson-page">
      <p class="lesson-label">Lesson ${lessonIndex + 1} of ${lessons.length}</p>
      <h4 class="detail-title">${lesson.title}</h4>
      <p class="subtitle">${lesson.summary}</p>
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
  const currentTest = tests[testState[topicKey].selectedTestIndex];
  const detail = getTopicDetail(topicKey);

  detail.innerHTML = `
    <button type="button" class="back-btn" data-topic-back="${topicKey}">← Back to ${titleFromTopic(topicKey)}</button>
    <h4 class="detail-title">${titleFromTopic(topicKey)} · Tests</h4>
    <div class="test-tabs">
      ${tests.map((test, idx) => `
        <button type="button" class="test-tab ${idx === testState[topicKey].selectedTestIndex ? 'is-active' : ''}" data-test-index="${idx}">${test.title}</button>
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
    gradeTest(topicKey, currentTest, new FormData(event.target));
  });
}

function gradeTest(topicKey, test, formData) {
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
}

function titleFromTopic(topicKey) {
  if (topicKey === 'accounting') return 'Accounting Fundamentals';
  if (topicKey === 'valuation') return 'Valuation Methods';
  return 'Financial Statement Analysis';
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

loginTab.addEventListener('click', () => {
  isLogin = true;
  renderAuthMode();
});

signupTab.addEventListener('click', () => {
  isLogin = false;
  renderAuthMode();
});

authForm.addEventListener('submit', (event) => {
  event.preventDefault();
  authScreen.classList.add('hidden');
  appScreen.classList.remove('hidden');
  setView(currentView);
});

logoutBtn.addEventListener('click', () => {
  appScreen.classList.add('hidden');
  authScreen.classList.remove('hidden');
  authForm.reset();
  isLogin = true;
  currentView = 'dashboard';
  renderAuthMode();
  setView(currentView);
  topicDetails.forEach((detail) => {
    detail.classList.add('hidden');
    detail.innerHTML = '';
  });
  document.querySelectorAll('.topic-home').forEach((home) => home.classList.remove('hidden'));
});

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
