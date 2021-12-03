import { Button } from "./Button";

import '../styles/global.scss';
import "../styles/sidebar.scss";

interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SideBarProps {
  genres: Genre[];
  function: any;
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  return (
    <>
      <nav className="sidebar">
        <span>
          Watch<p>Me</p>
        </span>
        <div className="buttons-sidebar">
          {props.genres.map((genre) => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.function(genre.id)}
              selected={props.selectedGenreId===genre.id}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
