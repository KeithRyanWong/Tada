## Component Hierarchy

**DiscoverContainer**
 - HeaderContainer
 - ProjectsIndexContainer (Can re-use in other sections by utilizing mapped dispatch to select correct items?)
   - ProjectsIndexItemContainer
 - FooterComponent 

**PortfolioContainer**
 - HeaderContainer
 - PortfolioDetailsContainer
 - PortfolioContentContainer
   - ProjectsIndexContainer
     - ProjectsIndexItemContainer 
 - FooterContainer


**AuthFormContainer**
 - AuthForm

**ProjectShowContainer**
  - ProjectHeaderContainer
  - ItemIndexContainer
    - item
  - UserGeneralDetailContainer
  - CommentFormContainer
  - CommentsIndexContainer
    - CommentsItemContainer

<!-- **SearchContainer**
 - HeaderContainer
 - SearchIndexContainer
 - FooterComponent -->

<!-- **GalleriesConainer**
 - GalleryIndexContainer
   - ProjectsIndexItemContainer

**GalleryContainer** -->


**ItemShowContainer**
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

|Path                                             | Component                 |
|-------------------------------------------------|---------------------------|
| "/"                                             | **DiscoverContainer**     |
| "/user/:id"                                     | **PortfolioContainer**    |
<!-- | "/search"                                       | **SearchContainer**       | -->
<!-- | "/galleries"                                    | **GalleriesContainer**    |
| "/gallery/:id"                                  | **GalleryShowContainer**  | -->
| "/project/:id"                                  | **ProjectShowContainer**  |
| "/project/new"                                  | **ProjectFormContainer**  |
| "/item/:id"                                     | **ItemShowContainer**     |
| "/session/new"                                  | **AuthFormContainer**     |
| "/user/new"                                     | **AuthFormContainer**     |

