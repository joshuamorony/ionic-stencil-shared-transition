import { Component, Element, h } from "@stencil/core";

@Component({
  tag: "app-detail",
  styleUrl: "app-detail.css"
})
export class AppDetail {
  @Element() el: HTMLElement;

  private modalElement: HTMLIonModalElement;

  componentDidLoad() {
    this.modalElement = this.el.closest("ion-modal");
    const y = this.modalElement.componentProps.coords.y;

    this.el
      .querySelector(".header-image")
      .animate(
        [
          { transform: `translate3d(0, ${y - 56}px, 0) scale3d(0.9, 0.9, 1)` },
          { transform: `translate3d(0, 0, 0) scale3d(1, 1, 1)` }
        ],
        {
          duration: 500,
          easing: "ease-in-out"
        }
      );
  }

  close() {
    this.modalElement.dismiss();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-title>Detail</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.close()}>
              <ion-icon slot="icon-only" name="close" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <img class="header-image" src="/assets/grateful.jpg" />

        <div style={{ padding: `20px` }} class="container">
          <h2>Really cool...</h2>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </ion-content>
    ];
  }
}
