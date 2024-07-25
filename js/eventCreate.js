document.addEventListener('DOMContentLoaded', () => {
  // References to sections
  const createEventSection = document.getElementById('create-event');
  const guestListSection = document.getElementById('guest-list');
  const manageInvitationsSection = document.getElementById('manage-invitations');
  const budgetTrackingSection = document.getElementById('budget-tracking');
  const vendorCoordinationSection = document.getElementById('vendor-coordination');
  const schedulingSection = document.getElementById('scheduling');

  // References to buttons
  const createEventBtn = document.getElementById('create-event-btn');
  const nextBtn = document.getElementById('create-next');
  const guestListBtn = document.getElementById('guest-list-btn');
  const guestnextBtn = document.getElementById('guest-next');
  const invitationBtn = document.getElementById('invitation-btn');
  const invitationnextBtn = document.getElementById('invitaion-next');
  const budgetBtn = document.getElementById('budget-btn');
  const budgetnextBtn = document.getElementById('budget-next')
  const vendorBtn = document.getElementById('vendor-btn');
  const vendornextBtn = document.getElementById('vendor-next');
  const schedulingBtn = document.getElementById('scheduling-btn');

  // Event form submission
  const eventForm = document.getElementById('event-form');
  const guestForm = document.getElementById('guest-form');
  const guestListDisplay = document.getElementById('guest-list-display');
  const budgetForm = document.getElementById('budget-form');
  const vendorForm = document.getElementById('vendor-form');
  const scheduleForm = document.getElementById('scheduleForm');

  let guestList = [];

  // Toggle sections visibility
  createEventBtn.addEventListener('click', () => {
    toggleSection(createEventSection);
  });

  nextBtn.addEventListener('click', () => {
    toggleSection(guestListSection);
  });

  guestListBtn.addEventListener('click', () => {
    toggleSection(guestListSection);
  });

  guestnextBtn.addEventListener('click', () => {
    toggleSection(manageInvitationsSection);
  });

  invitationBtn.addEventListener('click', () => {
    toggleSection(manageInvitationsSection);
  });

  invitationnextBtn.addEventListener('click', () => {
    toggleSection(budgetTrackingSection);
  });

  budgetBtn.addEventListener('click', () => {
    toggleSection(budgetTrackingSection);
  });

  budgetnextBtn.addEventListener('click', () => {
    toggleSection(vendorCoordinationSection);
  });

  vendorBtn.addEventListener('click', () => {
    toggleSection(vendorCoordinationSection);
  });

  vendornextBtn.addEventListener('click', () => {
    toggleSection(schedulingSection);
  });

  schedulingBtn.addEventListener('click', () => {
    toggleSection(schedulingSection);
  });

  // Function to toggle sections
  function toggleSection(section) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    section.style.display = 'block';
  }

  // Handle event form submission
  eventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventTheme = document.getElementById('event-theme').value;
    alert(`Event "${eventName}" scheduled on ${eventDate} with "${eventTheme}" theme created.`);
    eventForm.reset();
  });

  // Handle guest form submission
  guestForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const guestName = document.getElementById('guest-name').value;
    guestList.push(guestName);
    updateGuestList();
    guestForm.reset();
  });

  // Update guest list display
  function updateGuestList() {
    guestListDisplay.innerHTML = '';
    guestList.forEach(guest => {
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.justifyContent = 'space-between';
      li.style.alignItems = 'center';
      li.style.padding = '10px 0';
      li.style.fontSize = '1.3rem';

      const span = document.createElement('span');
      span.textContent = guest;

      const removeButton = document.createElement('i');
      removeButton.className = 'fas fa-times remove-icon';
      removeButton.style.cursor = 'pointer';
      removeButton.style.color = '#ff0000';
      removeButton.style.fontSize = '16px';
      removeButton.addEventListener('click', () => {
        removeGuest(index);
      });

      li.appendChild(span);
      li.appendChild(removeButton);
      guestListDisplay.appendChild(li);
    });
  }

  function removeGuest(index) {
    guestList.splice(index, 1);
    updateGuestList();
  }

  // Manage invitations
  const sendInvitationsBtn = document.getElementById('send-invitations');
  const trackRsvpsBtn = document.getElementById('track-rsvps');

  sendInvitationsBtn.addEventListener('click', () => {
    alert('Invitations sent to all guests.');
  });

  trackRsvpsBtn.addEventListener('click', () => {
    alert('Tracking RSVPs...');
  });

  // Budget Tracking

  const expenseList = document.getElementById('expenseList');
  const totalBudget = document.getElementById('totalBudget');
  let totalExpenses = 0;

  budgetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

    const listItem = document.createElement('li');
    listItem.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
    expenseList.appendChild(listItem);

    totalExpenses += expenseAmount;
    totalBudget.textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;

    budgetForm.reset();
  });

  // Vendor Coordination

  const vendorList = document.getElementById('vendorList');

  vendorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const vendorName = document.getElementById('vendorName').value;
    const vendorService = document.getElementById('vendorService').value;
    const vendorContact = document.getElementById('vendorContact').value;

    const listItem = document.createElement('li');
    listItem.textContent = `${vendorName}: ${vendorService} (Contact: ${vendorContact})`;
    vendorList.appendChild(listItem);

    vendorForm.reset();
  });

  // Scheduling

  const taskList = document.getElementById('taskList');

  scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = document.getElementById('taskName').value;
    const taskDate = document.getElementById('taskDate').value;

    const listItem = document.createElement('li');
    listItem.textContent = `${taskName} - ${taskDate}`;
    taskList.appendChild(listItem);

    scheduleForm.reset();
  });
});
