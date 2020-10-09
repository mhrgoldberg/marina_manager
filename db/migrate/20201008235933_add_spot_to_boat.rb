class AddSpotToBoat < ActiveRecord::Migration[6.0]
  def change
    add_reference :boats, :spot, foreign_key: true, null: false
  end
end
