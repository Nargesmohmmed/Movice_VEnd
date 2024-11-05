import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { MoviesapiService } from 'src/app/core/services/moviesapi.service';

@Component({
  selector: 'app-adventure',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , CarouselModule , NgxPaginationModule],
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent implements OnInit {


  constructor(private _MoviesapiService:MoviesapiService) {}

  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'
  trendingMovies:any[] = [];
  PopularMovies:any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {

    this.getAdventure()

  }

  getAdventure():void {

    this._MoviesapiService.getAdventureMovies().subscribe({

      next: (response) => {
        console.log('getAction', response);
        this.PopularMovies = response.results
        this.currentPage = response.page;
        this.total = response.total_results;
        // console.log(response.results)
      },
      error: (error) => {
        console.log(error)
      }

    })

  }



  pageChanged(event: any): void {
    console.log(event); //? for test only
    this._MoviesapiService.getAdventureMovies(event).subscribe({
      next: (response) => {
        console.log('getAdventurePage', response);
        this.PopularMovies = response.results;
        this.currentPage = response.page;
        this.total = response.total_results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
