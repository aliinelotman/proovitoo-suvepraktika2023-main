import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {
favoriteBooks: any = []



ngOnInit(): void {
  this.favoriteBooks = JSON.parse(localStorage.getItem("favorites") || "[]");

}

}
