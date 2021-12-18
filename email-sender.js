/*
    Task 1: Send email with EmailSender

    1. Instantiate an EmailSender object with the respective arguments in constructor. 
    2. Call send() with the instantiatd object
    3. Toggle variable "mockState" to test if your code handles the 3 scenarios.
        - Success (resolve)
        - Recipient bounced (resolve)
        - Technical error (reject)
*/

class EmailSender {
  #to = [];
  #cc = [];
  #subject;
  #content;

  mockState = 1; // 1 = success, 2 = recipient bounced, 3 = technical error

  constructor(to = [], subject, content, cc = []) {
    // Optional argument at the back
    if (!to) {
      this.#to = [].concat(to);
    }
    if (!cc) {
      this.#cc = [].concat(cc);
    }
    this.#subject = subject;
    this.#content = content;
  }

   send() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.mockState == 1) {
          resolve("ok");
        } else if (this.mockState == 2) {
          resolve("Some recipient(s) email bounced");
        } else {
          reject("Technical error");
        }
      }, 3000); // Mock email sending that takes around 3 seconds
    });
  }
}

let emailSenderObject = new EmailSender(['mani@email.com'], 'Hello', 'how are you' ['raja@email.com']);
emailSenderObject.send().then((resolveVal) =>{
  console.log(resolveVal);
})