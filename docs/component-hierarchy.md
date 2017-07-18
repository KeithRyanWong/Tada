## Component Hierarchy

**HeaderFooterContainer**
  - Search
  - SearchResults

**AuthFormContainer**
 - AuthForm

**ExploreContainer**
 - ProjectsIndex
   - ProjectsIndexItem

**GalleryConainer**

**ProjectViewContainer**
  - ProjectHeaderContainer
  - ItemIndexContainer
    - item
  - UserGeneralDetailContainer
  - CommentFormContainer
  - CommentsIndexContainer
    - CommentsItemContainer

**ItemView**
  - ItemsIndexContainer (Can I use the same container as in ProjectView and change display type?)

**ProfileContainer**
 - UserFullDetailContainer
 - UserProjectsAndFollowsContainer
   - UserProjectsContainer
     - UserProjectsIndextItem
   - UserFollowsContainer
     - UserFollowedProjectsIndexItem

**ProjectFormContainer**
  - ProjectForm

## Routes

|Path                                             | Component               |
|-------------------------------------------------|-------------------------|
| "/"                                             | DiscoverContainer       |
| "/user/:id"                                     | PortfolioContainer      |
| "/search"                                       | SearchContainer         |
| "/galleries"                                    | GalleryIndexContainer   |
| "/gallery/:id"                                  | GalleryShowContainer    |
| "/projects"                                     | ProjectsIndexContainer  |
| "/project/:id"                                  | ProjectShowContainer    |
| "/item/:id"                                     | ItemShowContainer       |
| "/session/new"                                  | AuthFormContainer       |
| "/user/new"                                     | AuthFormContainer       |

