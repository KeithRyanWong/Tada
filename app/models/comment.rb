class Comment < ApplicationRecord
  validates :project_id, 
            :body, 
            :user_id,
            presence: true
  
  belongs_to :user
  belongs_to :project
end
