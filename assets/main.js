document.addEventListener('DOMContentLoaded', () => {
  // Classroom passcode logic
  const CLASSROOM_PASSCODE = '23MAT106';
  const passwordForm = document.getElementById('password-form');
  const passwordInput = document.getElementById('passcode-input');
  const passwordErrorMsg = document.getElementById('password-error-message');
  const classroomPrompt = document.getElementById('password-prompt-container');
  const classroomContent = document.getElementById('classroom-content');

  function checkClassroomAccess() {
    if (!classroomPrompt || !classroomContent) return;
    if (sessionStorage.getItem('classroomAccessGranted') === 'true') {
      classroomPrompt.style.display = 'none';
      classroomContent.style.display = '';
      closeCourse();
    } else {
      classroomPrompt.style.display = 'block';
      classroomContent.style.display = 'none';
    }
  }

  if (passwordForm) {
    passwordForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (passwordInput && passwordInput.value.trim() === CLASSROOM_PASSCODE) {
        sessionStorage.setItem('classroomAccessGranted', 'true');
        if (passwordErrorMsg) passwordErrorMsg.textContent = '';
        if (passwordInput) passwordInput.value = '';
        checkClassroomAccess();
      } else {
        if (passwordErrorMsg) passwordErrorMsg.textContent = 'Incorrect passcode. Please try again.';
        if (passwordInput) passwordInput.value = '';
      }
    });
  }

  checkClassroomAccess();

  // Classroom course view helpers
  window.openCourse = function (courseId) {
    const dashboard = document.getElementById('classroom-dashboard');
    if (dashboard) dashboard.style.display = 'none';
    const views = document.querySelectorAll('.course-detail-view');
    views.forEach(v => v.classList.remove('active'));
    const target = document.getElementById(courseId);
    if (target) target.classList.add('active');
    const cont = document.querySelector('.container');
    if (cont) cont.scrollIntoView({ behavior: 'smooth' });
  };

  window.closeCourse = function () {
    const views = document.querySelectorAll('.course-detail-view');
    views.forEach(v => v.classList.remove('active'));
    const dashboard = document.getElementById('classroom-dashboard');
    if (dashboard) dashboard.style.display = 'block';
  };

  // Teaching page helpers
  window.openTeachingSection = function (sectionId) {
    const dashboard = document.getElementById('teaching-dashboard');
    if (dashboard) dashboard.style.display = 'none';
    const views = document.querySelectorAll('.teaching-detail-view');
    views.forEach(v => v.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');
    const cont = document.querySelector('.container');
    if (cont) cont.scrollIntoView({ behavior: 'smooth' });
  };

  window.closeTeachingSection = function () {
    const views = document.querySelectorAll('.teaching-detail-view');
    views.forEach(v => v.classList.remove('active'));
    const dashboard = document.getElementById('teaching-dashboard');
    if (dashboard) dashboard.style.display = 'block';
  };
});
