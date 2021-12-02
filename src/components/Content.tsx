import { Header } from "./Header";
import "../styles/content.scss";

interface ContentProps{
  title: string
}

export function Content(props: ContentProps) {
  return(
    <div className="container">
      <Header title={props.title}/>
    </div>
  )
}