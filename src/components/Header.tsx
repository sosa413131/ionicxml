import './Header.css';

interface ContainerProps { }

const Header: React.FC<ContainerProps> = () => {
  return (
    <>
        <p>
            Welcome to my blog. I added a few posts to test some things out.
        </p>
    </>
  );
};

export default Header;