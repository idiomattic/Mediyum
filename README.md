# Mediyum

### Mediyum, taking design and functionality inspiration from medium.com, is a community which allows independent recipe writers to share their recipes with others and engage in thoughtful discussion over the foods that they are passionate about.

[Come and see for yourself!](https://mediyum.herokuapp.com/#/)

## Features
- Users can join the community by creating an account and tour around by using the 'Demo' feature.
- Any user may post a recipe to the site and share with others.  One's own beautiful food pics can be displayed on their recipe's page!
- Join the discussion by leaving comments on anyone's recipes!
- Engage with each other by following recipe writers whose content you enjoy, and leave 'Yums' on recipes as positive feedback.
- Edit and delete your own content as you please.

## Technologies
- Backend: Ruby on Rails
- Database: PostgreSQL
- Frontend: React w/ Redux, HTML and CSS

## Highlights
- Thanks to React and Redux, Mediyum allows users to see instant feedback on the number of 'Yums' that a recipe has received and the number of Followers that a given user has.
- By using Rails associations and Jbuilder, the Redux state of Mediyum on any given page has access to relevant data that can be dynamically displayed without unneccessary Backend API queries.

## A code snippet, for the curious
```javascript
function Modal({modal, hideModal}) {
  if (!modal) {
    return null;
  }
  let component
  let backgroundClass
  let childClass
  switch (modal) {
    case 'Sign In':
      component = <SignInFormContainer />
      backgroundClass = 'modal-background'
      childClass = 'modal-child'
      break
    case 'Sign Up':
      component = <SignUpFormContainer />
      backgroundClass = 'modal-background'
      childClass = 'modal-child'
      break
    case 'Dropdown':
      component = <DropdownModalContainer />
      backgroundClass = 'dropdown modal-background'
      childClass = 'dropdown modal-child'
      break
    case 'Comments':
      component = <CommentsModalContainer />
      backgroundClass = 'comments modal-background'
      childClass = 'comments modal-child'
      break
    default:
      return null;
  }
  return (
    <div className={backgroundClass} onClick={hideModal}>
      <div className={childClass} onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

export default Modal
