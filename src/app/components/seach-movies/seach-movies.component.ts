import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesapiService } from 'src/app/core/services/moviesapi.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seach-movies',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule],
  templateUrl: './seach-movies.component.html',
  styleUrls: ['./seach-movies.component.scss']
})
export class SeachMoviesComponent implements OnInit {

  serchYearMovies:any;
  serchNameMovies:string = "";
    imgPrefix:string = 'https://image.tmdb.org/t/p/w500'
    Movice:any[] = [];

  constructor(private _MoviesapiService:MoviesapiService ,private _Router:Router) {}

  ngOnInit(): void {

    this.getSeachMovies()

  }

  getSeachMovies():void {


    this._MoviesapiService.seachMovies(this.serchNameMovies  , this.serchYearMovies  ).subscribe({

      next: (response) => {
        console.log('getSeach', response.results);
        this.Movice = response.results
        // this.PopularMovies = response.results
        // this.currentPage = response.page;
        // this.total = response.total_results;
        // // console.log(response.results)
      },
      error: (error) => {
        console.log(error)
      }

    })

  }

  Router :any;

  back():void{

    this.Router = this._Router.navigate(["/home"]);

  }



}
