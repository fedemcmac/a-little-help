# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
UserJob.destroy_all
Job.destroy_all
User.destroy_all

u = User.create(username: 'fede', email: "fede@fede.com", password: "fede")
u1 = User.create(username: 'user1', email: "user1@user1.com", password: "user1")
u2 = User.create(username: 'user2', email: "user2@user2.com", password: "user2")

j1 = Job.create(title: "if you like hot weather", summary: "1summary", category: "1category", description: "test1description", user_id: u1.id, address: "Boa Vista, Cape Verde" ,lat: 16.0950108 , lng: -22.807833500000015 )
j2 = Job.create(title: "wall climbers", summary: "2summary", category: "2category", description: "test2description", user_id: u2.id, address: "Great Wall of China, Huairou, China" ,lat: 40.4319077 , lng: 116.57037489999993 )
j3 = Job.create(title: "cold lovers", summary: "3summary", category: "3category", description: "test3description", user_id: u1.id, address: "Icelandic Street Food, Lækjargata, Reykjavík, Iceland" ,lat: 64.1465032 , lng: 21.937890400000015 )
j4 = Job.create(title: "not scared of vulcanos", summary: "4summary", category: "4category", description: "test4description", user_id: u2.id, address: "Pompeii Archaeological Park, Via Villa dei Misteri, Pompei, Metropolitan City of Naples, Italy" ,lat: 40.7482435 , lng: 14.482074600000033 )

uj11 = UserJob.create(user_id: u.id, job_id: j1.id)
uj22 = UserJob.create(user_id: u.id, job_id: j2.id)
uj23 = UserJob.create(user_id: u2.id, job_id: j3.id)
uj13 = UserJob.create(user_id: u1.id, job_id: j3.id)
uj14 = UserJob.create(user_id: u1.id, job_id: j4.id)
uj24 = UserJob.create(user_id: u2.id, job_id: j4.id)

puts "SEEDED"
