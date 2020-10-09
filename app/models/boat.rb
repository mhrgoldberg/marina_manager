class Boat < ApplicationRecord
	validates :name, :length, :color, :spot_id, presence: true
	belongs_to :spot

	def self.convert_data_to_object(boats)
		newObject = {}
		boats.each do |boat|
			newObject[boat.id] = boat
		end
		return newObject
	end
end
