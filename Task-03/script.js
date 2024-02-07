class Email {
  constructor(fromArg, toArg, subjectArg, messageArg) {
    this.from = fromArg;
    this.to = toArg;
    this.subject = subjectArg;
    this.message = messageArg;
  }
  displayAlert() {
    alert(`Email Message\n\nFrom: ${this.from}\nTo: ${this.to}\nSubject: ${this.subject}\nMessage: ${this.message}`);
  }
}

const from = prompt('Enter your email address:');
const to = prompt('Enter the email of the recipient:');
const subject = prompt('Enter the subject of the email:');
const message = prompt('Enter the message:');

const email = new Email(from, to, subject, message);
email.displayAlert();

document.querySelector('#fromEmail').value = email.from;
document.querySelector('#toEmail').value = email.to;
document.querySelector('#subject').value = email.subject;
document.querySelector('#message').value = email.message;
