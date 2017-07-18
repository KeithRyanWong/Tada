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
| "/"                                             | ExploreContainer        |
| "/"                                             | HeaderFooterContainer   |
| "/user/:id/projects/:project_id/item/:item_id   | "ItemView"              |
| "/user/:id/projects/:pid                        | "ProjectViewContainer"  |
| "/user/:id                                      | "ProfileContainer"      |
| "/user/:id"                                     | HeaderFooterContainer   |
| "/sign-up"                                      | "AuthFormContainer"     |
| "/sign-in"                                      | "AuthFormContainer"     |
