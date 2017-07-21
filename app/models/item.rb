class Item < ApplicationRecord

  validates :project_id,
            :source_url,
            presence: true
  
  belongs_to :project
  has_one :user, through: :project
end
