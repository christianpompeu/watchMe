import "../styles/global.scss";
import "../styles/content.scss";

interface HeaderProps {
  title: string;
}
export function Header(props: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.title}</span>
      </span>
    </header>
  );
}
