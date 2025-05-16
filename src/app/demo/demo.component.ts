import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() value: string = 'Значение';

  constructor() {
    console.log('CONSTRUCTOR вызван');
    console.log('🚀 ~ DemoComponent ~ value:', this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges ~ changes:', changes);
  }

  ngOnInit() {
    console.log('ngOnInit вызван');
    console.log('🚀 ~ DemoComponent ~ value:', this.value);
  }

  ngDoCheck() {
    console.log('ngDoCheck вызван');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit вызван');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked вызван');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit вызван');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked вызван');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy вызван');
  }
}
