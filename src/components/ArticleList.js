import blogData from "../data/blog";
import Article from "./Article.js"
function ArticleList(props){
    return(
        <main>
            {/* <Article title={blogData.posts.title} date={blogData.posts.date} preview={blogData.posts.preview}/> */}
            {blogData.posts.map(post => 
                <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
            )}
        </main>
    );
}

export default ArticleList;