class FullJobSerializer < ActiveModel::Serializer
  attributes :id, :title, :summary, :category, :description, :address, :lat, :lng
  belongs_to :owner
end
