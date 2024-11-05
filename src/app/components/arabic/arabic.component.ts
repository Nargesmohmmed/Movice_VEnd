import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesapiService } from 'src/app/core/services/moviesapi.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-arabic',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule  , NgxPaginationModule],
  templateUrl: './arabic.component.html',
  styleUrls: ['./arabic.component.scss']
})
export class ArabicComponent implements OnInit {

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

    this.getArabic()

  }

  getArabic():void {

    this._MoviesapiService.getArabicMovies().subscribe({

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
    this._MoviesapiService.getArabicMovies(event).subscribe({
      next: (response) => {
        console.log('getComedyPage', response);
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
