<script lang="ts">
  import Banner from "$lib/components/Banner.svelte";
  import MailGun from "$lib/services/mailgunService";
  import { BannerT, ContactFormT } from "$lib/types/types";
  import Saos from "saos";
  import Links from "$lib/components/LinksComp.svelte";
  import MiniProfile from "$lib/components/MiniProfile.svelte";

  let bannerInfo: BannerT = new BannerT();
  let form: ContactFormT = new ContactFormT();

  async function sendEmail() {
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

<section id="contact">
  <div class="contact-row">
    <Saos animation={"from-left 1s ease"}>
      <MiniProfile />
      <div class="form" id="form">
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
        <button on:click={sendEmail} class="clickable"
          >Send
          <svg viewBox="0 0 16 16" class="icon"
            ><path
              d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
            /></svg
          >
        </button>
      </div>
    </Saos>

    <Saos animation={"from-right 1s ease"}>
      <Links />
    </Saos>
  </div>
</section>

<Banner {bannerInfo} />

<style lang="scss">
  $primary-color: #222;

  $accent-color: #43d0ff;
  $translucent-accent: #43d0ff55;

  $accent-tint-color: #7adeff;
  $text-color: #fff;

  section {
    --background: #222;
    justify-content: center;
    height: 100vh;
    width: 100vw;
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
      background-color: #444;
      border: none;
      padding: 20px;
      border-radius: 10px;
      box-sizing: border-box;
      font-size: max(0.7vw, 20px);
      color: #fff;
      box-shadow: 3px 3px 0px 0px #1116;

      &:focus {
        outline: 2px solid $accent-color;
        scale: 1.05;
      }

      &:hover {
        scale: 1.05;
      }
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
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.2s ease;

      .icon {
        width: 0.9em;
        height: 0.9em;
        fill: $accent-color;
        transition: 0.2s ease;
      }

      &:hover {
        .icon {
          fill: $primary-color;
        }
      }
    }
  }

  .contact-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: min(80%, 1200px);
    align-items: flex-end;
    margin-top: 100px;

    .alt-contacts {
      margin-left: 2em;
      font-size: max(1.5em, 1.5vw);

      img {
        height: 1em;
        margin-right: 10px;
      }
    }

    p {
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: left;

      a:hover {
        scale: 1.05;
      }
    }
  }

  @media (max-width: 1100px) {
    section {
      height: auto;
    }

    .contact-row {
      flex-direction: column;
      align-items: center;
      margin-right: 0;

      .form {
        width: 90%;

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
        margin-bottom: 50px;
        margin-left: 0;
      }
    }
  }

  @media (max-width: 768px) {
    .contact-row {
      margin-top: 80px;
    }
    .form {
      display: none;
    }
  }
</style>
