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

j1 = Job.create(title: "test1title", summary: "1summary", category: "1category", description: "test1description", user_id: u1.id)
j2 = Job.create(title: "test2title", summary: "2summary", category: "2category", description: "test2description", user_id: u2.id)
j3 = Job.create(title: "test3title", summary: "3summary", category: "3category", description: "test3description", user_id: u1.id)
j4 = Job.create(title: "test4title", summary: "4summary", category: "4category", description: "test4description", user_id: u2.id)

uj11 = UserJob.create(user_id: u.id, job_id: j1.id)
uj22 = UserJob.create(user_id: u.id, job_id: j2.id)
uj23 = UserJob.create(user_id: u2.id, job_id: j3.id)
uj13 = UserJob.create(user_id: u1.id, job_id: j3.id)
uj14 = UserJob.create(user_id: u1.id, job_id: j4.id)
uj24 = UserJob.create(user_id: u2.id, job_id: j4.id)

puts "SEEDED"
