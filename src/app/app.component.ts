import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private eleRef: ElementRef) {} 
  
  public click(event) {
    this.eleRef.nativeElement.querySelectorAll('#navbarSupportedContent .nav-item a').forEach(element => {
      element.classList.remove('active');  
    });
    event.target.classList.add('active');
  }

  ngOnInit() {
    
  }
}
