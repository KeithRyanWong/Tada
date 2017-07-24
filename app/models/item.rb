class Item < ApplicationRecord

  validates :project,
            :source_url,
            :source_type,
            presence: true
  
  belongs_to :project
  has_one :user, through: :project
end
