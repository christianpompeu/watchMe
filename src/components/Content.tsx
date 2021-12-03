import { MovieCard } from "./MovieCard";
import { Header } from "./Header";
import "../styles/global.scss";
import "../styles/content.scss";

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  genreTitle: string;
  movies: Movie[];
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <Header title={props.genreTitle}/>
      <main>
        <div className="movies-list">
          {props.movies.map(
            (movie)=>(
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
}
