import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  oldText: string = "New Article Text";
  articleText: string = "Article";

  changeText()
  {
      
      var temp = this.articleText; 
      this.articleText = this.oldText;
      this.oldText = temp;
  }
}
