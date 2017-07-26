class Project < ApplicationRecord

  validates :user_id,
            :title,
            :splash_id,
            presence: true

  def ordered_items
    items = self.items
    return items.sort do |item1, item2| 
      self.item_order.index(item1.id.to_s) <=> self.item_order.index(item2.id.to_s)
    end
  end
  
  belongs_to :user
  has_many :items, dependent: :destroy, inverse_of: :project
end
