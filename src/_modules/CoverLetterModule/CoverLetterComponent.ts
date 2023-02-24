import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './CoverLetterComponentTemplate.html',
  styleUrls: ['./CoverLetterComponentStyle.css'],
})
export class CoverLetterComponent implements OnInit, OnChanges {
  constructor(private titleService: Title) {}

  ngOnInit(): void {}

  public now(): Date {
    return new Date();
  }

  public print(): void {
    window.print();
  }

  public isSet(value: string): boolean {
    return value !== '';
  }

  public isNotSet(value: string): boolean {
    return this.isSet(value) == false;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.titleService.setTitle('My Cover Letter');
  }
}
