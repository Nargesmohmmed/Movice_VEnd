import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '' , loadComponent: () => import("./layouts/blank-layout/blank-layout.component")
  .then((m) => m.BlankLayoutComponent)

  ,children: [
    {path: '' , redirectTo: 'home' , pathMatch: 'full'},
    {path: 'home' , loadComponent: () => import("./components/home/home.component")
      .then((m) => m.HomeComponent) , title: 'Home'
    },
    {path: 'trending' , loadComponent: () => import("./components/trending/trending.component")
      .then((m) => m.TrendingComponent) , title: 'Trending'
    },
    {path: 'action' , loadComponent: () => import("./components/action/action.component")
      .then((m) => m.ActionComponent) , title: 'Action'
    },
    {path: 'adventure' , loadComponent: () => import("./components/adventure/adventure.component")
      .then((m) => m.AdventureComponent) , title: 'Adventure'
    },
    {path: 'animation' , loadComponent: () => import("./components/animation/animation.component")
      .then((m) => m.AnimationComponent) , title: 'Animation'
    },
    {path: 'comedy' , loadComponent: () => import("./components/comedy/comedy.component")
      .then((m) => m.ComedyComponent) , title: 'Comedy'
    },
    {path: 'documentary' , loadComponent: () => import("./components/documentary/documentary.component")
      .then((m) => m.DocumentaryComponent) , title: 'Documentary'
    },
    {path: 'fiction' , loadComponent: () => import("./components/fiction/fiction.component")
      .then((m) => m.FictionComponent) , title: 'Fiction'
    },
    {path: 'horror' , loadComponent: () => import("./components/horror/horror.component")
      .then((m) => m.HorrorComponent) , title: 'Horror'
    },
    {path: 'arabic' , loadComponent: () => import("./components/arabic/arabic.component")
      .then((m) => m.ArabicComponent) , title: 'Arabic'
    },

    {path: 'details/:id' , loadComponent: () => import("./components/details/details.component")
      .then((m) => m.DetailsComponent) , title: 'Details'
    }
  ]




},

{path: 'seach' , loadComponent: () => import("./components/seach-movies/seach-movies.component")
  .then((m) => m.SeachMoviesComponent) , title: 'SeachMovices'
},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
