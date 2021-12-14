import React from "react";
import { withRouter } from "react-router";
import CommentsIndexItemContainer from "./comments_index_item_container";
import CommentFormContainer from "./comment_form_container";

class CommentsModal extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      commentsArr: [],
      comment: {
        body: '',
        recipe_id: this.props.recipe.id,
        commenter_id: this.props.currentUserId
      }
    }
  }

  componentDidMount() {
    let {fetchComments, recipe} = this.props
    let filteredCommentsArr
    fetchComments()
      .then(res => {
        filteredCommentsArr = this.filterComments()
      })
    this.setState({
      commentsArr: filteredCommentsArr
    })
  }

  updateBody() {
    return e => this.setState({
      comment: {body: e.target.value}
    })
  }

  filterComments() {
    let { comments } = this.props
    let filteredComments = comments.filter(comment => comment.recipe_id === this.state.comment.recipe_id)
    return(filteredComments)
  }

  render() {
    let { modal, recipe } = this.props
    const recipeComments = this.filterComments()
    // console.log(this.state.numComments)

    return !modal ? null : (
      <div className='comments-modal'>
        <h2 className='comments-count'>Comments ({recipeComments.length})</h2>
        <CommentFormContainer />
        <ul className="comments-list">
          {
            recipeComments.map((comment, i) => 
              <CommentsIndexItemContainer key={i} comment={comment} />
            )
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(CommentsModal)