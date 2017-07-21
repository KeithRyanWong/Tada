class Item < ApplicationRecord

  validates :project_id,
            :source_url,
            presence: true
  
  belongs_to :project
end
