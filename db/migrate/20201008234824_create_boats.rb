class CreateBoats < ActiveRecord::Migration[6.0]
  def change
    create_table :boats do |t|
      t.string :name, null: false
      t.integer :length, null: false
      t.string :color, null: false

      t.timestamps
    end
  end
end
