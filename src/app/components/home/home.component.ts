import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderDirective } from 'src/app/slider.directive';
import { MoviesapiService } from 'src/app/core/services/moviesapi.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
// import { RedblakDirective } from 'src/app/redblak.directive';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , SliderDirective , CarouselModule , NgxPaginationModule , ReactiveFormsModule , RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _MoviesapiService:MoviesapiService) {}
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'
  trendingMovies:any[] = [];
  PopularMovies:any[] = [];

  pageSize: number = 20; // limit
  currentPage: number = 1; // current page
  total: number = 0;

  id:any ;

  // imgsrc:string = `https://image.tmdb.org/t/p/original/`
  // constructor(private _RedblakDirective:RedblakDirective) {}

  // @ViewChild('imageSlider') _ElementRef!: ElementRef ;

  ngOnInit(): void {

    this._MoviesapiService.getTrendingMovies().subscribe({

      next: (response) => {
        this.trendingMovies = response.results
        console.log(response.results)
      },
      error: (error) => {
        // this.trendingMovies = error.message
        console.log(error)
      }

    })

    this.getPopularMovies()


  }

  getPopularMovies():void {

    this._MoviesapiService.getPopularMovies().subscribe({

      next: (response) => {
        console.log('popular', response);
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
    this._MoviesapiService.getPopularMovies(event).subscribe({
      next: (response) => {
        console.log('popular', response);
        this.PopularMovies = response.results;
        this.currentPage = response.page;
        this.total = response.total_results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


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




  // getTrendingMovies() {
  //   this._MoviesapiService.getTrendingMovies().subscribe({
  //     next: (response) => {
  //       // console.log('trends', response); //? just for test
  //       this.trendingMovies = response.results;
  //       console.log('=>', this.trendingMovies); //? for test only
  //     },
  //     error: (error) => {
  //       console.log(error); //? just for test
  //     },
  //   });
  // }


}
