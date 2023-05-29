import  "./style.css"
import { PostCard } from "../PostCard"

export const Posts = ({posts = []}) => {
    return (
        <div className="posts">
            {posts.map(posts => (
                <PostCard
                    key={posts.id}
                    title={posts.title}
                    body={posts.body}
                    id={posts.id}
                    cover={posts.cover} 
                    />
            ))}
        </div>
    )
}