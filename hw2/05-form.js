// Add your code here
document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const registrationStatus = document.getElementById('registration-status').value || 'N/A';
  const programmingLanguages = document.getElementById('programming-languages').checked;
  const operatingSystems = document.getElementById('operating-systems').checked;
  const fullStack = document.getElementById('full-stack').checked;
  const message = document.getElementById('message').value || 'N/A';

  console.group('===== Form Submission =====');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Registration Status: ${registrationStatus}`);
  if (programmingLanguages || operatingSystems || fullStack) {
    console.group('Courses Taken:');
    if (programmingLanguages) console.log('Programming Languages');
    if (operatingSystems) console.log('Operating Systems');
    if (fullStack) console.log('Full Stack Web Development');
    console.groupEnd();
  } else {
    console.log('Courses Taken: N/A');
  }
  console.log(`Message: ${message}`);
  console.groupEnd();
}
