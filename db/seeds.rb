# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
User.create(first_name: "Keith", last_name: "Wong", username: "KRWong12", email: "KRWappAcademy@gmail.com", password: "thisisapass")
User.create(first_name: "Aaron", last_name: "Mondshine", username: "Amoon", email: "am@gmail.com", password: "aaronishere")
User.create(first_name: "Greg", last_name: "Park", username: "Greggles", email: "greggles@yahoo.com", password: "diamond5")
User.create(first_name: "Jared", last_name: "Tan", username: "SunTanJar", email: "jard@hotmail.com", password: "OhMyGawd")
User.create(first_name: "Daniel", last_name: "Kwon", username: "DK", email: "DK@gmail.com", password: "what")
User.create(first_name: "Janet", last_name: "Lee", username: "GhettoBlasta", email: "rapgawd@gmail.com", password: "waitreally")
