import '../styles/header.scss';

export interface HeaderProps {
  selectedGenre: {
    title: string;
  }
}

const Header: React.SFC<HeaderProps> = (props) => {
  return (
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>
  );
}

export default Header;