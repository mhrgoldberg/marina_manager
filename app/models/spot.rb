class Spot < ApplicationRecord
	validates :spot_number, presence: true
	has_one :boat

	def self.convert_data_to_object(spots)
		newObject = {}
		spots.each do |spot|
			newObject[spot.spot_number] = spot
		end
		return newObject
	end
end
