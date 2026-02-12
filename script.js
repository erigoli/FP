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
      { title: 'Three Statements Link', summary: 'Walk through how net income flows into retained earnings and cash flow.' },
      { title: 'Accruals vs Cash Accounting', summary: 'Understand revenue/expense timing differences and interview implications.' },
      { title: 'Working Capital Deep Dive', summary: 'Analyze AR, AP, inventory, and cash conversion cycle effects.' },
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
      { title: 'DCF Framework', summary: 'Build an unlevered free cash flow model and discount using WACC.' },
      { title: 'Comps Analysis', summary: 'Select peer groups and normalize valuation multiples.' },
      { title: 'Precedent Transactions', summary: 'Interpret takeover premiums and control value drivers.' },
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
      { title: 'Ratio Analysis Essentials', summary: 'Interpret liquidity, leverage, and profitability ratios.' },
      { title: 'Trend and Common Size Analysis', summary: 'Compare multi-period performance and margin structures.' },
      { title: 'Earnings Quality Signals', summary: 'Spot red flags in accruals and cash conversion.' },
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
    <p class="subtitle">Choose a lesson and study the key concepts.</p>
    <div class="lesson-list">
      ${lessons.map((lesson, index) => `
        <article class="card lesson-card">
          <p class="lesson-label">Lesson ${index + 1}</p>
          <h5>${lesson.title}</h5>
          <p>${lesson.summary}</p>
        </article>
      `).join('')}
    </div>
  `;
  attachBackHandler(detail, topicKey);
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
