<script lang="ts">
  import Banner from "$lib/components/Banner.svelte";
  import MailGun from "$lib/services/mailgunService";
  import { BannerT, ContactFormT } from "$lib/types/types";

  let bannerInfo: BannerT = new BannerT();
  let form: ContactFormT = new ContactFormT();

  async function sendEmail() {
    console.log(form);
    const validate = MailGun.validateAll(form);

    bannerInfo = {
      style: "loading",
      text: "sending",
      display: true,
    };

    if (validate.valid) {
      await MailGun.sendEmail(form);
      bannerInfo = {
        style: "success",
        text: "Sent! I look forward to talking with you.",
        display: true,
      };

      form = {
        name: "",
        email: "",
        message: "",
      };
    } else {
      bannerInfo = {
        style: "error",
        text: validate.message,
        display: true,
      };
    }

    setTimeout(() => {
      bannerInfo.display = false;
    }, 3000);
  }
</script>

<section>
  <div class="wave">
    <svg viewBox="0 0 1440 90"
      ><path
        d="M0,72L30,72C60,72,120,72,180,72C240,72,300,72,360,84C420,96,480,120,540,114C600,108,660,72,720,63C780,54,840,72,900,90C960,108,1020,126,1080,123C1140,120,1200,96,1260,81C1320,66,1380,60,1440,69C1500,78,1560,102,1620,105C1680,108,1740,90,1800,93C1860,96,1920,120,1980,120C2040,120,2100,96,2160,93C2220,90,2280,108,2340,114C2400,120,2460,114,2520,96C2580,78,2640,48,2700,54C2760,60,2820,102,2880,120C2940,138,3000,132,3060,120C3120,108,3180,90,3240,84C3300,78,3360,84,3420,93C3480,102,3540,114,3600,105C3660,96,3720,66,3780,66C3840,66,3900,96,3960,102C4020,108,4080,90,4140,84C4200,78,4260,84,4290,87L4320,90L4320,180L4290,180C4260,180,4200,180,4140,180C4080,180,4020,180,3960,180C3900,180,3840,180,3780,180C3720,180,3660,180,3600,180C3540,180,3480,180,3420,180C3360,180,3300,180,3240,180C3180,180,3120,180,3060,180C3000,180,2940,180,2880,180C2820,180,2760,180,2700,180C2640,180,2580,180,2520,180C2460,180,2400,180,2340,180C2280,180,2220,180,2160,180C2100,180,2040,180,1980,180C1920,180,1860,180,1800,180C1740,180,1680,180,1620,180C1560,180,1500,180,1440,180C1380,180,1320,180,1260,180C1200,180,1140,180,1080,180C1020,180,960,180,900,180C840,180,780,180,720,180C660,180,600,180,540,180C480,180,420,180,360,180C300,180,240,180,180,180C120,180,60,180,30,180L0,180Z"
      /></svg
    >
  </div>

  <h1>Contact Me</h1>

  <div class="contact-row">
    <div name="contact" class="form" id="form">
      <div class="row">
        <input
          type="text"
          name="name"
          bind:value={form.name}
          placeholder="name"
          class="clickable"
        />
        <input
          type="email"
          name="email"
          bind:value={form.email}
          placeholder="email"
          class="clickable"
        />
      </div>

      <textarea
        name="message"
        placeholder="message"
        bind:value={form.message}
        class="clickable"
      />
      <button on:click={sendEmail} class="clickable">Send</button>
    </div>

    <div class="alt-contacts">
      Or here:
      <p>
        Email: <a href="mailto:eti@naude.dev" class="clickable">eti@naude.dev</a
        >
      </p>

      <p>
        Linked In: <a
          href="https://www.linkedin.com/in/etinaude/"
          class="clickable">linkedin.com/in/etinaude</a
        >
      </p>

      <p>
        Github: <a href="https://www.github.com/etinaude" class="clickable"
          >github.com/etinaude</a
        >
      </p>

      <p>
        Instagram: <a
          href="https://www.instagram.com/etinaude/"
          class="clickable">@etinaude</a
        >
      </p>
    </div>
  </div>
</section>

<Banner {bannerInfo} />

<style lang="scss">
  section {
    --background: #222;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    .alt-contacts {
      font-size: 1.5em;
    }
  }

  .form {
    width: 500px;

    > * {
      margin: 1em 0;

      &:first-child {
        margin-top: 0;
      }
    }

    input,
    textarea {
      background-color: #333;
      border: none;
      padding: 20px;
      border-radius: 10px;
      box-sizing: border-box;
      font-size: 1.2em;
    }

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 0px;

      input {
        width: calc(50% - 10px);
        margin-bottom: 20px;
      }
    }

    textarea {
      resize: none;
      height: 200px;
      width: 100%;
      margin-top: 0px;
    }

    button {
      width: 100%;
      margin: 0;
      font-size: 1.5em;
    }
  }

  .contact-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    max-width: 1150px;

    p {
      font-size: 1.2em;
    }
  }

  @media (max-width: 768px) {
    section {
      height: auto;
    }

    .contact-row {
      flex-direction: column;
      align-items: center;

      .form {
        width: 100%;

        .row {
          flex-direction: column;
          align-items: center;

          input {
            width: 100%;
          }
        }
      }

      .alt-contacts {
        margin-top: 2em;
        font-size: 16px;
        margin-bottom: 50px;
      }
    }
  }
</style>
