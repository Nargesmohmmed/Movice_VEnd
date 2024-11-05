import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesapiService } from 'src/app/core/services/moviesapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  movieDetailsResult:any = "";
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500'

  constructor (
    private _MoviesapiService:MoviesapiService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {


    let paramId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getPopularMoviesId(paramId);

  }


    getPopularMoviesId(id:any):void {

    this._MoviesapiService.getPopularMoviesId(id).subscribe({

      next: (response) => {
        console.log('popularId', response);
        this.movieDetailsResult = response

        // console.log(response.results)
      },
      error: (error) => {
        console.log(error)
      }

    })

  }


}
