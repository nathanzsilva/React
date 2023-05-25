import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import '../../styles/global-style.css';
import { Component } from 'react';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ""
  };

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }


  render() {
    const { posts, postsPerPage, page, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length
    const postsFilter = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(
          searchValue.toLowerCase()
        )
      })
      :
      posts;

    return (
      <section className='container'>
        <TextInput 
        searchValue={searchValue}
        handleChange={this.handleChange}
        postsFilter={postsFilter}
        />
        <Posts posts={postsFilter} />
        {!searchValue && (
          <Button
            text="Load more Text"
            onclick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </section>
    )
  }
}

export default Home;
