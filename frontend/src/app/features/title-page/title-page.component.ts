import { Component, OnInit } from '@angular/core';
import { TitlePageFacade } from 'src/app/state/title-page';

@Component({
  selector: 'cv-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss'],
})
export class TitlePageComponent implements OnInit {
  title$ = this.titlePageFacade.title$;

  constructor(private titlePageFacade: TitlePageFacade) {}

  ngOnInit(): void {
    this.titlePageFacade.setTitle({ title: 'CV Designer' });
  }
}
