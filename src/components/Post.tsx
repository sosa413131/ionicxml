import './Post.css';

const Post: React.FC<{ title: string, link: string, author: string, summary: string, id:string }> = ({title, link, author, summary, id }) => {
    return (
      <div>
        <h1><a id={id} href={link}>{title}</a></h1>
        <p>{summary}</p>
        </div>
    );
    };



export default Post;