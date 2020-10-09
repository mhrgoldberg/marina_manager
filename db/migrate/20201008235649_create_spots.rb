class CreateSpots < ActiveRecord::Migration[6.0]
  def change
    create_table :spots do |t|
      t.references :boat, foreign_key: true, index: true
      t.integer :spot_number, null: false
      t.timestamps
    end
  end
end
