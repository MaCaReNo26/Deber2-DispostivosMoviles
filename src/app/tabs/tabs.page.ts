
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { cartOutline, cardOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
  ]
})
export class TabsPage {
  constructor() {
    addIcons({
      cartOutline,
      cardOutline
    });
  }
}
