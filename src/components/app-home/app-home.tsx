import { Component, State, h } from "@stencil/core";
import { myFadeInAnimation } from "../../animations/fade-in";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State() cards = [1, 2, 3, 4, 5];

  async launchDetail(event) {
    const modalCtrl = document.querySelector("ion-modal-controller");

    let modal = await modalCtrl.create({
      component: "app-detail",
      enterAnimation: myFadeInAnimation,
      componentProps: {
        coords: {
          x: event.target.x,
          y: event.target.y
        }
      }
    });

    modal.present();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="light">
          <ion-title>Products</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        {this.cards.map(() => (
          <ion-card button onClick={event => this.launchDetail(event)}>
            <img src="/assets/grateful.jpg" />
          </ion-card>
        ))}
      </ion-content>
    ];
  }
}
