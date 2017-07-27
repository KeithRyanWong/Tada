class Like < ApplicationRecord
  validates :user_id,
            :project_id,
            presence: true
  validates_uniqueness_of :user_id, scope: :project_id

  belongs_to :user
  belongs_to :project
end
