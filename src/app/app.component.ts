
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonMenu, IonHeader, IonToolbar, IonContent, IonTitle, IonButtons, IonMenuButton, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,buildOutline, buildSharp,earthOutline, earthSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, RouterLinkActive, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonMenu, IonContent, IonList, IonListHeader, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'earth' },
    { title: 'Login', url: 'login', icon: 'bookmark'},

  ];
  public labels = [];
  constructor() {
    addIcons({ mailOutline, buildOutline, buildSharp,earthOutline, earthSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
  ngOnInit(){

  }
}
