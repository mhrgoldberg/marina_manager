# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Spot.destroy_all

Spot.create([{ spot_number: 1 }, { spot_number: 2 }, { spot_number: 3 }, { spot_number: 4 }, { spot_number: 5 }, { spot_number: 6 }, { spot_number: 7 }, { spot_number: 8 }, { spot_number: 9 }, { spot_number: 10 }])
