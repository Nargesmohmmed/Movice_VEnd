import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesapiService {

  constructor(private _HttpClient:HttpClient) { }

  Token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTM5YjMzZmM4NmI2NWViMmU5N2NiYzMxYzYwNjgwYSIsInN1YiI6IjY1YzM2MTQ5ZTI2N2RlMDE3ZGJjNjQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GyAYmx-OD4tgk0l5vFvQ4LEJY3CU0SsJqYSXR9Abme0';
  baseurl: string = 'https://api.themoviedb.org/3/';
  apikey: string = '0e39b33fc86b65eb2e97cbc31c60680a';

  getTrendingMovies(pageNumber: number = 1):Observable <any> {

    return this._HttpClient.get(`${this.baseurl}trending/movie/day?api_key=${this.apikey}&page=${pageNumber}`)

  }

   //^ popular movies
   getPopularMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}movie/popular?api_key=${this.apikey}&page=${pageNumber}`
    );
  }


   //^ popular movies Id
   getPopularMoviesId(id: any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}movie/${id}?api_key=${this.apikey}`
    );
  }


  //^ action movies
  getActionMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(`${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=28&page=${pageNumber}`
    );
  }

    //^ adventure movies
    getAdventureMovies(pageNumber: number = 1): Observable<any> {
      return this._HttpClient.get(
        `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=12&page=${pageNumber}`
      );
    }

    //^ animation movies
  getAnimationMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=16&page=${pageNumber}`
    );
  }

    //^ comedy movies
    getComedyMovies(pageNumber: number = 1): Observable<any> {
      return this._HttpClient.get(
        `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=35&page=${pageNumber}`
      );
    }

     //^ documentary movies
  getDocumentaryMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=99&page=${pageNumber}`
    );
  }

   //^ fiction movies
   getFictionMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=878&page=${pageNumber}`
    );
  }
  //^ horror movies
  getHorror(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&with_genres=27&page=${pageNumber}`
    );
  }
  //^ arabic movies
  getArabicMovies(pageNumber: number = 1): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}discover/movie?api_key=${this.apikey}&language=ar&region=eg&with_original_language=ar&page=${pageNumber} `
    );
  }

  //^ search movies api
  seachMovies(term: any , Yera:any): Observable<any> {
    return this._HttpClient.get(
      `${this.baseurl}search/movie?api_key=${this.apikey}&query=${term}&year=${Yera}`
    );
  }

    // SerchMovice(SerchYaer:any , SerchMonth:any):Observable<any> {



    //    return this._HttpClient.get
    //    (`${this.baseurl}ReportGuestDataByDate?Year=${SerchYaer}&Month=${SerchMonth}` )



    // }


}
