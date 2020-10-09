class Spot < ApplicationRecord
	validates :spot_number, presence: true
	has_one :boat
end
