import { Keys } from "./keys";
type Form = {
  name: string;
  email: string;
  message: string;
};

export default class MailGun {
  static async sendEmail(form: Form) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Keys.mailGun}`,
      },
      body: new URLSearchParams({
        from: `${form.name} <${form.email}>`,
        to: "eti@naude.dev",
        subject: "WEBSITE EMAIL",
        text: `
        Name: ${form.name}
        Email: ${form.email}
        Message: ${form.message}
        `,
      }),
    };

    fetch(
      "https://api.mailgun.net/v3/sandbox67c6e4cf5eeb419db0e583f8fa5b39ce.mailgun.org/messages",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    console.log("SENDING EMAIL 3");
  }

  static validateEmail(email: string) {
    // TODO: improve email validation
    const re = /\S+@\S+\.\S+/;

    return re.test(email);
  }

  static validateName(name: string) {
    const re = /^[a-zA-Z]+$/;
    return re.test(name);
  }

  static validateMessage(message: string) {
    return message.length > 0;
  }

  static validateAll(form: Form): {
    valid: boolean;
    message: string;
  } {
    if (!this.validateName(form.name)) {
      return {
        valid: false,
        message: "Please enter a valid name",
      };
    }
    if (!this.validateEmail(form.email)) {
      return {
        valid: false,
        message: "Please enter a valid email",
      };
    }
    if (!this.validateMessage(form.message)) {
      return {
        valid: false,
        message: "Please enter a valid message",
      };
    }

    return { valid: true, message: "" };
  }
}
