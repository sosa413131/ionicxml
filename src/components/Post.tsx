import './Post.css';

interface ContainerProps { 
    title: string, 
    link: string, 
    author: string, 
    summary: string, 
    id:string, 
    imageUrl:string,
    date: string
}

const Post: React.FC<ContainerProps> = ({title, link, author, summary, id, imageUrl, date}) => {
    return (
        <div className='post'>
            <h2>{date}</h2>
            <h1><a id={id} href={link}>{title}</a></h1>  <h3>By {author}</h3>
            <img className ='postImage' src={imageUrl}/>
            <p>{summary}</p>
        </div>
    );
};

export default Post;